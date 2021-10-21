<template>
  <div>
    <KTPhpVersion :serverId="this.$parent.serverId"></KTPhpVersion>
    <KTSystemUser :serverId="this.$parent.serverId"> </KTSystemUser>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import KTSystemUser from "../systemuser/SystemUser";
import KTPhpVersion from "./PhpVersion";

export default {
  name: "KTSystem",
  components: {
    KTSystemUser,
    KTPhpVersion
  },
  mounted() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~1111", this.$parent);
  }
};
</script>
