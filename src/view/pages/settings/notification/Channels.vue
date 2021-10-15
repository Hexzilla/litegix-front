<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Notification Channels
        </h3>
        <span class="text-muted font-size-sm mt-1"
          >Add or remove your notification channels</span
        >
      </div>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        <b-link to="notification/channel/new">
          <a class="btn btn-success font-weight-bolder font-size-sm"
            >Add New Channel</a
          >
        </b-link>
      </div>
    </div>
    <div class="card-body">
      <div>
        <span class="font-size-lg mt-8">
          Here you can add notifications to notify you on certain events.
          <br />You can add <b>Slack, Telegram and Email </b>for the
          notification channel. You then can hook the registered notifications
          to your <b> Servers, Atomic Deployment </b> and
          <b> Payment History (soon)</b>.
        </span>
      </div>
      <v-data-table :headers="headers" :items="desserts" class="mt-5">
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "Channels",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Service",
          align: "left",
          sortable: false,
          value: "service"
        },
        { text: "Name", value: "name" },
        { text: "Content", value: "content" },
        { text: "Options", value: "options" }
      ],
      desserts: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" }
    ]);
  },
  methods: {
    save() {
      console.log("save");
    }
  }
};
</script>
