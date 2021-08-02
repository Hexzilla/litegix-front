<template>
  <!--begin::Mixed Widget 14-->
  <v-row>
    <v-col cols="12" sm="4">
      <v-card>
        <!--begin::Header-->
        <v-card-title>
          <h3 class="card-title font-weight-bolder">Load</h3>
        </v-card-title>
        <!--end::Header-->
        <!--begin::Body-->
        <div class=" d-flex flex-column">
          <div class="flex-grow-1">
            <apexchart
              :options="chartOptions"
              :series="load"
              type="radialBar"
            ></apexchart>
          </div>
        </div>
        <!--end::Body-->
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card>
        <!--begin::Header-->
        <v-card-title>
          <h3 class="card-title font-weight-bolder">Memory</h3>
        </v-card-title>
        <!--end::Header-->
        <!--begin::Body-->
        <div class=" d-flex flex-column">
          <div class="flex-grow-1">
            <apexchart
              :options="chartOptions"
              :series="memory"
              type="radialBar"
            ></apexchart>
          </div>
        </div>
        <!--end::Body-->
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card>
        <!--begin::Header-->
        <v-card-title>
          <h3 class="card-title font-weight-bolder">Disk</h3>
        </v-card-title>
        <!--end::Header-->
        <!--begin::Body-->
        <div class=" d-flex flex-column">
          <div class="flex-grow-1">
            <apexchart
              :options="chartOptions"
              :series="disk"
              type="radialBar"
            ></apexchart>
          </div>
        </div>
        <!--end::Body-->
      </v-card>
    </v-col>
  </v-row>
  
  <!--end::Mixed Widget 14-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "usage",
  data() {
    return {
      chartOptions: {},
      load: [],
      memory: [],
      disk: [],
    };
  },
  components: {
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    ...mapGetters(["summery"]),
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
              offsetY: 19,
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
      labels: ["used"]
    };
    this.load = [this.summery.loadAvg];
    this.memory = [Math.ceil(this.summery.totalMemory - this.summery.freeMemory)];
    this.disk = [ Math.ceil(this.summery.diskTotal - this.summery.diskFree)];
    
  }
};
</script>
