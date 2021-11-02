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
        <b-link @click="createDatabaseUser($event)">
          <a class="btn btn-primary font-weight-bolder font-size-sm"
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
        <template #cell(changePassword)="data">
          <b-link @click="changePassword($event, data.item)">
            <span class="label label-lg label-inline label-success">
              Change
            </span>
          </b-link>
        </template>
        <template #cell(delete)="data">
          <a role="button" v-on:click="deleteDatabaseUser(data.item)"
            ><i class="fas fa-trash-alt text-danger"></i
          ></a>
        </template>
      </b-table>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import {
  showSuccessMsgbox,
  showConfirmMsgbox,
  catchError
} from "@/view/shared/msgbox";
import {
  GET_DBUSERS,
  DELETE_DBUSER
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
          key: "changePassword",
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
    createDatabaseUser: function(e) {
      e.preventDefault();
      this.$router.push({
        path: `/servers/${this.serverId}/database/createuser`
      });
    },
    changePassword(e, item) {
      e.preventDefault();
      this.$router.push({
        path: `/servers/${this.serverId}/database/${item.id}/changepassword`
      });
    },
    deleteDatabaseUser: async function(dbuser) {
      console.log("deleteDatabaseUser", dbuser);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }

      this.$store
        .dispatch(DELETE_DBUSER, {
          serverId: this.serverId,
          dbuserId: dbuser.id
        })
        .then(response => {
          console.log("deleteDatabaseUser:", response);
          return showSuccessMsgbox(
            `Database user ${dbuser.name} has been successfully deleted`
          );
        })
        .then(() => {
          const index = this.databaseUsers.indexOf(dbuser);
          if (index >= 0) {
            this.databaseUsers.splice(index, 1);
          }
        })
        .catch(catchError);
    }
  }
};
</script>
