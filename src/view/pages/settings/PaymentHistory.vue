<template>
  <v-card>
    <div class="card-body">
      <!--begin::Header-->
      <v-card-title>
        <h1>Payment History</h1>
        <v-spacer></v-spacer>
      </v-card-title>
      <p class="text-muted font-size-sm mt-1">Your payment history.</p>
      <!--begin::Advance Table Widget 10-->
      <v-data-table :headers="headers" :items="SSHKeys" sort-by="calories">
      </v-data-table>
    </div>
  </v-card>
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
