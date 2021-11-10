<template>
  <div>
    <KTCard ref="publicPath" title="File Manager">
      <template v-slot:toolbar>
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        <b-dropdown class="color-primary" variant="primary" text="Create">
          <b-dropdown-item v-on:click="addNewFile">File</b-dropdown-item>
          <b-dropdown-item v-on:click="addNewFolder">Folder</b-dropdown-item>
        </b-dropdown>
      </template>
      <template v-slot:body>
        <b-table
          :items="files"
          :fields="fileOptions"
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
    <b-modal
      centered
      ref="addNewFileModal"
      title="Add new file"
      ok-title="Create"
    >
      <p>Type the name of file that you want to create.</p>
      <b-form-input
        type="text"
        name="filename"
        placeholder="File name"
      ></b-form-input>
    </b-modal>
    <b-modal
      centered
      ref="addNewFolderModal"
      title="Add new folder"
      ok-title="Create"
    >
      <p>Type the name of file that you want to create.</p>
      <b-form-input
        type="text"
        name="foldername"
        placeholder="Folder name"
      ></b-form-input>
    </b-modal>
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
      files: [],
      fileOptions: [
        { key: "name", label: "File/Folder Name" },
        {
          key: "size",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "type",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "updatedAt",
          label: "Last Modification",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "permission",
          thClass: "text-right",
          tdClass: "text-right"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(GET_DATABASES, this.serverId).then(files => {
      console.log("files", files);
      this.files = files;
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
    deleteFile: async function(filename) {
      console.log("deleteFile", filename);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }

      this.$store
        .dispatch(DELETE_DATABASE, {
          serverId: this.serverId,
          dbId: filename.id
        })
        .then(response => {
          console.log("deleteDatabase", response);
          return showSuccessMsgbox(
            `File ${filename.name} has been successfully deleted`
          );
        })
        .then(() => {
          const index = this.files.indexOf(filename);
          if (index >= 0) {
            this.files.splice(index, 1);
          }
        })
        .catch(catchError);
    },
    addNewFile() {
      this.$refs["addNewFileModal"].show();
    },
    addNewFolder() {
      this.$refs["addNewFolderModal"].show();
    }
  }
};
</script>
