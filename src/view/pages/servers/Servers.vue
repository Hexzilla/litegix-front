<template>
  <div>
    <div v-if="isEmpty()" class="row">
      <div class="offset-xxl-4 offset-md-3 col-xxl-4 col-md-6">
        <EmptyServer></EmptyServer>
      </div>
    </div>
    <div v-if="!isEmpty()" class="row">
      <div class="col-md-12 mb-8">
        <div class="card card-custom">
          <div class="card-header">
            <div class="card-title">
              <span class="card-icon">
                <i class="flaticon2-chat-1 text-primary"></i>
              </span>
              <h3 class="card-label">All Servers</h3>
            </div>
            <div class="card-toolbar">
              <!-- <a href="#" class="btn btn-sm btn-primary ">
                <i class="flaticon2-cube"></i>Create a new server
              </a> -->
              <router-link to="/servers/create" v-slot="{ href, navigate }">
                <a
                  :href="href"
                  @click="navigate"
                  class="btn btn-primary btn-shadow-hover font-weight-bolder w-100 py-3"
                >
                  <i class="flaticon2-cube"></i>Create a new server
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-xxl-3 col-md-4 mb-6"
        v-for="(server, i) in servers"
        :key="i"
      >
        <ServerCard :server="server"></ServerCard>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import ApiService from "@/core/services/api.service";
import EmptyServer from "./EmptyServer.vue";
import ServerCard from "./ServerCard.vue";

export default {
  name: "Servers",
  data() {
    return {
      servers: []
    };
  },
  components: {
    EmptyServer,
    ServerCard
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Servers" }]);
    this.getServers();
  },
  methods: {
    getServers() {
      ApiService.setHeader();
      ApiService.get("servers")
        .then(({ data }) => {
          this.servers = data.servers;
        })
        .catch(() => {});
    },
    isEmpty() {
      return this.servers.length <= 0;
    }
  }
};
</script>
