<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Company Information
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Update your company informaiton</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="reset"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          Save Changes
        </button>
      </div>
    </div>
    <div class="card-body">
      <form class="form mt-5" id="kt_company_form">
        <v-row class="form-group">
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <label for="name"
              >Company Name <span class="required">*</span></label
            >
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter company name"
              name="companyName"
              ref="companyName"
              :value="currentUserCompany.name"
            />
          </v-col>
        </v-row>
        <v-row class="form-group">
          <v-col cols="12" md="3" offset-md="3" sm="12" offset-sm="0">
            <label for="name">Address Line 1</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter address line 1"
              name="addressLine1"
              ref="addressLine1"
              :value="currentUserCompany.address1"
            />
          </v-col>
          <v-col cols="12" md="3" offset-md="0" sm="12" offset-sm="0">
            <label for="name">Address Line 2</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter address line 2"
              name="addressLine2"
              ref="addressLine2"
              :value="currentUserCompany.address2"
            />
          </v-col>
        </v-row>
        <v-row class="form-group">
          <v-col cols="12" md="3" offset-md="3" sm="12" offset-sm="0">
            <label for="name">City</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter city"
              name="city"
              ref="city"
              :value="currentUserCompany.city"
            />
          </v-col>
          <v-col cols="12" md="3" offset-md="0" sm="12" offset-sm="0">
            <label for="name">Country</label>
            <select class="form-control" ref="country" name="country">
              <template v-for="(item, i) in countries">
                <option
                  v-bind:key="i"
                  :value="item"
                  :selected="currentUserCompany.country == item ? true : false"
                  >{{ item }}</option
                >
              </template>
            </select>
          </v-col>
        </v-row>
        <v-row class="form-group">
          <v-col cols="12" md="3" offset-md="3" sm="12" offset-sm="0">
            <label for="name">Postal Code</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter postal code"
              name="postalCode"
              ref="postalCode"
              :value="currentUserCompany.postal"
            />
          </v-col>
          <v-col cols="12" md="3" offset-md="0" sm="12" offset-sm="0">
            <label for="name">State</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter state"
              name="state"
              ref="state"
              :value="currentUserCompany.state"
            />
          </v-col>
        </v-row>
        <v-row class="form-group">
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <label for="name">Tax/VAT/GST Number</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter company name"
              name="taxNumber"
              ref="taxNumber"
              :value="currentUserCompany.tax"
            />
          </v-col>
        </v-row>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  LOAD_PROFILE_INFO,
  UPDATE_COMPANY_INFO
} from "@/core/services/store/profile.module";

import KTUtil from "@/assets/js/components/util";
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import Swal from "sweetalert2";

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { Constants } from "@/core/services/constants.module";

export default {
  name: "Account",
  data() {
    return {
      countries: Constants.countries,
      defaultRule: {
        validators: {
          notEmpty: {
            message: "This field is required"
          }
        }
      }
    };
  },
  beforeMount() {},
  created() {
    this.$store.dispatch(LOAD_PROFILE_INFO, "page-loading");
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings" },
      { title: "Profile" }
    ]);

    const company_form = KTUtil.getById("kt_company_form");
    this.fv = formValidation(company_form, {
      fields: {
        companyName: this.defaultRule,
        city: this.defaultRule,
        country: this.defaultRule,
        postalCode: this.defaultRule
      },
      plugins: {
        trigger: new Trigger(),
        bootstrap: new Bootstrap(),
        submitButton: new SubmitButton()
      }
    });
  },
  methods: {
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        variant: variant,
        solid: true
      });
    },
    showMessageBox(icon, text) {
      Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary"
      });
    },
    save() {
      this.fv.validate();

      this.fv.on("core.form.valid", () => {
        // set spinner to submit button
        const submitButton = this.$refs["kt_save_changes"];
        submitButton.classList.add("spinner", "spinner-light", "spinner-right");

        // send update request
        this.$store
          .dispatch(UPDATE_COMPANY_INFO, {
            companyName: this.$refs.companyName.value,
            address1: this.$refs.addressLine1.value,
            address2: this.$refs.addressLine2.value,
            city: this.$refs.city.value,
            postCode: this.$refs.postalCode.value,
            state: this.$refs.state.value,
            country: this.$refs.country.value,
            gstNumber: this.$refs.taxNumber.value
          })
          .then(data => {
            this.showMessageBox("info", data.message);
          })
          .catch(() => {
            this.showMessageBox("error", "Failed to save changes!");
          })
          .finally(() => {
            submitButton.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          });
      });

      this.fv.on("core.form.invalid", () => {
        this.showMessageBox("error", "Please, provide correct data!");
      });
    }
  },
  computed: {
    ...mapGetters(["loadProfileInfo", "currentUserCompany"])
  }
};
</script>
