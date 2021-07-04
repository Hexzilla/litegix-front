<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Wordpress Canvas</span
        >
        <span class="text-muted mt-3  font-size-sm"
          >List of canvases than can be use when creating Wordpress
          Applications</span
        >
      </h3>
      <div class="card-toolbar">
        <router-link
          to="/settings/wordpress_canvas_create"
          v-slot="{ href, navigate }"
        >
          <a
            :href="href"
            class="btn btn-success font-weight-bolder font-size-sm"
            @click="navigate"
            >Create a new Canvas</a
          >
        </router-link>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <v-data-table :headers="headers" :items="desserts"></v-data-table>
    </div>
  </div>
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
