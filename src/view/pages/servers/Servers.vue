<template>
  <div>
    <div v-if="isEmpty()" class="row">
      <EmptyServer></EmptyServer>
    </div>
    <div v-if="!isEmpty()" class="row">
      <div class="col-md-12 mb-8">
        <div class="card card-custom border round">
          <div class="card-header border-bottom-0">
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
                  class="
                    btn btn-primary btn-shadow-hover
                    font-weight-bolder
                    w-100
                    py-3
                  "
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
import EmptyServer from "./EmptyServer.vue";
import ServerCard from "./ServerCard.vue";
import { mapGetters } from "vuex";
import { GET_SERVERS } from "@/core/services/store/servers.module";

export default {
  name: "Servers",
  components: {
    EmptyServer,
    ServerCard
  },
  computed: {
    ...mapGetters(["servers"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Servers" }]);
    this.$store.dispatch(GET_SERVERS);
  },
  methods: {
    isEmpty() {
      return !(this.servers && this.servers.length > 0);
    }
  }
};
</script>
