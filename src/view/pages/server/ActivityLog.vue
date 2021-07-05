<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="pull-left">Activity Log</h4>
        <div class="pull-right">
          <div
            data-v-18ef91db=""
            class="
              form-group form-search
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <input
              data-v-18ef91db=""
              type="text"
              placeholder="Search..."
              class="form-control input-lg"
            />
          </div>
        </div>
      </div>
      <div class="panel-body">
          <b-table
          :items="items1"
          :fields="fields1"
          show-empty
          empty-text="You don't have anything inside here yet."
        >
          <template #cell(label)="data">
           <div v-if="data.item.label=='Error'">
                <span class="label label-danger"
                ><i class="rc rc-ln-alarm"></i> Error</span
                >
            </div>
            <div v-if="data.item.label=='Info'">
                <span class="label label-success"
                ><i class="rc rc-ln-alarm"></i> Info</span
                >
            </div>
            <div v-if="data.item.label=='Warning'">
                <span class="label label-warning"
                ><i class="rc rc-ln-alarm"></i> Warning</span
                >
            </div>
          </template>
        </b-table>
       
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>
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