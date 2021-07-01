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
        <div class="form-group row"></div>
        <v-card>
            <div class="card-body">
            <v-card-title>
                <h1>Server Transfer Request</h1>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-data-table
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
export default {
  name: "Referal",
  components: {
    StatsWidget7,
    StatsWidget12
  },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Total',
          align: 'left',
          sortable: false,
          value: 'tatal',
        },
        { text: 'PayPal Email', value: 'email' },
        { text: 'Status', value: 'status' },
        { text: 'Request Date', value: 'reqdate' },
        { text: 'Completion Date', value: 'comdate' },
      ],
      desserts: [
      ]
    };
  }
};
</script>
