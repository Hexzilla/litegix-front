<template>
  <!--begin::Advance Table Widget 10-->
  <v-card  class="card-body">
    <!--begin::Header-->
    <v-card-title>
      <h1>Wordpress Canvas</h1>
      <v-spacer></v-spacer>
        <router-link
          to="/settings/wordpress_canvas_create"
          v-slot="{ href, navigate }"
        >
          <a
            :href="href"
            class="btn btn-primary font-weight-bolder font-size-sm"
            @click="navigate"
            >Create a new Canvas</a
          >
        </router-link>
    </v-card-title>
    <!--end::Header-->
    <!--begin::Body-->
    <div>
      <p class="text-muted mt-3  font-size-sm"
        >List of canvases than can be use when creating Wordpress
        Applications</p
      >
      <v-data-table 
        :headers="headers" 
        :items="desserts"
      ></v-data-table>
    </div>
  </v-card>
</template>

<script>
// import { mapGetters } from "vuex";
// import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "WordpressCanvas",
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Wordpress Canvas" }
    ]);
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Plugin", value: "plugin" },
        { text: "Theme", value: "theme" },
        { text: "Custom Plugin", value: "c_plugin" },
        { text: "Custom Theme", value: "c_theme" },
        { text: "Action", value: "action" }
      ],
      desserts: []
    };
  }
};
</script>
