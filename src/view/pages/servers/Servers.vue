<template>
  <div>
    <div class="row">
      <div v-if="isEmpty()" class="offset-xxl-4 offset-md-3 col-xxl-4 col-md-6">
        <EmptyServer @createServer="onCreateServer"></EmptyServer>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import EmptyServer from "./EmptyServer.vue";

export default {
  name: "Servers",
  data() {
    return {
      servers: []
    };
  },
  components: {
    EmptyServer
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Servers" }]);
  },
  methods: {
    isEmpty() {
      return this.servers.length <= 0;
    },
    onCreateServer() {
      console.log("server.createServer");
      this.create = true;
    }
  }
};
</script>
