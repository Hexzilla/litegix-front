<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">Services</span
          ><span class="text-muted mt-3 font-weight-bold font-size-sm"
            >Enable or disable services running on your server. Depending on
            usage, NGiNX, HTTPD, and Supervisord will start or stop
            automatically.</span
          >
        </h3>
      </div>
      <div class="card-body py-5">
        <b-table
          :items="services"
          :fields="fields1"
          show-empty
          empty-text="You don't have anything inside here yet."
        >
          <template #cell(symbol)="data">
            <div class="symbol symbol-50 symbol-light mr-1">
              <span class="symbol-label">
                <img
                  :src="data.item.symbol"
                  class="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
          </template>
          <template #cell(service)="data">
            <a
              class="
                text-dark-75
                font-weight-bolder
                text-hover-primary
                mb-1
                font-size-lg
              "
            >
              {{ data.item.service }}
            </a>
            <div>
              <span class="font-weight-bolder">Email:</span>
              <a class="text-muted font-weight-bold text-hover-primary">
                {{ data.item.version }}
              </a>
            </div>
          </template>
          <template #cell(status)="data">
            <span
              class="label label-lg label-inline"
              v-bind:class="`label-light-${
                data.item.status ? 'success' : 'danger'
              }`"
            >
              {{ data.item.status ? "running" : "stop" }}
            </span>
          </template>
          <template #cell(action)>
            <a class="btn btn-icon btn-light btn-sm">
              <span class="svg-icon svg-icon-md svg-icon-primary">
                <!--begin::Svg Icon-->
                <inline-svg
                  src="media/svg/icons/General/Settings-1.svg"
                ></inline-svg>
                <!--end::Svg Icon-->
              </span>
            </a>
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
      fields1: [
        { key: "symbol", label: "", tdClass: "pr-0 w-50px" },
        "service",
        "processor_usage",
        "memory_usage",
        "status",
        { key: "action", label: "" }
      ],
      items1: [],
      show: "list",
      services: [
        {
          symbol: "media/svg/misc/015-telegram.svg",
          service: "Beanstalk",
          version: "1.11-1",
          processor_usage: "20%",
          memory_usage: "80MB",
          status: true,
          action: ""
        },
        {
          symbol: "media/svg/misc/006-plurk.svg",
          service: "Httpd/Apache",
          version: "2.4-3.3",
          processor_usage: "-",
          memory_usage: "-",
          status: false,
          action: "ReactJs, HTML"
        },
        {
          symbol: "media/svg/misc/003-puzzle.svg",
          service: "MariaDB",
          version: "1.456-maria-focal",
          processor_usage: "-",
          memory_usage: "-",
          status: true,
          action: "Laravel, Metronic"
        },
        {
          symbol: "media/svg/misc/005-bebo.svg",
          service: "Memcached",
          version: "1.525-2ubuntu0.1",
          processor_usage: "45%",
          memory_usage: "8GB",
          status: false,
          action: "AngularJS, C#"
        }
      ]
    };
  }
};
</script>