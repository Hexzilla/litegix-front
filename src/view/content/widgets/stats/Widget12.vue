<template>
  <!--begin::Stats Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Body-->
    <div class="card-body p-0">
      <div
        class="
          d-flex
          align-items-center
          justify-content-between
          card-spacer
          flex-grow-1
        "
      >
        <div class="d-flex flex-column text-left">
          <span class="text-dark-75 font-weight-bolder font-size-h3"
            >$0.00</span
          >
          <span class="text-muted  mt-2">TOTAL EARNED</span>
        </div>
        <span class="symbol symbol-50 symbol-light-primary mr-2">
          <span class="symbol-label">
            <span class="svg-icon svg-icon-xl svg-icon-primary">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg-->
              <inline-svg src="media/svg/icons/Shopping/Cart3.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
        </span>
      </div>
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        type="area"
        width="100%"
      ></apexchart>
      <!--end::Chart-->
      <div
        class="
          row
          d-flex
          align-items-center
          justify-content-between
          card-spacer
        "
      >
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="d-flex flex-column text-left">
            <span class="text-dark-75 font-weight-bolder font-size-h3">$0</span>
            <span class="text-muted  mt-2">CLAIM</span>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="d-flex flex-column text-left">
            <span class="text-dark-75 font-weight-bolder font-size-h3"
              >$0.00</span
            >
            <span class="text-muted  mt-2">UNCLAIMED</span>
          </div>
          <span
            class="
              btn btn-success btn-xs
              v-chip v-chip--label
              v-size--x-small
            "
            id="show-btn"
            @click="showModal"
          >
            Cash Out
          </span>
          <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
        </div>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Stats Widget 10-->
</template>

<script>
import { mapGetters } from "vuex";
import ConfirmDialogue from "@/view/content/widgets/dialogue/ConfirmDialogue.vue";
export default {
  components: {
    ConfirmDialogue
  },
  name: "widget-12",
  // comments:{
  //   ErrorAlert
  // },
  data() {
    return {
      chartOptions: {},
      series: [
        {
          name: "Net Profit",
          data: [40, 40, 30, 30, 35, 35, 50]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  methods: {
    async showModal() {
      const ok = await this.$refs.confirmDialogue.show({
        title: "Cash Out",
        message:
          "Your unclaimed rewards will be reset to $0.00 after you click Request Cash Out button. Cash out request will be processed not more than 7 days. You won't receive full cash out rewards bacause PayPal will take some for processing fees.",
        okButton: "Cast Out"
      });
      // If you throw an error, the method will terminate here unless you surround it wil try/catch
      if (ok) {
        alert("You have successfully delete this page.");
      } else {
        // alert('You chose not to delete this page. Doing nothing now.')
      }
    }
  },
  mounted() {
    // reference; kt_stats_widget_12_chart
    this.chartOptions = {
      chart: {
        type: "area",
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "solid",
        opacity: 1
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [this.layoutConfig("colors.theme.base.primary")]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: this.layoutConfig("colors.gray.gray-300"),
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: this.layoutConfig("font-family")
        },
        y: {
          formatter: function(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [this.layoutConfig("colors.theme.light.primary")],
      markers: {
        colors: [this.layoutConfig("colors.theme.light.primary")],
        strokeColor: [this.layoutConfig("colors.theme.base.primary")],
        strokeWidth: 3
      },
      grid: {
        show: false,
        padding: {
          left: 20,
          right: 20,
          bottom: 20
        }
      }
    };
  }
};
</script>
