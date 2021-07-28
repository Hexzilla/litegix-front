<template>
  <!--begin::Card-->
  <v-card>
    <div class="card-body">
      <!--begin::Header-->
      <v-card-title>
        <h1 class="font-weight-bolder">Connect Your App</h1>
      </v-card-title>

      <v-form>
        <p class="text-muted font-size-sm mt-1">
          Download and scan QR Code using any authenticator app to get your 2FA
          6 digit code. Then, enter 6 digit code from the authenticator app to
          verify your app. We recommend you use one of these: Authy, Google
          Authenticator, Salesforce Authenticator.
        </p>
        <div class="form-group row mb-6">
          <vue-qrcode
            v-bind:value="qrValue"
            v-bind:errorCorrectionLevel="correctionLevel"
          />
        </div>
        <div class="form-group row align-items-center mt-5">
          <label class="col-xl-2 col-lg-2 col-form-label text-lg-right"
            ></label
          >
          <div class="col-lg-8 col-xl-6">
            <v-text-field
              outlined
              dense
              label="Email Address"
              :rules="rules"
              ref="email"
              type="text"
            ></v-text-field>
          </div>
        </div>
        <div class="form-group row align-items-center mt-5">
          <label class="col-xl-2 col-lg-2 col-form-label text-lg-right"></label>
          <div class="col-lg-8 col-xl-6">
            <v-btn
              block
              large
              color="primary"
              type="button"
              @click="update()"
              ref="kt_save_update"
            >
              Delete My Account
            </v-btn>
          </div>
        </div>
      </v-form>
      <!--end::Form-->
    </div>
  </v-card>
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import VueQrcode from "vue-qrcode";

export default {
  name: "Notification",
  components: {
    VueQrcode
  },
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 20 || "Max 20 characters",
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    ],
    return: {
      qrValue: "My secret value",
      correctionLevel: "H"
    }
  }),
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Authentication", route: "authentication" },
      { title: "Connect Your App" }
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
