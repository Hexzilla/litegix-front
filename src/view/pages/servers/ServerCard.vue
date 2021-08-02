<template>
  <div class="card card-custom border round">
    <div class="card-header border-bottom-0 min-h-50px pt-5">
      <div class="card-title">
        <h3 class="card-label">{{ server.name }}</h3>
      </div>
      <div class="card-toolbar">
        <span
          v-if="!server.connected"
          class="label label-lg label-inline label-light-danger"
        >
          Inactive
        </span>
        <span
          v-if="server.connected"
          class="label label-lg label-inline label-light-primary"
        >
          Active
        </span>
      </div>
    </div>
    <div class="card-body py-3">
      <div data-scroll="true" data-height="200">
        <div class="">
          <div class="border-bottom py-2 d-flex">
            <span class="card-icon flex-grow-1">
              <i class="flaticon2-pin text-primary"></i>
            </span>
            <span class="mr-3"></span> {{ server.address }}
          </div>
          <div class="border-bottom py-2 d-flex">
            <span class="card-icon flex-grow-1">
              <i class="flaticon2-user-1 text-primary"></i>
            </span>
            <span class="mr-3"></span> Owned by Me
          </div>
          <div class="border-bottom py-2 d-flex">
            <span class="card-icon flex-grow-1">
              <i class="flaticon2-checkmark text-primary"></i>
            </span>
            <span class="mr-3"></span>
            {{ server.connection ? "Connected" : "Not Connected" }}
          </div>
          <div class="py-2 d-flex">
            <span class="card-icon flex-grow-1">
              <i class="flaticon2-location text-danger"></i>
            </span>
            <span class="mr-3"></span> NGINX
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer bg-light py-3">
      <div class="d-flex">
        <b-link
          :to="`servers/` + server._id + `/config/`"
          class="flex-grow-1 mt-2"
        >
          Connect server
        </b-link>
        <!-- <div class="right">
          <b-link to="server">
            <a class="btn btn-sm btn-icon btn-light-primay mr-2">
              <i class="flaticon2-gear"></i>
            </a>
          </b-link>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ServerCard",
  props: ["server"],
  data() {
    return {};
  },
};
</script>
