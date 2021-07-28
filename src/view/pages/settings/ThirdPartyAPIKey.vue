<template>
  <v-card>
    <div class="card-body">
      <!--begin::Header-->
      <v-card-title>
        <h1>3rd Party API Key</h1>
        <v-spacer></v-spacer>
      </v-card-title>
      <p class="text-muted font-size-sm mt-1">
        This is where you can add 3rd Party API Key. This API Key will be used
        to authorize <b>Let's Encrypt</b> and <b>Spin up a new server</b>. You
        can add up to 20 API Keys here.
      </p>

      <v-data-table
        :headers="tableData.headers"
        :items="tableData.logs"
        :search="tableData.search"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-text-field
              outlined
              dense
              label="Search"
              :search="search"
              hide-details="true"
            ></v-text-field>
            <router-link
              to="/settings/third_party_api_key_add"
              v-slot="{ href, navigate }"
            >
              <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
                <button type="button" class="btn btn-success" ref="add">
                  Add API Key
                </button>
              </a>
            </router-link>
          </v-toolbar>
        </template>

        <template v-slot:item.service="{ item }">
          <span class="label label-lg label-inline label-primary">
            {{ item.service }}
          </span>
        </template>
      </v-data-table>
    </div>
  </v-card>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "3rd Party API Key" }
    ]);
  },
  data() {
    return {
      tableData: {
        search: "",
        headers: [
          {
            text: "Service",
            value: "service"
          },
          {
            text: "Email/Username",
            value: "email"
          },
          {
            text: "Secret",
            value: "secret"
          },
          {
            text: "Action",
            value: "action"
          }
        ],
        logs: [
          {
            service: "label",
            email: "Subscribe to newsletter",
            secret: "28 Jun 2021",
            action: ""
          },
          {
            service: "label",
            email: "Success full login form localhost",
            secret: "28 Jun 2021",
            action: ""
          }
        ]
      }
    };
  }
};
</script>
