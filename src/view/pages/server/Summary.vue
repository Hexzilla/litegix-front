<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h4 class="pull-left">{{ server.name }}(others)</h4>
        <div class="d-flex align-items-center flex-wrap mt-8">
          <!-- Server Address -->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i class="flaticon-piggy-bank text-muted font-weight-bold"></i>
            </span>
            <div class="d-flex flex-column ">
              <span class="font-weight-bolder font-size-sm">IP Address</span>
              <span class="font-weight-bolder font-size-h5">
                {{ server.address }}
              </span>
            </div>
          </div>

          <!-- Agent Address -->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i class="flaticon-confetti text-muted font-weight-bold"></i>
            </span>
            <div class="d-flex flex-column ">
              <span class="font-weight-bolder font-size-sm">Agent Version</span>
              <span class="font-weight-bolder font-size-h5">
                {{ server.agentVersion }}
              </span>
            </div>
          </div>

          <!-- OS Address -->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i class="flaticon-pie-chart text-muted font-weight-bold"></i>
            </span>
            <div class="d-flex flex-column ">
              <span class="font-weight-bolder font-size-sm">OS Version</span>
              <span class="font-weight-bolder font-size-h5">
                {{ server.osVersion }}
              </span>
            </div>
          </div>

          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i class="flaticon-file-2 text-muted font-weight-bold"></i>
            </span>
            <div class="d-flex flex-column flex-lg-fill">
              <span class=" font-weight-bolder font-size-sm">
                Kernel Version
              </span>
              <span class="font-weight-bolder font-size-h5">
                {{ server.kernelVersion }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <!-- CPU Info -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <v-icon>mdi-cpu-64-bit</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p class="text-primary font-size-h4 font-weight-bolder mb-1">
                    CPU
                  </p>
                  <!-- <span class="text-muted font-weight-bold">
                    discription here
                  </span> -->
                </div>
              </div>
            </div>

            <div class="mb-5 mt-5 font-weight-bold">
              <p
                class="text-hover-primary font-size-h4 font-weight-bolder mb-1"
              >
                {{ server.totalCPUCore }} core
              </p>
              {{ server.processorName }}
            </div>
          </div>
        </div>
      </div>

      <!-- Uptime -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <!-- <inline-svg src="media/svg/icons/Files/Download.svg" /> -->
                <v-icon>mdi-av-timer</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p class="text-primary font-size-h4 font-weight-bolder mb-1">
                    UPTIME
                  </p>
                  <!-- <span class="text-muted font-weight-bold">
                    discription here
                  </span> -->
                </div>
              </div>
            </div>

            <div class="mb-5 mt-5 font-weight-bold">
              <p
                class="text-hover-primary font-size-h4 font-weight-bolder mb-1"
              >
                {{ server.uptime }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Memory -->
      <div class="col-xl-6 mt-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <v-icon>mdi-memory</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p class="text-primary font-size-h4 font-weight-bolder mb-1">
                    MEMORY USAGE
                  </p>
                  <!-- <span class="text-muted font-weight-bold">
                    discription here
                  </span> -->
                </div>
              </div>
            </div>

            <div class="d-flex mt-5 mb-5 align-items-cente">
              <div class="d-flex flex-row-fluid align-items-center">
                <b-progress
                  :max="server.totalMemory"
                  height="2rem"
                  class="mt-2 mb-2 w-100"
                >
                  <b-progress-bar :value="memory_usage">
                    <strong>
                      {{ Math.ceil(server.totalMemory - server.freeMemory) }}GB
                    </strong>
                  </b-progress-bar>
                </b-progress>
                <span class="ml-3 font-weight-bolder">
                  {{ Math.ceil(server.totalMemory) }}GB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Disk -->
      <div class="col-xl-6 mt-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                <v-icon>mdi-harddisk</v-icon>
              </div>
              <div class="d-flex flex-column mr-auto">
                <div class="d-flex flex-column mr-auto">
                  <p class="text-primary font-size-h4 font-weight-bolder mb-1">
                    DISK USAGE
                  </p>
                  <!-- <span class="text-muted font-weight-bold">
                    discription here
                  </span> -->
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
                    <strong>
                      {{ Math.ceil(server.diskTotal - server.diskFree) }}GB
                    </strong>
                  </b-progress-bar>
                </b-progress>
                <span class="ml-3 font-weight-bolder">
                  {{ Math.ceil(server.diskTotal) }}GB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { GET_SERVER_SUMMERY } from "@/core/services/store/servers.module";
export default {
  name: "Summery",
  data() {
    return {
      serverId: "",
      server: {},
      memory_total: 4,
      memory_usage: 1.5
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Summery" }]);
    this.$store.dispatch(GET_SERVER_SUMMERY, this.serverId).then(res => {
      console.log(res.data);
      this.server = res.data;
    });
  }
};
</script>
