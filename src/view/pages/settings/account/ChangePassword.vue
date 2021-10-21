<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Change Password
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Change your password</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-primary mr-2"
          @click="submit()"
          ref="kt_save_changes"
        >
          Change Password
        </button>
      </div>
    </div>
    <div class="card-body">
      <form class="form" id="kt_password_change_form">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Current Password:">
              <b-form-input
                placeholder="Enter current password"
                name="current_password"
                ref="current_password"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="New Password:">
              <b-form-input
                placeholder="Enter new password"
                name="new_password"
                ref="new_password"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Confirm Password:">
              <b-form-input
                placeholder="Verify password"
                name="verify_password"
                ref="verify_password"
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
import { UPDATE_PASSWORD } from "@/core/services/store/auth.module";

export default {
  name: "KTChangePassword",
  mounted() {
    const password_change_form = KTUtil.getById("kt_password_change_form");
    this.fv = formValidation(password_change_form, {
      fields: {
        current_password: {
          validators: {
            notEmpty: {
              message: "Current password is required"
            }
          }
        },
        new_password: {
          validators: {
            notEmpty: {
              message: "New password is required"
            },
            different: {
              compare: function() {
                return password_change_form.querySelector(
                  '[name="current_password"]'
                ).value;
              },
              message: "New password must be different with current password"
            }
          }
        },
        verify_password: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function() {
                return password_change_form.querySelector(
                  '[name="new_password"]'
                ).value;
              },
              message: "The password and its confirm are not the same"
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
    this.fv.on("core.form.valid", this.changePassword);
  },

  methods: {
    showMessageBox(icon, text) {
      Swal.fire({
        title: "",
        text: text,
        icon: icon
      });
    },
    submit() {
      this.fv.validate();
    },
    changePassword() {
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(UPDATE_PASSWORD, {
          current_password: this.$refs.current_password.value,
          password: this.$refs.new_password.value,
          password_confirm: this.$refs.verify_password.value
        })
        .then(data => {
          if (data.success) {
            this.fv.resetForm(true);
            return this.showMessageBox("success", data.message);
          } else {
            return this.showMessageBox("error", data.message);
          }
        })
        .catch(err => {
          const message =
            err?.data?.errors?.message || "Failed to change password!";
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
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
