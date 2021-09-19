<template>
  <div>
    <v-card>
      <!-- <div class="card card-custom gutter-b"> -->
      <div class="card-body">
        <!--begin::Details-->
        <h4 class="pull-left">Apptest(others)</h4>
        <!--begin::Items-->
        <div class="d-flex align-items-center flex-wrap mt-8">
          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="
                  flaticon-piggy-bank
                  text-muted
                  font-weight-bold
                "
              ></i>
            </span>
            <div class="d-flex flex-column ">
              <span class="font-weight-bolder font-size-sm">IP Address</span>
              <span class="font-weight-bolder font-size-h5"
                >10.10.10.10</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-confetti text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column ">
              <span class="font-weight-bolder font-size-sm">Agent Version</span>
              <span class="font-weight-bolder font-size-h5"
                >2.4.8 ubuntu 20.d</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-pie-chart text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column ">
              <span class="font-weight-bolder font-size-sm">Os Version</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="-50 font-weight-bold">Windows </span
                >782,300</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-file-2 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column flex-lg-fill">
              <span class=" font-weight-bolder font-size-sm"
                >Kernel Version</span
              >
              <a href="#" class="text-primary font-weight-bolder">{{summery.kernelVersion}}</a>
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--begin::Items-->
      </div>
    </v-card>
    <div class="row mt-5">
      <div class="col-xl-6">
        <v-card>
          <!-- <div class="card card-custom gutter-b card-stretch"> -->
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <v-icon>mdi-cpu-64-bit</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p
                    class="
                       text-hover-primary
                      font-size-h4 font-weight-bolder
                      mb-1
                    "
                  >
                    CPU
                  </p>
                  <span class="text-muted font-weight-bold"
                    >discription here</span
                  >
                </div>
              </div>
            </div>

            <div class="mb-5 mt-5 font-weight-bold">
              <p
                class="
                   text-hover-primary
                  font-size-h4 font-weight-bolder
                  mb-1
                "
              >
                {{summery.totalCPUCore}} core
              </p>
               {{summery.processorName}}
            </div>
          </div>
        </v-card>
      </div>

      <div class="col-xl-6">
        <v-card>
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <!-- <inline-svg src="media/svg/icons/Files/Download.svg" /> -->
                <v-icon>mdi-memory</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p
                    class="
                       text-hover-primary
                      font-size-h4 font-weight-bolder
                      mb-1
                    "
                  >
                    MEMORY USAGE
                  </p>
                  <span class="text-muted font-weight-bold"
                    >discription here</span
                  >
                </div>
              </div>
            </div>

            <div class="d-flex mt-5 mb-5 align-items-cente">
              <div class="d-flex flex-row-fluid align-items-center">
                <b-progress
                  :max="summery.totalMemory"
                  height="2rem"
                  class="mt-2 mb-2 w-100"
                >
                  <b-progress-bar :value="memory_usage">
                    <span
                      >
                      <strong
                        >{{Math.ceil(summery.totalMemory - summery.freeMemory) }}GB</strong
                      ></span
                    >
                  </b-progress-bar>
                </b-progress>
                <span class="ml-3 font-weight-bolder">{{Math.ceil(summery.totalMemory) }}GB</span>
              </div>
            </div>
          </div>
        </v-card>
      </div>
      <div class="col-xl-6">
        <v-card>
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <!-- <inline-svg src="media/svg/icons/Files/Download.svg" /> -->
                <v-icon>mdi-harddisk</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p
                    class="
                       text-hover-primary
                      font-size-h4 font-weight-bolder
                      mb-1
                    "
                  >
                    DISK USAGE
                  </p>
                  <span class="text-muted font-weight-bold"
                    >discription here</span
                  >
                </div>
              </div>
            </div>

            <div class="d-flex mt-5 mb-5 align-items-cente">
              <div class="d-flex flex-row-fluid align-items-center">
                <b-progress
                  :max="memory_total"
                  height="2rem"
                  class="mt-2 mb-2 w-100"
                >
                  <b-progress-bar :value="memory_usage">
                    <span
                      >
                      <strong
                        >{{ Math.ceil(summery.diskTotal - summery.diskFree)}}GB</strong
                      ></span
                    >
                  </b-progress-bar>
                </b-progress>
                <span class="ml-3 font-weight-bolder">{{Math.ceil(summery.diskTotal)}}GB</span>
              </div>
            </div>
          </div>
        </v-card>
      </div>

      <div class="col-xl-6">
        <v-card>
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <!-- <inline-svg src="media/svg/icons/Files/Download.svg" /> -->
                <v-icon>mdi-av-timer</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p
                    class="
                       text-hover-primary
                      font-size-h4 font-weight-bolder
                      mb-1
                    "
                  >
                    UPTIME
                  </p>
                  <span class="text-muted font-weight-bold"
                    >discription here</span
                  >
                </div>
              </div>
            </div>

            <div class="mb-5 mt-5 font-weight-bold">
              <p
                class="
                   text-hover-primary
                  font-size-h4 font-weight-bolder
                  mb-1
                "
              >
                {{summery.uptime }}
              </p>
             
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>


<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { GET_SERVER_SUMMERY } from "@/core/services/store/servers.module";
import { mapGetters } from "vuex";
export default {
  name: "Summery",
  computed: {
    ...mapGetters(["summery"]),
    
  },
  data() {
    return {
      memory_total: 4,
      memory_usage: 1.5,
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Summery" }]);
    this.$store.dispatch(GET_SERVER_SUMMERY, this.$parent.serverId);
  },
};
</script>