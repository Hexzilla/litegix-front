<template>
  <!-- /* eslint-disable */ -->
  <!--begin::Card-->
  <v-app>
    <v-card class="card-body">
      <!--begin::Header-->
      <!-- <div class="card-header py-3"> -->
      <v-card-actions>
        <h1 class="font-weight-bolder">My Profile</h1>
      </v-card-actions>
      <span class="text-muted font-size-sm mt-1"
        >To change your email address, please open a support ticket.</span
      >
      <!-- </div> -->
      <!--end::Header-->
      <!--begin::Form-->
      <v-form id="profile_form" class="mt-5">
        <!--begin::Body-->

        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              ref="email"
              outlined
              dense
              label="email"
              type="text"
              readonly
              v-model="currentUserPersonalInfo.email"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              ref="name"
              outlined
              dense
              label="name"
              type="text"
              v-model="currentUserPersonalInfo.name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-select
              outlined
              dense
              label="Time Zone"
              ref="time_zone"
              :items="time_zones"
              v-model="currentUserPersonalInfo.timezone"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <div class="checkbox-inline">
              <label
                class="
                    checkbox checkbox-lg checkbox-lg checkbox-single
                    flex-shrink-0
                    mr-4
                  "
              >
                <input
                  type="checkbox"
                  ref="email_com"
                  :checked="currentUserPersonalInfo.recv_notification"
                  v-model="currentUserPersonalInfo.recv_notification"
                /><span></span> Login Email Notification</label
              >
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              block
              color="primary"
              elevation="2"
              large
              @click="save_user()"
              ref="user_save_changes"
            >
              Save Changes
            </v-btn>
          </v-col>
        </v-row>
        <!--end::Body-->
      </v-form>
      <!--end::Form-->
    </v-card>
    <div class="form-group"></div>
    <v-card class="card-body">
      <!--begin::Header-->
      <!-- <div class="card-header py-3"> -->
      <v-card-title>
        <h1 class="font-weight-bolder">Company Details</h1>
      </v-card-title>

      <span class="text-muted font-size-sm mt-1">
        If you are representing your company, fill in the form here to get
        invoice under your company name.
      </span>
      <!-- </div> -->
      <!--end::Header-->
      <!--begin::Form-->
      <v-form id="company_form" class="mt-5">
        <!--begin::Body-->
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              ref="CompanyName"
              outlined
              dense
              label="Company Name"
              type="text"
              v-model="currentUserCompanyInfo.name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              ref="AddressLine1"
              outlined
              dense
              label="Address Line1"
              type="text"
              v-model="currentUserCompanyInfo.address1"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              label="Address Line2"
              ref="AddressLine2"
              type="text"
              v-model="currentUserCompanyInfo.address2"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              label="City"
              ref="City"
              type="text"
              v-model="currentUserCompanyInfo.city"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              label="Pstal Code"
              ref="PostalCode"
              type="text"
              v-model="currentUserCompanyInfo.postal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              label="State"
              ref="State"
              type="text"
              v-model="currentUserCompanyInfo.state"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-select
              outlined
              dense
              label="Country"
              ref="country"
              :items="Country"
              v-model="currentUserCompanyInfo.country"
            >
            </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              label="Tax/VAT/GST Number"
              ref="Tax"
              type="text"
              v-model="currentUserCompanyInfo.tax"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              block
              color="primary"
              elevation="2"
              large
              @click="save_company()"
              ref="company_save_changes"
            >
              Save Changes
            </v-btn>
          </v-col>
        </v-row>

        <!--end::Body-->
      </v-form>
      <!--end::Form-->
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import {
  LOAD_PROFILE_INFO,
  UPDATE_PERSONAL_INFO,
  UPDATE_COMPANY_INFO
} from "@/core/services/store/profile.module";

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { Constants } from "@/core/services/constants.module";

export default {
  name: "Account",
  data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null,
      time_zones: Constants.time_zones,
      Country: Constants.countrys,
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
      gstnumber: ""
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

    this.current_photo = this.currentUserPersonalInfo.photo;
  },
  methods: {
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        variant: variant,
        solid: true
      });
    },
    save_user() {
      var name = this.$refs.name.value;
      var email = this.$refs.email.value;
      var timezone = this.$refs.time_zone.value;
      var recv_notification = this.$refs.email_com.checked;
      //photo, surname, job, phone

      // set spinner to submit button
      const submitButton = this.$refs["user_save_changes"];
      submitButton.$el.classList.add(
        "spinner",
        "spinner-light",
        "spinner-right"
      );

      // send update request
      this.$store.dispatch(UPDATE_PERSONAL_INFO, {
        email,
        name,
        timezone,
        recv_notification
      });

      // dummy delay
      setTimeout(() => {
        submitButton.$el.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 1000);
    },
    async save_company() {
      var company_name = this.$refs.CompanyName.value;
      var address1 = this.$refs.AddressLine1.value;
      var address2 = this.$refs.AddressLine2.value;
      var city = this.$refs.City.value;
      var postCode = this.$refs.PostalCode.value;
      var state = this.$refs.State.value;
      var country = this.$refs.country.value;
      var gstNumber = this.$refs.Tax.value;

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
          company_name,
          address1,
          address2,
          city,
          postCode,
          state,
          country,
          gstNumber
        })
        .then(
          response => {
            console.log(response); //response==undefined
            this.makeToast("Profile has been updated successfully.");
            submitButton.$el.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          },
          error => {
            submitButton.$el.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
            this.makeToast(error, "danger");
          }
        );
      //unused
      // .catch(response => {
      //   console.log("update company failed.");
      //   submitButton.$el.classList.remove(
      //     "spinner",
      //     "spinner-light",
      //     "spinner-right"
      //   );
      //   this.makeToast(response, "danger");
      // });

      // dummy delay
      setTimeout(() => {}, 2000);
    },
    cancel() {
      this.$refs.name.value = this.currentUserPersonalInfo.name.replace(
        " ",
        ""
      );
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      //this.$refs.company_site.value = this.currentUserPersonalInfo.company_site;
      this.current_photo = this.currentUserPersonalInfo.photo;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    }
  },
  computed: {
    ...mapGetters([
      "loadProfileInfo",
      "currentUserPersonalInfo",
      "currentUserCompanyInfo",
      "currentUserAccountInfo"
    ]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    }
  }
};
</script>
