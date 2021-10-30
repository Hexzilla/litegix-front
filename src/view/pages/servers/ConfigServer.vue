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
          Almost there! You can close this page while waiting Litegix agent
          successfully installed. Installation might take around 15 minutes. You
          can come back once we configure your server. We'll send an email to
          you once your server is ready.
        </div>
      </div>
      <v-divider></v-divider>
      <div v-if="!isStarted">
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
          </div>
        </div>
      </div>
      <div v-if="isStarted" class="mb-10">
        <div class="text-center mt-4 mb-4">{{ state.message }}</div>
        <!-- <v-progress-linear v-model="state.progress" striped height="25">
          <strong>{{ Math.ceil(state.progress) }}%</strong>
        </v-progress-linear> -->
        <b-progress :max="max" height="1.5rem" class="ml-10 mr-10">
          <b-progress-bar
            :value="state.progress"
            :label="`${((state.progress / max) * 100).toFixed(1)}%`"
          ></b-progress-bar>
        </b-progress>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>
<style scoped>
.code-block {
  font-family: monospace, monospace;
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
      max: 100,
      loginScript: "",
      installScript: "",
      state: {},
      timer: null
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Config" }
    ]);

    const serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_SCRIPT, serverId).then(data => {
      console.log("script", data);
      if (data.success) {
        this.installScript = data.data.installScript;
        this.loginScript = data.data.loginScript;
      }
    });
    this.updateInstallStatus();
    this.timer = setInterval(this.updateInstallStatus, 2000);
  },
  computed: {
    isStarted() {
      return this.state?.status && this.state?.progress >= 0;
    }
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    updateInstallStatus() {
      const serverId = this.$route.params.serverId;
      this.$store.dispatch(GET_INSTALL_STATUS, serverId).then(data => {
        console.log("installation-state", data.data);
        if (data.success) {
          this.state = data.data;
          if (this.state.status == "finish") {
            setTimeout(
              () => this.$router.push({ path: `/servers/${serverId}/summary` }),
              2000
            );
          }
        }
      });
    }
  }
};
</script>
