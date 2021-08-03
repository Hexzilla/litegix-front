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
        <v-btn
          color="primary"
          elevation="2"
          :uppercase="false"
          @click="save()"
          ref="company_save_changes"
        >
          Save Changes
        </v-btn>
        <!-- <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button> -->
      </div>
    </div>
    <div class="card-body">
      <v-form id="company_form" class="mt-5">
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Company Name:" label-for="companyName">
              <b-form-input
                id="companyName"
                ref="companyName"
                type="text"
                required
                placeholder="Enter company name"
                v-model="currentUserCompanyInfo.name"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Address Line 1:" label-for="addressLine1">
              <b-form-input
                id="addressLine1"
                ref="addressLine1"
                type="text"
                required
                placeholder="Enter address line 1"
                v-model="currentUserCompanyInfo.address1"
              ></b-form-input>
            </b-form-group>
          </v-col>
          <v-col cols="12" md="3" offset-md="0" sm="12" offset-sm="0">
            <b-form-group label="Address Line 2:" label-for="addressLine2">
              <b-form-input
                id="addressLine2"
                ref="addressLine2"
                type="text"
                required
                placeholder="Enter address line 2"
                v-model="currentUserCompanyInfo.address2"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="City:" label-for="city">
              <b-form-input
                id="city"
                ref="city"
                type="text"
                required
                placeholder="Enter city"
                v-model="currentUserCompanyInfo.city"
              ></b-form-input>
            </b-form-group>
          </v-col>
          <v-col cols="12" md="3" offset-md="0" sm="12" offset-sm="0">
            <b-form-group label="Country:" label-for="country">
              <b-form-select
                id="country"
                ref="country"
                v-model="currentUserCompanyInfo.country"
                :options="countries"
                required
              ></b-form-select>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Postal Code:" label-for="postalCode">
              <b-form-input
                id="postalCode"
                ref="postalCode"
                type="text"
                required
                placeholder="Enter postal code"
                v-model="currentUserCompanyInfo.postal"
              ></b-form-input>
            </b-form-group>
          </v-col>
          <v-col cols="12" md="3" offset-md="0" sm="12" offset-sm="0">
            <b-form-group label="State:" label-for="state">
              <b-form-input
                id="state"
                ref="state"
                type="text"
                required
                placeholder="Enter state"
                v-model="currentUserCompanyInfo.state"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Tax/VAT/GST Number:" label-for="taxNumber">
              <b-form-input
                id="taxNumber"
                ref="taxNumber"
                type="text"
                required
                placeholder="Enter your tax number"
                v-model="currentUserCompanyInfo.tax"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  LOAD_PROFILE_INFO,
  UPDATE_COMPANY_INFO,
} from "@/core/services/store/profile.module";

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { Constants } from "@/core/services/constants.module";

export default {
  name: "Account",
  data() {
    return {
      countries: Constants.countrys,
      email: "",
      username: "",
      phonenumber: "",
      timezone: "",
      recv_notification: true,

      companyname: "",
      address1: "",
      address2: "",
      city: "",
      pocode: "",
      state: "",
      country: "",
      gstnumber: "",
    };
  },
  beforeMount() {},
  created() {
    this.$store.dispatch(LOAD_PROFILE_INFO, "page-loading");
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings" },
      { title: "Profile" },
    ]);
  },
  methods: {
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        variant: variant,
        solid: true,
      });
    },
    async save() {
      var companyName = this.$refs.companyName.value;
      var address1 = this.$refs.addressLine1.value;
      var address2 = this.$refs.addressLine2.value;
      var city = this.$refs.city.value;
      var postCode = this.$refs.postalCode.value;
      var state = this.$refs.state.value;
      var country = this.$refs.country.value;
      var gstNumber = this.$refs.taxNumber.value;

      // set spinner to submit button
      const submitButton = this.$refs["company_save_changes"];
      submitButton.$el.classList.add(
        "spinner",
        "spinner-light",
        "spinner-right"
      );

      // send update request
      await this.$store
        .dispatch(UPDATE_COMPANY_INFO, {
          companyName,
          address1,
          address2,
          city,
          postCode,
          state,
          country,
          gstNumber,
        })
        .then(
          (response) => {
            console.log(response); //response==undefined
            this.makeToast("Profile has been updated successfully.");
            submitButton.$el.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          },
          (error) => {
            submitButton.$el.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
            this.makeToast(error, "danger");
          }
        );
    },
    cancel() {},
  },
  computed: {
    ...mapGetters(["loadProfileInfo", "currentUserCompanyInfo"]),
  },
};
</script>
