<template>
  <div>
    <SystemUser :serverId="this.$parent.serverId"> </SystemUser>
    <PhpVersion :serverId="this.$parent.serverId"></PhpVersion>
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
