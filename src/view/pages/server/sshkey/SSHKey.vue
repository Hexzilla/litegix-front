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
            <a class="btn btn-primary font-weight-bolder font-size-sm"
              >Add SSHKey</a
            >
          </b-link>
        </div>
      </div>
      <div class="card-body py-5">
        <b-table
          :items="sshKeys"
          :fields="fields"
          show-empty
          empty-text="You don't have any deployment key yet."
        >
          <!-- <template #cell(user)="">
            <span class="svg-icon svg-icon-primary">
              <inline-svg src="media/svg/icons/Design/Layers.svg" />
            </span>
          </template> -->
          <template #cell(publicKey)="">
            <span class="svg-icon svg-icon-primary">
              <inline-svg src="media/svg/icons/General/Visible.svg" />
            </span>
          </template>
          <template #cell(revoke)="data">
            <a role="button" v-on:click="deleteKey(data.item)">
              <i class="fas fa-trash-alt text-danger"></i>
            </a>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import {
  showConfirmMsgbox,
  showSuccessMsgbox,
  catchError
} from "@/view/shared/msgbox";
import {
  GET_SSH_KEYS,
  DELETE_SSH_KEY
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "",
      sshKeys: [],
      checked: false,
      fields: [
        "label",
        {
          key: "userName",
          label: "User",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "publicKey",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "revoke",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ]
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_SSH_KEYS, this.serverId).then(sshKeys => {
      this.sshKeys = sshKeys;
    });
  },
  methods: {
    async deleteKey(sshKey) {
      console.log("deleteKey", sshKey);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }
      const payload = {
        keyId: sshKey.id,
        serverId: this.serverId
      };

      this.$store
        .dispatch(DELETE_SSH_KEY, payload)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            "SSH Key " + sshKey.label + " has been successfully deleted"
          );
        })
        .then(() => {
          const index = this.sshKeys.indexOf(sshKey);
          if (index >= 0) {
            this.sshKeys.splice(index, 1);
          }
        })
        .catch(catchError);
    },
    showPublicKey(item) {
      console.log("showPublicKey", item);
    }
  }
};
</script>
