<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h1 class="font-weight-bolder text-dark">Delete Account</h1>
          <p class="text-muted font-size-sm mt-1">
            Deleting your account will remove all information on your account
            and you will no longer have access to the RunCloud Panel. There is
            no way to revive your account once it has been deleted. Any
            generated invoices will still be kept on record for our internal
            use, but will not be traceable or accessible to you.
          </p>
          <p class="text-muted font-size-sm mt-1">
            If you ever did any payment inside our system, we will keep the
            invoice and receipt for our internal use but it will not be
            traceable back to you since we only store the payment value.
          </p>
        </div>
      </div>
      <form class="form">
        <div class="card-body">
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Email Address</label
            >
            <div class="col-lg-9 col-xl-6">
              <b-input
                :rules="rules"
                dense
                ref="email"
                type="text"
                placeholder="Email Address of you account"
              ></b-input>
            </div>
          </div>

          <div class="form-group row mb-6">
            <label class="col-xl-3 col-lg-3 col-form-label text-right pt-lg-5"
              >Certify To Delelte Account</label
            >
            <div class="col-lg-9 col-xl-6">
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
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right pt-lg-5"
              >Invoice and Receipt</label
            >
            <div class="col-lg-9 col-xl-6 d-flex flex-grow-1">
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
