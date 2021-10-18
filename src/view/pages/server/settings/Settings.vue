<template>
  <div>
    <KTServerDetail></KTServerDetail>
    <KTServerTransfer></KTServerTransfer>
    <KTChangeIPAddress></KTChangeIPAddress>
    <KTSSHConfig></KTSSHConfig>
    <KTAutoUpdate></KTAutoUpdate>
  </div>
</template>

<script>
import KTServerDetail from "./ServerDetail.vue";
import KTServerTransfer from "./ServerTransfer.vue";
import KTChangeIPAddress from "./ChangeIPAddress";
import KTSSHConfig from "./SSHConfig.vue";
import KTAutoUpdate from "./AutoUpdate.vue";
export default {
  components: {
    KTServerDetail,
    KTServerTransfer,
    KTChangeIPAddress,
    KTSSHConfig,
    KTAutoUpdate
  },
  data() {
    return {};
  }
};
</script>
