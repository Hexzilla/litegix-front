<template>
  <div>
    <PhpVersion :serverId="this.$parent.serverId"></PhpVersion>
    <SystemUser :serverId="this.$parent.serverId"> </SystemUser>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import SystemUser from "../systemuser/SystemUser";
import PhpVersion from "./PhpVersion";

export default {
  name: "KTSystem",
  components: {
    SystemUser,
    PhpVersion
  }
};
</script>
