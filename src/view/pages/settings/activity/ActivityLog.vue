<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Activity Log
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"></span>
      </div>
      <div class="card-toolbar">
        <!-- <v-btn color="primary" @click="save()" ref="user_save_changes">
          Save Changes
        </v-btn>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button> -->
      </div>
    </div>
    <div class="card-body">
      <v-data-table
        no-data-text="No data"
        :headers="code4.headers"
        :items="code4.logs"
        :search="code4.search"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-text-field
              outlined
              dense
              label="Search"
              style="margin-top:25px;"
              v-model="code4.search"
              :search="search"
            ></v-text-field>
          </v-toolbar>
        </template>
        <template v-slot:item.name="{ item }">
          <v-chip color="green" label small>
            <v-icon left>mdi-pencil</v-icon>
            {{ item.name }}
          </v-chip>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      code4: {
        search: "",
        headers: [
          {
            text: "Label",
            value: "name"
          },
          {
            text: "Log",
            value: "log"
          },
          {
            text: "Date",
            value: "date"
          },
          {
            text: "Time",
            value: "time"
          }
        ],
        logs: [
          {
            name: "label",
            log: "Subscribe to newsletter",
            date: "28 Jun 2021",
            time: "03:57:34 AM"
          },
          {
            name: "label",
            log: "Success full login form localhost",
            date: "28 Jun 2021",
            time: "05:47:34 PM"
          }
        ]
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Activity Log" }
    ]);
  }
};
</script>
