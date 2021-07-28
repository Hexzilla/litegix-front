<template>
  <div>
    <div class="row">
      <div class="col-xxl-12 col-sm-6 col-md-6 col-lg-6">
        <StatsWidget7></StatsWidget7>
      </div>
      <div class="col-xxl-12 col-sm-6 col-md-6 col-lg-6">
        <StatsWidget12></StatsWidget12>
      </div>
    </div>
    <v-card>
      <div class="card-body mt-5">
        <v-card-title>
          <h1>Claimed Rewards</h1>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-data-table
          no-data-text="No data"
          class="dataTable"
          :headers="headers"
          :items="desserts"
        ></v-data-table>
      </div>
    </v-card>
  </div>
</template>

<script>
import StatsWidget7 from "@/view/content/widgets/stats/Widget7.vue";
import StatsWidget12 from "@/view/content/widgets/stats/Widget12.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "Referal",
  components: {
    StatsWidget7,
    StatsWidget12
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Total",
          align: "left",
          sortable: false,
          value: "tatal"
        },
        { text: "PayPal Email", value: "email" },
        { text: "Status", value: "status" },
        { text: "Request Date", value: "reqdate" },
        { text: "Completion Date", value: "comdate" }
      ],
      desserts: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Referral" }
    ]);
  }
};
</script>
<style scoped>
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  font-size: 1.875rem !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 1.875rem !important;
}
</style>
