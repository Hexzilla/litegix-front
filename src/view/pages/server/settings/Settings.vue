<template>
  <div>
    <KTServerDetail v-bind:server="server"></KTServerDetail>
    <KTChangeIPAddress v-bind:server="server"></KTChangeIPAddress>
    <KTServerTransfer></KTServerTransfer>
    <!-- <KTSSHConfig></KTSSHConfig>
    <KTAutoUpdate></KTAutoUpdate> -->
  </div>
</template>

<script>
import KTServerDetail from "./ServerDetail.vue";
import KTServerTransfer from "./ServerTransfer.vue";
import KTChangeIPAddress from "./ChangeIPAddress.vue";
// import KTSSHConfig from "./SSHConfig.vue";
// import KTAutoUpdate from "./AutoUpdate.vue";
import { GET_SERVER_SETTINGS } from "@/core/services/store/servers.module";
export default {
  components: {
    KTServerDetail,
    KTChangeIPAddress,
    KTServerTransfer
    // KTSSHConfig,
    // KTAutoUpdate
  },
  data() {
    return {
      server: {}
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(GET_SERVER_SETTINGS, this.serverId).then(res => {
      if (res.success) {
        this.server = res.data;
        console.log("this.server", this.server);
      }
    });
  }
};
</script>
