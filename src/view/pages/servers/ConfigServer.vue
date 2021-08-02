<template>
  <v-card>
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
                agent successfully installed. Installation might take around 15
                minutes. You can come back once we configure your server. We'll
                send an email to you once your server is ready.
              </p>
              <v-card-title>
                Manual Installation
                <v-spacer></v-spacer>
                <p class="btn" style="color: red" @click="showModal">
                  this server delete
                </p>
                <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions class="">
                <v-avatar left class="blue mr-3" size="32">1</v-avatar>
                Log into your server as root via SSH/Putty. And enter your root
                password
              </v-card-actions>
              <v-hover v-slot="{ hover }">
                <v-sheet elevation="6" class="ml-10">
                  <v-card-subtitle
                    >{{ configscript.loginScrit }}
                    <v-expand-transition>
                      <v-btn
                        v-if="hover"
                        absolute
                        color="orange"
                        class="white--text copy"
                        fab
                        x-small
                        right
                        @click.stop.prevent="commandCopy(1)"
                      >
                        <v-icon>mdi-checkbox-multiple-blank-outline</v-icon>
                      </v-btn>
                    </v-expand-transition>
                    <input
                      type="hidden"
                      id="com-url"
                      :value="configscript.loginScrit"
                    />
                  </v-card-subtitle>
                </v-sheet>
              </v-hover>
              <v-card-actions class="">
                <v-avatar left class="blue mr-3" size="32">2</v-avatar>
                Copy script below and paste in on your terminal.
              </v-card-actions>
              <v-hover v-slot="{ hover }">
                <v-sheet elevation="6" class="ml-10">
                  <v-card-subtitle>
                    {{ configscript.installScript }}
                    <v-expand-transition>
                      <v-btn
                        v-if="hover"
                        absolute
                        color="orange"
                        class="white--text copy"
                        fab
                        x-small
                        right
                        @click.stop.prevent="commandCopy(2)"
                      >
                        <v-icon>mdi-checkbox-multiple-blank-outline</v-icon>
                      </v-btn>
                    </v-expand-transition>
                    <input
                      type="hidden"
                      id="com-txt"
                      :value="configscript.installScript"
                    />
                  </v-card-subtitle>
                </v-sheet>
              </v-hover>
              <v-card-actions class="">
                <v-avatar left class="blue mr-3" size="32"> 3 </v-avatar>
                Run the script to start.
              </v-card-actions>

              <v-progress-linear v-model="installprocess" striped height="25">
                <strong>{{ Math.ceil(installprocess) }}%</strong>
              </v-progress-linear>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import ConfirmDialogue from "@/view/content/widgets/dialogue/ConfirmDialogue.vue";
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import {
  GET_SCRIPT,
  GET_INSTALLPROCESS,
  DELETE_SERVER,
} from "@/core/services/store/servers.module";

export default {
  name: "ConfigServer",
  props: ["serverId"],
  components: {
    ConfirmDialogue,
  },
  data() {
    return {
      clipboard: null,
      command_url: " ssh root@192.168.1.1",
      command_script:
        "https://manage.runcloud.io/scripts/installer/6bepZ6PReT4qMOdGnooVxCobzM1624876693YmT5lFUfSrxlUlYwr8PhvQa9XZoHX4a9SkR7zEeDciZULlyjWrNcnMaMHOmt6ecM/Lz5TrlmpVcOMl4gvsOrzThHGLVHU5koMAVHx69PUmgaimRZdgJs6TBawneaqHn7cGIfvSopiOhrMwRDcICwL4GHQRzsLqCusjy2rXVpJ8csIMojd5AAjnVubEPxlpbDt | bash -; export DEBIAN_FRONTEND=newt",
    };
  },
  computed: {
    ...mapGetters(["configscript", "installprocess"]),
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Config" },
    ]);
    this.$store.dispatch(GET_SCRIPT, this.serverId);
    this.getUploadProcess();
  },

  methods: {
    getUploadProcess() {
      if (this.installprocess < 100) {
        this.$store.dispatch(GET_INSTALLPROCESS, this.serverId);
        setTimeout(this.getUploadProcess, 1000);
      } else {
        clearTimeout(this.getUploadProcess);
        this.$router.push({ name: "server", params: this.serverId });
      }
    },
    async showModal() {
      const ok = await this.$refs.confirmDialogue.show({
        title: "Delete Server " + this.configscript.name,
        message:
          "Do not forget to delete this server from your cloud provider. Delete this server?",
        okButton: "Delete",
      });
      // If you throw an error, the method will terminate here unless you surround it wil try/catch
      if (ok) {
        alert("You have successfully delete this page.");
        this.$store.dispatch(DELETE_SERVER, this.serverId);
      } else {
        // alert('You chose not to delete this page. Doing nothing now.')
      }
    },
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: ``,
        variant: variant,
        solid: true,
      });
    },
    commandCopy(param) {
      let testingCodeToCopy = "";
      if (param == 1) testingCodeToCopy = document.querySelector("#com-url");
      else testingCodeToCopy = document.querySelector("#com-txt");
      testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        // alert('Testing code was copied ' + msg);
        this.makeToast(msg + "copy", "successful");
      } catch (err) {
        alert("Oops, unable to copy");
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },

    // clipboardSuccessHandler ({ value, event }) {
    //   console.log('success', value)
    // },

    // clipboardErrorHandler ({ value, event }) {
    //   console.log('error', value)
    // },
    submit: function (e) {
      e.preventDefault();
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
      });
    },
  },
};
</script>
