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
            {{ server.connected ? "Connected" : "Not Connected" }}
          </div>
          <div class="py-2 d-flex text-uppercase">
            <span class="card-icon flex-grow-1">
              <i class="flaticon2-location text-danger"></i>
            </span>
            <span class="mr-3"></span> {{ server.webserver }}
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer bg-light py-3">
      <div class="d-flex">
        <b-link
          visible="!server.connected"
          :to="`servers/` + server.id + `/config/`"
          class="flex-grow-1 mt-2"
        >
          Connect server
        </b-link>
        <!-- <b-link
          v-if="server.connected"
          :to="`server/` + server.id + `/summary/`"
          class="flex-grow-1 mt-2"
        >
          Setting
        </b-link> -->
        <div class="right">
          <b-link v-on:click="deleteServer">
            <a class="btn btn-sm btn-icon btn-light-primay mr-2">
              <i class="flaticon2-trash" style="color: red;"></i>
            </a>
          </b-link>
          <b-link :to="`server/` + server.id + `/summary/`">
            <a class="btn btn-sm btn-icon btn-light-primay mr-2">
              <i class="flaticon2-gear"></i>
            </a>
          </b-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import {
  GET_SERVERS,
  DELETE_SERVER
} from "@/core/services/store/servers.module";

export default {
  name: "ServerCard",
  props: ["server"],
  data() {
    return {};
  },
  methods: {
    async deleteServer() {
      console.log("deleteServer", this.server.id);
      const result = await Swal.fire({
        title: "",
        text: "Do you want to delete this?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        heightAuto: false
      });
      if (!result.isConfirmed) {
        return;
      }

      const respone = await this.$store.dispatch(DELETE_SERVER, this.server.id);
      console.log("delete-respone", respone);
      if (respone && respone.success) {
        await Swal.fire({
          title: "",
          text: `Server ${this.server.name} has been successfully deleted`,
          icon: "success",
          heightAuto: false
        });
        this.$store.dispatch(GET_SERVERS);
      }
    }
  }
};
</script>
