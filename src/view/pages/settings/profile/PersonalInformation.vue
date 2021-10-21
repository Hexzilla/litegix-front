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
      <form class="form mt-5" id="kt_profile_form">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="User Name:">
              <b-form-input
                placeholder="Enter your name"
                name="name"
                ref="name"
                :value="currentUserPersonalInfo.username"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Email:">
              <b-form-input
                readonly
                placeholder="Enter your email"
                name="email"
                ref="email"
                :value="currentUserPersonalInfo.email"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Time Zone:">
              <select class="form-control" ref="timezone">
                <template v-for="(item, i) in time_zones">
                  <option
                    v-bind:key="i"
                    :value="item"
                    :selected="currentUserPersonalInfo.timezone == item"
                    >{{ item }}</option
                  >
                </template>
              </select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="">
              <b-form-checkbox
                size="lg"
                ref="notification"
                :checked="currentUserPersonalInfo.loginNotification"
                >Login Email Notification</b-form-checkbox
              >
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
import {
  FETCH_PROFILE_INFO,
  UPDATE_PERSONAL_INFO
} from "@/core/services/store/profile.module";
import { Timezones } from "../../../shared/constants";

export default {
  name: "Account",
  data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null,
      time_zones: Timezones
    };
  },
  created() {
    this.$store.dispatch(FETCH_PROFILE_INFO, "page-loading");
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo", "currentUserAccountInfo"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    }
  },
  mounted() {
    const profile_form = KTUtil.getById("kt_profile_form");
    this.fv = formValidation(profile_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        bootstrap: new Bootstrap(),
        submitButton: new SubmitButton()
      }
    });
    this.fv.on("core.form.valid", this.updateProfile);

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
    showMessageBox(icon, text) {
      return Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    },
    submit() {
      this.fv.validate();
    },
    updateProfile() {
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(UPDATE_PERSONAL_INFO, {
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          timezone: this.$refs.timezone.value,
          loginNotification: this.$refs.notification.checked
        })
        .then(data => {
          if (data.success) {
            return this.showMessageBox("success", "Profile is updated");
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
  }
};
</script>
