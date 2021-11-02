<template>
  <div>
    <KTDBUsers :serverId="this.$parent.serverId"></KTDBUsers>
    <KTDatabases :serverId="this.$parent.serverId"> </KTDatabases>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import KTDatabases from "./Databases";
import KTDBUsers from "./DBUsers";

export default {
  name: "KTUserDatabases",
  components: {
    KTDatabases,
    KTDBUsers
  }
};
</script>
