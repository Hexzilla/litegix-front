<template>
  <v-card>
    <div class="card-body">
      <v-card-title>
        <h1>Activity Log</h1>
        <v-spacer></v-spacer>
      </v-card-title>
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
  </v-card>
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
