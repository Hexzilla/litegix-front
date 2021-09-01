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
          <b-link to="database/create">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Create User</a
            >
          </b-link>
        </div>
      </div>
      <div class="card-body py-0">
        <b-table
          :items="databases"
          :fields="database_fields"
          empty-text="You don't have anything inside here yet."
          show-empty
        >
          <template #cell(name)="data">
            <i class="rc rc-ln-database rc-table-icon"></i>{{ data.item.name }}
          </template>
          <template #cell(database_user)="data">
            <a
              v-for="user in data.item.users"
              :key="user"
              role="button"
              class="mr-1"
              v-on:click="revoke_dbuser(data.item._id, user._id)"
              ><span class="label label-lg label-inline label-primary">
                {{ user.name }}
              </span></a
            >

            <b-link :to="`database/` + data.item._id + `/grant`">
              <span class="label label-lg label-inline label-success">
                Grant User
              </span>
            </b-link>
          </template>
          <template #cell(delete)="data">
            <a role="button" v-on:click="delete_database(data.item._id)"
              ><i class="fas fa-trash-alt text-danger"></i
            ></a>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import { mapGetters } from "vuex";
import {
  GET_DATABASES,
  GET_DBUSERS,
  DELETE_DATABASE,
  DELETE_DBUSER,
  REVOKE_USER
} from "@/core/services/store/serverDB.module";

export default {
  data() {
    return {
      database_fields: [
        { key: "name", label: "Database Name" },
        "database_user",
        "collation",
        "delete"
      ]
    };
  },
  computed: {
    ...mapGetters(["databases", "databaseusers"])
  },
  mounted() {
    this.$store.dispatch(GET_DATABASES, this.$parent.serverId);
    this.$store.dispatch(GET_DBUSERS, this.$parent.serverId);
    console.log("mounted", this.$parent.serverId);
  },
  methods: {
    revoke_dbuser: function(dbId, userId) {
      this.$store.dispatch(REVOKE_USER, {
        serverId: this.$parent.serverId,
        databaseId: dbId,
        dbuserId: userId
      });
      this.$router.go();
    },
    delete_dbuser: function(userId) {
      this.$store.dispatch(DELETE_DBUSER, {
        serverId: this.$parent.serverId,
        dbuserId: userId
      });
      this.$store.dispatch(GET_DATABASES, this.$parent.serverId);
      this.$store.dispatch(GET_DBUSERS, this.$parent.serverId);
    },
    delete_database: function(dbId) {
      this.$store.dispatch(DELETE_DATABASE, {
        serverId: this.$parent.serverId,
        databaseId: dbId
      });
      this.$store.dispatch(GET_DATABASES, this.$parent.serverId);
      this.$store.dispatch(GET_DBUSERS, this.$parent.serverId);
    }
  }
};
</script>
