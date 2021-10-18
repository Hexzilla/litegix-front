<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Database User</span
        >
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        <b-link to="database/createuser">
          <a class="btn btn-success font-weight-bolder font-size-sm"
            >Create Database User</a
          >
        </b-link>
      </div>
    </div>
    <div class="card-body py-0">
      <b-table
        empty-text="You don't have anything inside here yet."
        :items="databaseUsers"
        :fields="dtabaseUserFields"
        show-empty
      >
        <template #cell(name)="data">
          <i class="rc rc-ln-database rc-table-icon"></i>{{ data.item.name }}
        </template>
        <template #cell(change_password)="data">
          <b-link :to="`database/` + data.item.id + `/changepassword`">
            <span class="label label-lg label-inline label-danger">
              Change
            </span>
          </b-link>
        </template>
        <template #cell(delete)="data">
          <a role="button" v-on:click="delete_dbuser(data.item)"
            ><i class="fas fa-trash-alt text-danger"></i
          ></a>
        </template>
      </b-table>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import Swal from "sweetalert2";
import {
  GET_DBUSERS,
  DELETE_DBUSER,
  REVOKE_USER
} from "@/core/services/store/database.module";

export default {
  name: "KTDBUsers",
  props: ["serverId"],
  data() {
    return {
      databaseUsers: [],
      dtabaseUserFields: [
        { key: "name", label: "User Name" },
        {
          key: "change_password",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "delete",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ]
    };
  },
  mounted() {
    this.$store
      .dispatch(GET_DBUSERS, this.serverId)
      .then(databaseUsers => (this.databaseUsers = databaseUsers));
  },
  methods: {
    revoke_dbuser: function(dbId, userId) {
      this.$store.dispatch(REVOKE_USER, {
        serverId: this.serverId,
        databaseId: dbId,
        dbuserId: userId
      });
      this.$router.go();
    },
    delete_dbuser: async function(dbuser) {
      console.log("delete_dbuser", dbuser);
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

      const respone = await this.$store.dispatch(DELETE_DBUSER, {
        serverId: this.serverId,
        dbuserId: dbuser.id
      });
      console.log("delete-respone", respone);
      if (respone && respone.success) {
        this.$store.dispatch(GET_DBUSERS, this.serverId);

        Swal.fire({
          title: "",
          text: `Database user ${dbuser.name} has been successfully deleted`,
          icon: "success",
          heightAuto: false
        });
      }
    }
  }
};
</script>
