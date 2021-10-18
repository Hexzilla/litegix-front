<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">SSH Key</span>
        </h3>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />
          <b-link to="sshkey/create">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Add SSHKey</a
            >
          </b-link>
        </div>
      </div>
      <div class="card-body py-5 ml-8 mr-8">
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr class="text-center">
                <th class="pl-0 text-left" style="min-width: 200px">
                  Label
                </th>
                <th>User</th>
                <th>Public Key</th>
                <th class="pr-0">Revoke</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in sshKeys">
                <tr v-bind:key="i">
                  <td class="pl-0">
                    <span
                      class="
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                      >{{ item.label }}</span
                    >
                  </td>
                  <td class="pl-0 text-center">
                    <i class="btn btn-icon btn-center btn-hover-primary btn-sm">
                      <span class="svg-icon svg-icon-md svg-icon-primary">
                        <inline-svg
                          src="media/svg/icons/General/Lock.svg"
                        ></inline-svg>
                      </span>
                    </i>
                  </td>
                  <td class="pl-0 text-center">
                    <i class="btn btn-icon btn-center btn-hover-primary btn-sm">
                      <span class="svg-icon svg-icon-md svg-icon-primary">
                        <inline-svg
                          src="media/svg/icons/General/Lock.svg"
                        ></inline-svg>
                      </span>
                    </i>
                  </td>
                  <td class="pr-0 text-center">
                    <a role="button" v-on:click="deleteKey(item)"
                      ><i class="fas fa-trash-alt text-danger"></i
                    ></a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import Swal from "sweetalert2";
import {
  GET_SSH_KEYS,
  DELETE_SSH_KEY
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      sshKeys: [],
      checked: false,
      serverId: false
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(GET_SSH_KEYS, this.serverId).then(sshKeys => {
      this.sshKeys = sshKeys;
    });
  },
  methods: {
    async deleteKey(user) {
      console.log("deleteKey", user);
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
      const payload = {
        userId: user._id,
        serverId: this.serverId
      };
      const response = await this.$store.dispatch(DELETE_SSH_KEY, payload);
      console.log("deleteKey--success", response);
      this.fetchSSHKeys();
      this.onDeleteSuccess(user.name);
    },
    onDeleteSuccess(name) {
      Swal.fire({
        title: "",
        text: "System user " + name + " has been successfully deleted",
        icon: "success",
        heightAuto: false
      });
    }
  }
};
</script>
