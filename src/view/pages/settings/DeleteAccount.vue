<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            Delete Account
          </h3>
          <p class="text-muted font-size-sm mt-1">
            Delete your account
          </p>
        </div>
      </div>
      <form class="form">
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
            <div class="alert-close">
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
            </div>
          </div>
          <!--end::Alert-->
          <div class="form-group row align-items-center">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Email Address</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="email"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div class="form-group row mb-6">
            <label class="col-xl-3 col-lg-3 col-form-label text-right pt-lg-5"
              >Certify To Delelte Account</label
            >
            <div class="col-lg-9 col-xl-6">
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" ref="chk_certify" /><span></span>
                  I certify that I want to delete my account from RunCloud.
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right pt-lg-5"
              >Invoice and Receipt</label
            >
            <div class="col-lg-9 col-xl-6 d-flex flex-grow-1">
              <label class="checkbox">
                <input type="checkbox" ref="chk_invoice" /><span></span>
                I understand that my invoice and receipt will be keep for
                internal reference.
              </label>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"></label>
            <div class="col-lg-9 col-xl-6">
              <button
                type="button"
                class="btn btn-success w-100"
                @click="update()"
                ref="kt_save_update"
              >
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </form>
      <!--end::Form-->
    </div>
  </div>
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
