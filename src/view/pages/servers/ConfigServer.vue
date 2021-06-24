<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">Configuring your server</h3>
              </div>
              <i class="wizard-arrow last flaticon2-next"></i>
            </div>
          </div>
        </div>

        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12 col-xxl-7">
            <div
              class="pb-5"
              data-wizard-type="step-content"
              data-wizard-state="current"
            >
              <p>
                Almost there! You can close this page while waiting RunCloud
                agent successfully installed. Installation might take around 
                15 minutes. You can come back once we configure your server. 
                We'll send an email to you once your server is ready.
              </p>
              <p>Please choose how you would like to install your server.</p>

              <p>
                Log into your server as root via SSH/Putty. And enter your root password
              </p>
              <p>
                Copy script below and paste in on your terminal.
              </p>
              <p>
                Run the script to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

export default {
  name: "ConfigServer",
  data() {
    return {
      /*ServerType: "Server",
      commandValue: `mkdir -p /root/.ssh && touch /root/.ssh/authorized_keys && echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvVRd/oYPD8IaK1NuIaGkOIV/zvISGrkeBL7XY967cOXgJf26Zr/60bEGYzcQKG1OpAa8g6PPH2skUIw1i3geR3/0atMU1Osj8hV9Z6WCxCFlfGOjmJGzuR+TT8EcgYegdBTE2zIPahajUHaAZTYljb7ewEugflOeh0sRpZ3BER83hu1a8xoibIn+UuSXEN3f++BSdxZNu7suGd46fBgWeUw`,
      warningText: `Your server needs to have a new unused installation of Ubuntu 16.04, 18.04 or 20.04 x64 and must contain a root user. 
                    To get started, add this public key to /root/.ssh/authorized_keys file.`*/
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Config" }
    ]);
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    }
  }
};
</script>
