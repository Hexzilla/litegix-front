<template>
  <div>
    <KTDatabases :serverId="this.$parent.serverId"> </KTDatabases>
    <KTDBUsers :serverId="this.$parent.serverId"></KTDBUsers>
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
