<template>
  <v-app>
    <!--begin::Advance Table Widget 10-->
    <div class="card card-custom gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Payment History</span
          >
          <span class="text-muted mt-3 font-size-sm"
            >Your payment history.</span
          >
        </h3>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body py-0">
        <v-data-table :headers="headers" :items="SSHKeys" sort-by="calories">
        </v-data-table>
      </div>
    </div>
  </v-app>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data: () => ({
    headers: [
      {
        text: "Amount",
        align: "start",
        sortable: false,
        value: "amount"
      },
      { text: "Type", value: "type" },
      { text: "Payment Date", value: "date" },
      { text: "Invoice", value: "invoice" },
      { text: "Receipt", value: "receipt" }
    ],
    history: []
  }),

  created() {
    this.initialize();
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Payment History" }
    ]);
  },

  methods: {
    initialize() {
      this.history = [];
    }
  }
};
</script>
