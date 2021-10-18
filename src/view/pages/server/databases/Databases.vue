<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Database</span>
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        <b-link to="database/create">
          <a class="btn btn-success font-weight-bolder font-size-sm"
            >Create Database</a
          >
        </b-link>
      </div>
    </div>
    <div class="card-body py-0">
      <b-table
        :items="databases"
        :fields="databaseFields"
        empty-text="You don't have anything inside here yet."
        show-empty
      >
        <template #cell(name)="data">
          <i class="rc rc-ln-database rc-table-icon"></i>{{ data.item.name }}
        </template>
        <template #cell(database_user)="data">
          <a
            v-for="user in data.item.users"
            :key="user._id"
            role="button"
            class="mr-1"
            v-on:click="revoke_dbuser(data.item._id, user._id)"
            ><span class="label label-lg label-inline label-primary">
              {{ user.name }}
            </span></a
          >

          <b-link :to="`database/` + data.item.id + `/grant`">
            <span class="label label-lg label-inline label-primary">
              Grant User
            </span>
          </b-link>
        </template>
        <template #cell(collation)="data">
          {{ data.item.collation }}
        </template>
        <template #cell(delete)="data">
          <a role="button" v-on:click="delete_database(data.item)"
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
  GET_DATABASES,
  DELETE_DATABASE,
  REVOKE_USER
} from "@/core/services/store/database.module";

export default {
  name: "KTDatabases",
  props: ["serverId"],
  data() {
    return {
      databases: [],
      databaseFields: [
        { key: "name", label: "Database Name" },
        {
          key: "database_user",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "collation",
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
      .dispatch(GET_DATABASES, this.serverId)
      .then(databases => (this.databases = databases));
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
    delete_database: async function(database) {
      console.log("delete_database", database);
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

      const respone = await this.$store.dispatch(DELETE_DATABASE, {
        serverId: this.serverId,
        dbId: database.id
      });
      console.log("delete-respone", respone);
      if (respone && respone.success) {
        this.$store.dispatch(GET_DATABASES, this.serverId);

        Swal.fire({
          title: "",
          text: `Database ${database.name} has been successfully deleted`,
          icon: "success",
          heightAuto: false
        });
      }
    }
  }
};
</script>
