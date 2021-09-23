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
          class="btn btn-success mr-2"
          @click="update()"
          ref="kt_save_changes"
        >
          Change Password
        </button>
      </div>
    </div>
    <div class="card-body">
      <form class="form" id="kt_password_change_form">
        <v-row class="form-group">
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <label for="current_password">Current Password:</label>
            <input
              type="password"
              class="form-control mb-2"
              placeholder="Enter current password"
              name="current_password"
              ref="current_password"
            />
          </v-col>
        </v-row>
        <v-row class="form-group">
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <label for="new_password">New Password:</label>
            <input
              type="password"
              class="form-control mb-2"
              placeholder="Enter new password"
              name="new_password"
              ref="new_password"
            />
          </v-col>
        </v-row>
        <v-row class="form-group">
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <label for="verify_password">Confirm password:</label>
            <input
              type="password"
              class="form-control mb-2"
              placeholder="Verify password"
              name="verify_password"
              ref="verify_password"
            />
          </v-col>
        </v-row>
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
  props: {
    type: {
      type: String,
      default: "text"
    },
    auto: [String, Boolean]
  },
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
  },

  methods: {
    showMessageBox(icon, text) {
      Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary"
      });
    },
    update() {
      this.fv.validate();

      this.fv.on("core.form.valid", () => {
        const submitButton = this.$refs["kt_save_changes"];
        submitButton.classList.add("spinner", "spinner-light", "spinner-right");

        this.$store
          .dispatch(UPDATE_PASSWORD, {
            current_password: this.$refs.current_password.value,
            password: this.$refs.new_password.value,
            password_confirm: this.$refs.verify_password.value
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
    ...mapGetters(["currentUser"])
  }
};
</script>
