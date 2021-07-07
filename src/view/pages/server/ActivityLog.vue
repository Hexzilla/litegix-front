<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Server Details</span
        >
      </h3>

      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
      </div>
    </div>
    <div class="card-body pb-10 pt-0">
      <b-table
        :items="items1"
        :fields="fields1"
        show-empty
        empty-text="You don't have anything inside here yet."
      >
        <template #cell(label)="data">
          <div v-if="data.item.label == 'Error'">
            <span class="label label-lg label-inline label-danger"> Error</span>
          </div>
          <div v-if="data.item.label == 'Info'">
            <span class="label label-lg label-inline label-success"> Info</span>
          </div>
          <div v-if="data.item.label == 'Warning'">
            <span class="label label-lg label-inline label-warning">
              Warning</span
            >
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields1: ["label", "log", "data", "time"],
      items1: [
        {
          label: "Error",
          log: "Unable to communicate with Server ReCloud (65.21.49.177).",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Info",
          log: "Added new database DBTest with collation utf8_general_ci",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Warning",
          log: "Added firewall rule: Accept any IP Address to 80/TCP",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Error",
          log: "Unable to communicate with Server ReCloud (65.21.49.177).",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Info",
          log: "Added new database DBTest with collation utf8_general_ci",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Warning",
          log: "Added firewall rule: Accept any IP Address to 80/TCP",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Error",
          log: "Unable to communicate with Server ReCloud (65.21.49.177).",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Info",
          log: "Added new database DBTest with collation utf8_general_ci",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
        {
          label: "Warning",
          log: "Added firewall rule: Accept any IP Address to 80/TCP",
          date: "02 Jul 2021",
          time: "01:03:51 PM",
        },
      ],
    };
  },
};
</script>