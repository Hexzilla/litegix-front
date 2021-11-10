<template>
  <div>
    <KTCard ref="deploy" title="Domains">
      <template v-slot:toolbar>
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        <b-link @click="createDatabase($event)">
          <a class="btn btn-primary font-weight-bolder font-size-sm">
            Create Domain
          </a>
        </b-link>
      </template>
      <template v-slot:body>
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
              v-on:click="revokeDatabaseUser(data.item.id, user.id)"
              ><span class="label label-lg label-inline label-primary">
                {{ user.name }}
              </span></a
            >

            <b-link @click="grantUser($event, data.item)">
              <span class="label label-lg label-inline label-success">
                Grant User
              </span>
            </b-link>
          </template>
          <template #cell(collation)="data">
            {{ data.item.collation }}
          </template>
          <template #cell(delete)="data">
            <a role="button" v-on:click="deleteDatabase(data.item)"
              ><i class="fas fa-trash-alt text-danger"></i
            ></a>
          </template>
        </b-table>
      </template>
    </KTCard>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import KTCard from "@/view/content/Card.vue";
import {
  showConfirmMsgbox,
  showSuccessMsgbox,
  catchError
} from "@/view/shared/msgbox";
import {
  GET_DATABASES,
  DELETE_DATABASE,
  REVOKE_USER
} from "@/core/services/store/database.module";

export default {
  name: "KTDatabases",
  props: ["serverId"],
  components: {
    KTCard
  },
  data() {
    return {
      databases: [],
      databaseFields: [
        { key: "name", label: "Domain Name" },
        {
          key: "type",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "dns",
          label: "DNS Integration",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "www",
          label: "WWW",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "Preference",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "ssl",
          label: "SSL",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(GET_DATABASES, this.serverId).then(databases => {
      console.log("databases", databases);
      this.databases = databases;
    });
  },
  methods: {
    createDatabase: function(e) {
      e.preventDefault();
      this.$router.push({ path: `/servers/${this.serverId}/database/create` });
    },
    revokeDatabaseUser: function(dbId, userId) {
      this.$store.dispatch(REVOKE_USER, {
        serverId: this.serverId,
        databaseId: dbId,
        dbuserId: userId
      });
      this.$router.go();
    },
    grantUser(e, item) {
      this.$router.push({
        path: `/servers/${this.serverId}/database/${item.id}/grant`
      });
    },
    deleteDatabase: async function(database) {
      console.log("deleteDatabase", database);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }

      this.$store
        .dispatch(DELETE_DATABASE, {
          serverId: this.serverId,
          dbId: database.id
        })
        .then(response => {
          console.log("deleteDatabase", response);
          return showSuccessMsgbox(
            `Database ${database.name} has been successfully deleted`
          );
        })
        .then(() => {
          const index = this.databases.indexOf(database);
          if (index >= 0) {
            this.databases.splice(index, 1);
          }
        })
        .catch(catchError);
    }
  }
};
</script>
