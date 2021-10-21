<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">Delete Account</h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Delete your account</span
        >
      </div>
      <div class="card-toolbar">
        <!-- <v-btn color="primary" @click="save()" ref="user_save_changes">
          Save Changes
        </v-btn>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button> -->
      </div>
    </div>
    <div class="card-body">
      <form class="form" id="kt_delete_account_form">
        <div class="card-body">
          <div
            class="alert alert-custom alert-light-danger fade show mb-10"
            role="alert"
          >
            <div class="alert-icon">
              <span class="svg-icon svg-icon-3x svg-icon-danger">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect x="0" y="0" width="24" height="24" />
                    <circle
                      fill="#000000"
                      opacity="0.3"
                      cx="12"
                      cy="12"
                      r="10"
                    />
                    <rect
                      fill="#000000"
                      x="11"
                      y="10"
                      width="2"
                      height="7"
                      rx="1"
                    />
                    <rect
                      fill="#000000"
                      x="11"
                      y="7"
                      width="2"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
            </div>
            <div class="alert-text font-weight-bold">
              <p>
                Deleting your account will remove all information on your
                account and you will no longer have access to the Litegix
                service. There is no way to revive your account once it has been
                deleted. Any generated invoices will still be kept on record for
                our internal use, but will not be traceable or accessible to
                you.
              </p>
              <p>
                If you ever did any payment inside our system, we will keep the
                invoice and receipt for our internal use but it will not be
                traceable back to you since we only store the payment value.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
              <b-form-group label="Email Address:">
                <b-form-input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  ref="email"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
              <b-form-group label="">
                <b-form-checkbox size="lg"
                  >I certify that I want to delete my account from
                  Litegix.</b-form-checkbox
                >
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
              <b-form-group label="">
                <b-form-checkbox size="lg">
                  I understand that my invoice and receipt will be keep for
                  internal reference.
                </b-form-checkbox>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0 text-center">
              <button
                type="reset"
                class="btn btn-danger"
                @click="submit($event)"
                ref="kt_save_changes"
              >
                Delete My Account
              </button>
            </div>
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
import { DELETE_ACCOUNT } from "@/core/services/store/account.module";

export default {
  name: "KTDeleteAccount",
  mounted() {
    const delete_account_form = KTUtil.getById("kt_delete_account_form");
    this.fv = formValidation(delete_account_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
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
    this.fv.on("core.form.valid", this.deleteAccount);
  },

  methods: {
    showMessageBox(icon, text) {
      Swal.fire({
        title: "",
        text: text,
        icon: icon
      });
    },
    submit(e) {
      e.preventDefault();
      this.fv.validate();
    },
    deleteAccount() {
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(DELETE_ACCOUNT, {
          email: this.$refs.email.value
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
            err?.data?.errors?.message || "Failed to delete account!";
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
