<template>
  <div>
    <div class="card card-custom">
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            API Key
          </h3>
          <span class="text-muted font-size-sm mt-1">
            Manage API Key and API Secret
          </span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title align-items-start flex-column">
          <p class="font-size-md mt-1">
            You can use this API Key and API Secret to download your backup. To
            enable API access, you need to enable API Access.
          </p>
        </div>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="API Key:" label-for="apiKey">
              <b-input-group class="mt-3">
                <b-form-input
                  id="apiKey"
                  type="text"
                  required
                  readonly
                  ref="apiKey"
                  v-model="apiKeys.apiKey"
                  append-icon="mdi-refresh"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-success">
                    <span class="navi-icon">
                      <i class="flaticon2-copy"></i>
                    </span>
                  </b-button>
                  <b-button variant="info" @click="generateApiKey">
                    <span class="navi-icon">
                      <i class="flaticon2-refresh-1"></i>
                    </span>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Secret Key:" label-for="secretKey">
              <b-input-group class="mt-3">
                <b-form-input
                  id="secretKey"
                  type="text"
                  required
                  readonly
                  ref="secretKey"
                  v-model="apiKeys.secretKey"
                  append-icon="mdi-refresh"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-success">
                    <span class="navi-icon">
                      <i class="flaticon2-copy"></i>
                    </span>
                  </b-button>
                  <b-button variant="info" @click="generateSecretKey">
                    <span class="navi-icon">
                      <i class="flaticon2-refresh-1"></i>
                    </span>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </v-col>
        </v-row>

        <div class="card-title align-items-start flex-column mt-20">
          <p class="font-size-md mt-1">
            Enable API Access to use the Litegix API endpoint. If you are only
            using the API Key and API Secret to download backups, you don't have
            to enable this.
          </p>
        </div>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-select
              v-model="apiKeys.enableAccess"
              :options="enableAccessOptions"
              @change="changeEnalbeAccess"
            ></b-form-select>
          </v-col>
        </v-row>
      </div>
    </div>

    <IPRestriction class="mt-10"></IPRestriction>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapGetters } from "vuex";
import {
  FETCH_API_KEYS,
  GENERATE_API_KEY,
  GENERATE_SECRET_KEY,
  UPDATE_ENABLE_ACCESS
} from "@/core/services/store/account.module";
import IPRestriction from "./IPRestriction.vue";

export default {
  name: "Authentication",
  data() {
    return {
      enableAccessOptions: [
        { value: true, text: "Enable" },
        { value: false, text: "Disable" }
      ]
    };
  },
  computed: {
    ...mapGetters(["apiKeys"])
  },
  components: {
    IPRestriction
  },
  mounted: function() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "API Key" }
    ]);

    this.$store.dispatch(FETCH_API_KEYS);
  },
  methods: {
    async generateApiKey() {
      const result = await Swal.fire({
        title: "",
        text: "Do you want to generate new API Key?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        heightAuto: false
      });
      if (!result.isConfirmed) {
        return;
      }

      const response = await this.$store.dispatch(GENERATE_API_KEY);
      if (response && response.success) {
        console.log("generateApiKey-success");
      }
    },
    async generateSecretKey() {
      const result = await Swal.fire({
        title: "",
        text: "Do you want to generate new secret key?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        heightAuto: false
      });
      if (!result.isConfirmed) {
        return;
      }

      const response = await this.$store.dispatch(GENERATE_SECRET_KEY);
      if (response && response.success) {
        console.log("generateSecretKey-success");
      }
    },
    async changeEnalbeAccess(state) {
      const payload = {
        state: state
      };
      const response = await this.$store.dispatch(
        UPDATE_ENABLE_ACCESS,
        payload
      );
      if (response && response.success) {
        console.log("enable-success");
      }
    }
  }
};
</script>
