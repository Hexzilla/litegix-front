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
          type="button"
          class="btn btn-primary mr-2"
          @click="submit()"
          ref="kt_save_changes"
        >
          Save Changes
        </button>
      </div>
    </div>
    <div class="card-body">
      <form class="form mt-5" id="kt_company_form">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Company Name:">
              <b-form-input
                placeholder="Enter company name"
                name="companyName"
                ref="companyName"
                :value="currentUserCompany.name"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Address Line 1:">
              <b-form-input
                placeholder="Enter address line 1"
                name="addressLine1"
                ref="addressLine1"
                :value="currentUserCompany.address1"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-3 offset-md-0 col-sm-12 offset-sm-0">
            <b-form-group label="Address Line 2:">
              <b-form-input
                placeholder="Enter address line 2"
                name="addressLine2"
                ref="addressLine2"
                :value="currentUserCompany.address2"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="City:">
              <b-form-input
                placeholder="Enter city"
                name="city"
                ref="city"
                :value="currentUserCompany.city"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-3 offset-md-0 col-sm-12 offset-sm-0">
            <b-form-group label="Country:">
              <select class="form-control" ref="country" name="country">
                <template v-for="(item, i) in countries">
                  <option
                    v-bind:key="i"
                    :value="item"
                    :selected="
                      currentUserCompany.country == item ? true : false
                    "
                    >{{ item }}</option
                  >
                </template>
              </select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Postal Code:">
              <b-form-input
                placeholder="Enter postal code"
                name="postalCode"
                ref="postalCode"
                :value="currentUserCompany.postal"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-3 offset-md-0 col-sm-12 offset-sm-0">
            <b-form-group label="State:">
              <b-form-input
                placeholder="Enter state"
                name="state"
                ref="state"
                :value="currentUserCompany.state"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Tax/VAT/GST Number:">
              <b-form-input
                placeholder="Enter company name"
                name="taxNumber"
                ref="taxNumber"
                :value="currentUserCompany.tax"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import KTUtil from "@/assets/js/components/util";
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import { Countries } from "../../../shared/constants";
import {
  FETCH_PROFILE_INFO,
  UPDATE_COMPANY_INFO
} from "@/core/services/store/profile.module";

export default {
  name: "KTCompanyInformation",
  data() {
    return {
      countries: Countries,
      defaultRule: {
        validators: {
          notEmpty: {
            message: "This field is required"
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters(["currentUserCompany"])
  },
  created() {
    this.$store.dispatch(FETCH_PROFILE_INFO);
  },
  mounted() {
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
    this.fv.on("core.form.valid", this.updateCompany);
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
      return Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary"
      });
    },
    submit() {
      this.fv.validate();
    },
    updateCompany() {
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(UPDATE_COMPANY_INFO, {
          name: this.$refs.companyName.value,
          address1: this.$refs.addressLine1.value,
          address2: this.$refs.addressLine2.value,
          city: this.$refs.city.value,
          postal: this.$refs.postalCode.value,
          state: this.$refs.state.value,
          country: this.$refs.country.value,
          tax: this.$refs.taxNumber.value
        })
        .then(data => {
          if (data.success) {
            return this.showMessageBox(
              "success",
              "Company information is updated"
            );
          } else {
            return this.showMessageBox("error", data.errors.message);
          }
        })
        .catch(err => {
          const message =
            err.data?.errors?.message || "Failed to save changes!";
          return this.showMessageBox("error", message);
        })
        .finally(() => {
          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        });
    }
  }
};
</script>
