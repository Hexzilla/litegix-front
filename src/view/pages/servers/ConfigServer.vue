<template>
  <div class="card card-custom max-w-sm-800px mx-auto">
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
      </div>
      <div class="row justify-content-center my-1 p-8">
        <div class="col-xl-12 col-xxl-12">
          Almost there! You can close this page while waiting RunCloud agent
          successfully installed. Installation might take around 15 minutes. You
          can come back once we configure your server. We'll send an email to
          you once your server is ready.
        </div>
      </div>
      <v-divider></v-divider>
      <div class="row justify-content-center my-2 p-8">
        <div class="col-xl-12 col-xxl-12">
          <div class="">
            <b-badge class="mr-4" variant="info">1</b-badge>
            Log into your server as root via SSH/Putty. And enter your root
            password
          </div>
          <div class="my-8">
            <div class="code-block">{{ loginScript }}</div>
          </div>
          <div class="">
            <b-badge class="mr-4" variant="info">2</b-badge>
            Copy script below and paste in on your terminal.
          </div>
          <div class="my-8">
            <div class="code-block">{{ installScript }}</div>
          </div>
          <div class="">
            <b-badge class="mr-4" variant="info">3</b-badge>
            Run the script to start.
          </div>
          <!-- <div class="mt-4">
            <v-progress-linear v-model="installprocess" striped height="25">
              <strong>{{ Math.ceil(installprocess) }}%</strong>
            </v-progress-linear>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>
<style scoped>
.code-block {
  border-radius: 4px;
  margin-left: 36px;
  background-color: #e3e6e9;
  padding: 12px;
  font-size: 12px;
  word-break: break-all;
}
</style>

<script>
//import Swal from "sweetalert2";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  GET_SCRIPT,
  GET_INSTALL_STATUS
} from "@/core/services/store/servers.module";

export default {
  name: "ConfigServer",
  props: ["serverId"],
  data() {
    return {
      loginScript: "",
      installScript: "",
      timeout: null
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Config" }
    ]);
    this.$store.dispatch(GET_SCRIPT, this.serverId).then(data => {
      console.log("script", data);
      if (data.success) {
        this.installScript = data.data.installScript;
        this.loginScript = data.data.loginScript;
      }
    });
    this.timeout = setTimeout(this.updateInstallStatus, 500);
  },
  methods: {
    updateInstallStatus() {
      const serverId = this.$parent.serverId;
      this.$store.dispatch(GET_INSTALL_STATUS, serverId).then(data => {
        console.log("state", data);
      });
    }
  }
};
</script>
