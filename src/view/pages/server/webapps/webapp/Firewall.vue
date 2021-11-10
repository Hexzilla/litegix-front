<template>
  <div>
    <KTCard ref="deploy" title="Web Application Firewall ">
      <template v-slot:toolbar>
        <b-link @click="saveSettings($event)">
          <a class="btn btn-primary font-weight-bolder font-size-sm">
            Save Settings
          </a>
        </b-link>
      </template>
      <template v-slot:body>
        <p class="font-size-md mt-1">
          Enable and configure your web application firewall (WAF). Our WAF uses
          ModSecurity with OWASP ModSecurity Core Rule Set. This feature also
          include GeoLite2 data developed by MaxMind. If you are using WordPress
          and want to use nG-Series firewall by PerishablePress, it is available
          under NGiNX Config menu as an NGiNX drop in file.
        </p>
        <div>
          <!-- <div class="col-md-8 offset-md-2 col-sm-12 offset-sm-0"> -->
          <div class="pt-10">
            <b-form-group label="Firewall Mode">
              <b-form-select
                v-model="enableFirewall"
                :options="enableFirewallOptions"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="pt-10">
            <div v-if="enableFirewall">
              <b-form-group label="Paranoia Level">
                <p class="font-size-md mt-1">
                  Choose desired level of rule check to protect your web
                  application. Higher paranoia levels will strengthen web
                  security, but will also increase the possibility of blocking
                  legitimate traffic and false alarm.
                  <b>Recommended level for most use case: 1 or 2.</b>
                </p>
                <b-form-select
                  v-model="paranoiaLevel"
                  :options="paranoiaLevels"
                ></b-form-select>
              </b-form-group>
              <b-form-group label="Anomaly Threshold" class="mt-14">
                <p class="font-size-md mt-1">
                  ModSecurity assign a score for each security risk found in a
                  request (Critical: 5, Error: 4, Warning: 3, Notice: 2).
                  Anomaly threshold determine the accumulated score for a
                  request to be blocked.
                  <b>Recommended level for production: 5-10.</b>
                </p>
                <b-form-select
                  v-model="anomalyThreshold"
                  :options="anomalyThresholds"
                ></b-form-select>
              </b-form-group>
              <b-form-group label="Common Rule Exclusion" class="mt-14">
                <p class="font-size-md mt-1">
                  If you are using any of those Web Application below, tick in
                  the checkbox to reduce false positive.
                </p>
                <b-form-select
                  v-model="enableFirewall"
                  :options="enableFirewallOptions"
                ></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="py-10">
            <button
              type="submit"
              class="btn btn-primary btn-block"
              ref="kt_form_submit"
            >
              Save Settings
            </button>
          </div>
        </div>
      </template>
    </KTCard>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import KTCard from "@/view/content/Card.vue";
import {
  showConfirmMsgbox,
  showSuccessMsgbox,
  catchError
} from "@/view/shared/msgbox";
import {
  GET_DATABASES,
  DELETE_DATABASE,
  REVOKE_USER
} from "@/core/services/store/database.module";

export default {
  name: "KTDatabases",
  props: ["serverId"],
  components: {
    KTCard
  },
  data() {
    return {
      enableFirewallOptions: [
        { value: true, text: "Enable" },
        { value: false, text: "Disable" }
      ],
      paranoiaLevels: [
        { value: 1, text: "Level 1" },
        { value: 2, text: "Level 2 (Recommended)" },
        { value: 3, text: "Level 3" },
        { value: 4, text: "Level 4" },
        { value: 5, text: "Level 5" }
      ],
      anomalyThresholds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      enableFirewall: true,
      paranoiaLevel: 2,
      anomalyThreshold: 1,
      databases: []
    };
  },
  mounted() {
    this.$store.dispatch(GET_DATABASES, this.serverId).then(databases => {
      console.log("databases", databases);
      this.databases = databases;
    });
  },
  methods: {
    createDatabase: function(e) {
      e.preventDefault();
      this.$router.push({ path: `/servers/${this.serverId}/database/create` });
    },
    revokeDatabaseUser: function(dbId, userId) {
      this.$store.dispatch(REVOKE_USER, {
        serverId: this.serverId,
        databaseId: dbId,
        dbuserId: userId
      });
      this.$router.go();
    },
    grantUser(e, item) {
      this.$router.push({
        path: `/servers/${this.serverId}/database/${item.id}/grant`
      });
    },
    deleteDatabase: async function(database) {
      console.log("deleteDatabase", database);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }

      this.$store
        .dispatch(DELETE_DATABASE, {
          serverId: this.serverId,
          dbId: database.id
        })
        .then(response => {
          console.log("deleteDatabase", response);
          return showSuccessMsgbox(
            `Database ${database.name} has been successfully deleted`
          );
        })
        .then(() => {
          const index = this.databases.indexOf(database);
          if (index >= 0) {
            this.databases.splice(index, 1);
          }
        })
        .catch(catchError);
    },
    saveSettings(e) {
      e.preventDefault();
    }
  }
};
</script>
