<template>
  <!--begin::Card-->
  <v-card>
    <div class="card-body">
      <!--begin::Header-->
        <v-card-title>
          <h1 class="font-weight-bolder">Delete Account</h1>
        </v-card-title>
        <p class="text-muted font-size-sm mt-1">
          Delete your account
        </p>
      
      <v-form>
        <div class="card-body">
          <!--begin::Alert-->
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
                account and you will no longer have access to the RunCloud
                Panel. There is no way to revive your account once it has been
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
            <!--<div class="alert-close">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="ki ki-close"></i>
                </span>
              </button>
            </div>-->
          </div>
          <!--end::Alert-->
        </div>

          <v-row>
            <v-col cols="1"></v-col
            >
            <v-col cols="10">
              <v-text-field
                outlined
                label="Email Address"
                :rules="rules"
                dense
                ref="email"
                type="text"
              ></v-text-field>
            </v-col>
          </v-row>

        <v-row>
          <v-col cols="1"></v-col
          >
          <v-col cols="10">
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
                  <span class="text-muted">
                    I certify that I want to delete my account from RunCloud.
                  </span>
                </div>
              </label>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col
          >
          <v-col cols="10" class="d-flex flex-grow-1">
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
                <span class="text-muted">
                  I understand that my invoice and receipt will be keep for
                  internal reference.
                </span>
              </div>
            </label>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              color="primary"
              block
              type="button"
              @click="update()"
              ref="kt_save_update"
            >
              Delete My Account
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <!--end::Form-->
    </div>
  </v-card>
</template>
<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "Notification",
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
