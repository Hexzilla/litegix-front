<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Personal Information
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Update your personal informaiton</span
        >
      </div>
      <div class="card-toolbar">
        <v-btn color="primary" @click="save()" ref="user_save_changes">
          Save Changes
        </v-btn>
        <!-- <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button> -->
      </div>
    </div>
    <v-card class="card-body">
      <v-form id="profile_form" class="mt-5">
        <v-row>
          <v-col cols="col-lg-9 col-xl-6 offset-lg-3 offset-xl-3">
            <b-form-group label="User Name:" label-for="username">
              <b-form-input
                id="username"
                type="text"
                required
                placeholder="Enter user name"
                ref="name"
                v-model="currentUserPersonalInfo.name"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="col-lg-9 col-xl-6 offset-lg-3 offset-xl-3">
            <b-form-group label="Email:" label-for="email" description="">
              <b-form-input
                id="email"
                type="email"
                required
                readonly
                placeholder="Enter your email"
                ref="email"
                v-model="currentUserPersonalInfo.email"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="col-lg-9 col-xl-6 offset-lg-3 offset-xl-3">
            <b-form-group label="Time Zone:" label-for="timezone">
              <b-form-select
                id="timezone"
                v-model="currentUserPersonalInfo.timezone"
                :options="time_zones"
                required
                ref="time_zone"
              ></b-form-select>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="col-lg-9 col-xl-6 offset-lg-3 offset-xl-3">
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
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  LOAD_PROFILE_INFO,
  UPDATE_PERSONAL_INFO,
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

    this.current_photo = this.currentUserPersonalInfo.photo;
  },
  methods: {
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        variant: variant,
        solid: true,
      });
    },
    save() {
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
        recv_notification,
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
    cancel() {
      this.$refs.name.value = this.currentUserPersonalInfo.name.replace(
        " ",
        ""
      );
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      this.current_photo = this.currentUserPersonalInfo.photo;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = (event) => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
  },
  computed: {
    ...mapGetters([
      "loadProfileInfo",
      "currentUserPersonalInfo",
      "currentUserAccountInfo",
    ]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    },
  },
};
</script>
