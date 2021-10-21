<template>
  <div>
    <SSHKey :serverId="this.$parent.serverId"></SSHKey>
    <DeploymentKey :serverId="this.$parent.serverId"> </DeploymentKey>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import SSHKey from "./SSHKey";
import DeploymentKey from "./DeploymentKey";

export default {
  name: "SSHKeyIndex",
  components: {
    SSHKey,
    DeploymentKey
  }
};
</script>
