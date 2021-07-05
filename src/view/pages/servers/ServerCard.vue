<template>
  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="flaticon2-chat-1 text-primary"></i>
        </span>
        <h3 class="card-label">{{ server.name }}</h3>
      </div>
      <div class="card-toolbar">
        <b-link to="servers/config">
          <a class="btn btn-sm btn-icon btn-light-primay mr-2">
            <i class="flaticon2-gear"></i>
          </a>
        </b-link>
      </div>
    </div>
    <div class="card-body">
      <div data-scroll="true" data-height="200">
        <div class="row checkbox-list">
          <div class="ml-4 m-1">
            <span class="card-icon">
              <i class="flaticon2-pin text-primary"></i>
            </span>
            <span class="mr-3"></span> {{ server.address }}
          </div>
          <div class="ml-4 m-1">
            <span class="card-icon">
              <i class="flaticon2-user-1 text-primary"></i>
            </span>
            <span class="mr-3"></span> Owned by Me
          </div>
          <div class="ml-4 m-1">
            <span class="card-icon">
              <i class="flaticon2-checkmark text-primary"></i>
            </span>
            <span class="mr-3"></span> Not Connected
          </div>
          <div class="ml-4 m-1">
            <span class="card-icon">
              <i class="flaticon2-location text-danger"></i>
            </span>
            <span class="mr-3"></span> NGINX
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="card-footer d-flex justify-content-between">
      <a href="#" class="btn btn-light-primary ">Manage</a>
      <a href="#" class="btn btn-outline-secondary "
        >Learn more</a
      >
    </div> -->
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
