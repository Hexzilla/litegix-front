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
    <v-card class="card-body">
      <v-form id="deleteAccount">
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

          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
              <b-form-group label="Email Address:" label-for="email">
                <b-form-input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  ref="email"
                ></b-form-input>
              </b-form-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
              <div class="d-flex flex-grow-1">
                <label
                  class="
                    checkbox checkbox-lg checkbox-lg checkbox-single
                    flex-shrink-0
                    mr-4
                    v-treeview
                  "
                >
                  <input
                    id="chk_certify"
                    type="checkbox"
                    value="1"
                    ref="chk_certify"
                  />
                  <span></span>
                </label>
                <label
                  for="chk_certify"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <span>
                      I certify that I want to delete my account from Litegix.
                    </span>
                  </div>
                </label>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
              <div class="d-flex flex-grow-1">
                <label
                  class="
                    checkbox checkbox-lg checkbox-lg checkbox-single
                    flex-shrink-0
                    mr-4
                    v-treeview
                  "
                >
                  <input
                    id="chk_invoice"
                    type="checkbox"
                    value="1"
                    ref="chk_invoice"
                  />
                  <span></span>
                </label>
                <label
                  for="chk_invoice"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <span>
                      I understand that my invoice and receipt will be keep for
                      internal reference.
                    </span>
                  </div>
                </label>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
              <button
                type="reset"
                class="btn btn-success mr-2"
                @click="update()"
              >
                Delete My Account
              </button>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "KTDeleteAccount",
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 20 || "Max 20 characters",
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    ]
  }),
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Delete Account" }
    ]);
  },
  methods: {
    update() {
      var certify = this.$refs.chk_certify.value;
      var chk_invoice = this.$refs.chk_invoice.value;
      var email = this.$refs.email.value;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_update"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_PERSONAL_INFO, {
          certify,
          chk_invoice,
          email
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
  }
};
</script>
