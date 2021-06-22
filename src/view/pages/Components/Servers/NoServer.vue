<template>
  <!--begin::Mixed Widget 14-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-10">
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="pt-5">
        <h3 class="text-center card-title font-weight-bolder">You don't have any servers yet</h3>
        <p class="text-center font-weight-normal font-size-lg pb-7">
          Currently you do not own any servers.  <br />Luckily Litegix makes this real easy for you to do.
        </p>
        <router-link
          to="/Servers/Create"
          v-slot="{ href, navigate }"
        >
          <a :href="href" @click="navigate"
            class="btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3"
            >Create Server</a
          >
        </router-link>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 14-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-7",
  data() {
    return {
      chartOptions: {},
      series: [74]
    };
  },
  components: {
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    // reference; kt_stats_widget_7_chart
    this.chartOptions = {
      chart: {
        height: 200,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700"
            },
            value: {
              color: this.layoutConfig("colors.gray.gray-700"),
              fontSize: "30px",
              fontWeight: "700",
              offsetY: 12,
              show: true
            }
          },
          track: {
            background: this.layoutConfig("colors.theme.light.success"),
            strokeWidth: "100%"
          }
        }
      },
      colors: [this.layoutConfig("colors.theme.base.success")],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
  }
};
</script>
