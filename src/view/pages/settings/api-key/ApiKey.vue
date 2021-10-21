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
            Enable API Access to use the Litegix API endpoint. If you are only
            using the API Key and API Secret to download backups, you don't have
            to enable this.
          </p>
        </div>
        <div>
          <div class="col-md-8 offset-md-2 col-sm-12 offset-sm-0">
            <b-form-select
              v-model="apiKeys.enableAccess"
              :options="enableAccessOptions"
              @change="changeEnalbeAccess"
            ></b-form-select>
          </div>
        </div>

        <div class="card-title align-items-start flex-column mt-20">
          <p class="font-size-md mt-1">
            You can use this API Key and API Secret to download your backup. To
            enable API access, you need to enable API Access.
          </p>
        </div>
        <div>
          <div class="col-md-8 offset-md-2 col-sm-12 offset-sm-0">
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
          </div>
        </div>
        <div>
          <div class="col-md-8 offset-md-2 col-sm-12 offset-sm-0">
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
          </div>
        </div>
      </div>
    </div>

    <IPRestriction class="mt-10"></IPRestriction>
  </div>
</template>

<script>
import IPRestriction from "./IPRestriction.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  GET_API_KEYS,
  GENERATE_API_KEY,
  GENERATE_SECRET_KEY,
  UPDATE_ENABLE_ACCESS
} from "@/core/services/store/account.module";
import {
  makeSuccessToast,
  showConfirmMsgbox,
  catchError
} from "@/view/shared/msgbox";

export default {
  name: "Authentication",
  data() {
    return {
      apiKeys: {
        enableAccess: false,
        apiKey: "API Key",
        secretKey: "Secret Key"
      },
      enableAccessOptions: [
        { value: true, text: "Enable" },
        { value: false, text: "Disable" }
      ]
    };
  },
  components: {
    IPRestriction
  },
  mounted: function() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "API Key" }
    ]);

    this.$store.dispatch(GET_API_KEYS).then(apiKeys => {
      console.log("apiKeys", apiKeys);
      this.apiKeys = apiKeys;
    });
  },
  methods: {
    generateApiKey: async function() {
      const result = await showConfirmMsgbox(
        "Do you want to generate new API Key?"
      );
      if (!result.isConfirmed) {
        return;
      }

      this.$store
        .dispatch(GENERATE_API_KEY)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          this.apiKeys = data.data.apiKeys;
          makeSuccessToast(this, "Your API Key has been successfully created.");
        })
        .catch(catchError);
    },
    generateSecretKey: async function() {
      console.log("generateSecretKey");
      const result = await showConfirmMsgbox(
        "Do you want to generate new secret key?"
      );
      if (!result.isConfirmed) {
        return;
      }

      this.$store
        .dispatch(GENERATE_SECRET_KEY)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          this.apiKeys = data.data.apiKeys;
          makeSuccessToast(
            this,
            "Your Secret Key has been successfully created."
          );
        })
        .catch(catchError);
    },
    changeEnalbeAccess: function(state) {
      const payload = {
        state: state
      };
      this.$store
        .dispatch(UPDATE_ENABLE_ACCESS, payload)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          this.apiKeys.enableAccess = data.data.enableAccess;

          const message = this.apiKeys.enableAccess
            ? "API access is enabled."
            : "API access is disabled.";
          makeSuccessToast(this, message);
        })
        .catch(catchError);
    }
  }
};
</script>
