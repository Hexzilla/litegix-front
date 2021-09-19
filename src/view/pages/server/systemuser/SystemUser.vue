<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >System User</span
          >
        </h3>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />
          <b-link to="systemuser/create">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Create User</a
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
                  Username
                </th>
                <th>Change Password</th>
                <th class="pr-0">Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in systemUsers">
                <tr v-bind:key="i">
                  <td class="pl-0">
                    <span
                      class="
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                      >{{ item.name }}</span
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
                  <td class="pr-0 text-center">
                    <a role="button" v-on:click="deleteUser(item)"
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
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

import {
  GET_SYSTEM_USERS,
  DELETE_SYSTEM_USER
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      checked: false,
      serverId: false
    };
  },
  computed: {
    ...mapGetters(["systemUsers"])
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(GET_SYSTEM_USERS, this.serverId);
  },
  methods: {
    async deleteUser(user) {
      console.log("deleteuser", user);
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
        userId: user.id,
        serverId: this.serverId
      };
      const response = await this.$store.dispatch(DELETE_SYSTEM_USER, payload);
      console.log("deleteuser--success", response);
      this.$store.dispatch(GET_SYSTEM_USERS, this.serverId);
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
