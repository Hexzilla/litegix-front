<template>
  <div class="row">
    <div class="col-md-12">
      <v-card class="mx-auto">
        <v-app-bar dark color="primary">
          <v-toolbar-title
            ><i class="flaticon2-cube text-white mr-2"></i> My
            Projects</v-toolbar-title
          >
          <v-spacer></v-spacer>

          <v-text-field
            placeholder="Search..."
            outlined
            color="white"
            @change="inlineUpdate"
            :loading="searchStatus"
            dense
            clearable
            class="mt-7 max-w-300px"
          ></v-text-field>
          <!-- <v-btn class="ma-2" outlined color="white">Create Project</v-btn> -->
        </v-app-bar>
      </v-card>
      <v-container v-if="items.length != 0">
        <v-row dense>
          <v-col  md="4" sm="12" cols="12" >
            <b-link to="/Projects/create">
            <v-card color="primary" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">Create a New Project</v-card-title>

                  <v-card-subtitle>Click here to create your server</v-card-subtitle>
                </div>
              </div>
            </v-card>
            </b-link>
          </v-col>
          <v-col v-for="(item, i) in items" :key="i" md="4"  sm="12" cols="6">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle>Server: {{ item.server }}</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-card v-if="items.length == 0" class="w-400px mt-20 py-10 px-20 mx-auto">
        <div class="text-center">
          <div class="symbol symbol-60 symbol-circle symbol-xl-90">
            <div
              class="symbol-label"
              :style="{
                backgroundImage: `url('media/logos/logo-letter-3.png')`,
              }"
            ></div>
          </div>

          <h4 class="font-weight-bold my-2">You don't have any project yet</h4>
          <div class="text-muted mb-2">
            Currently you do not own any project. Our site makes this real easy
            for you to do.
          </div>
          <b-link to="/Projects/create">
            <b-button size="lg" class="my-3 my-sm-0 ml-auto" variant="primary"
              >Create Project</b-button
            >
          </b-link>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data: () => ({
    searchStatus: false,
    items: [
      {
        color: "#1F7087",
        title: "Supermodel",
        server: "Foster the People",
      },
      {
        color: "#952175",
        title: "Halcyon Days",
        server: "Ellie Goulding",
      },
      {
        color: "#1F7087",
        title: "Supermodel",
        server: "Foster the People",
      },
      {
        color: "#952175",
        title: "Halcyon Days",
        server: "Ellie Goulding",
      },
    ],
  }),
  methods: {
    inlineUpdate() {
      this.toggleLoading();
      //   //  axios.put("/some/url", ...)
      //   //     .then(apiResponse => { //do some stuff })
      //   //     .catch(apiError => { //oh no! })
      //   //     .finally(() => { this.toggleLoading(this.activeSelect); });
    },
    toggleLoading() {
      this.searchStatus = !this.searchStatus;
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Project" }]);
  },
};
</script>
