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
      <div class="overflow-auto">
        <b-table
          :items="channels"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          show-empty
          empty-text="You don't have anything activity logs."
        >
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="channels.length"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { GET_CHANNELS } from "@/core/services/store/account.module";

export default {
  name: "Channels",
  data() {
    return {
      channels: [],
      fields: ["service", "name", "address", "options"],
      currentPage: 1,
      perPage: 10
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" }
    ]);
    this.$store.dispatch(GET_CHANNELS).then(channels => {
      console.log("this.channels", channels);
      this.channels = channels;
    });
  },
  methods: {
    save() {
      console.log("save");
    }
  }
};
</script>
