<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Deployment Key
        </span>
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
      </div>
      <p class="font-size-md mt-1">
        To use Git Deployment inside a Web Application, you must use and
        generate a Git Deployment Key. Each user can only have one deployment
        key, and it can be used for multiple Web Applications (except you are
        using GitHub).
      </p>
    </div>
    <div class="card-body py-0">
      <b-table
        :items="deployKeys"
        :fields="fields"
        show-empty
        empty-text="You don't have any deployment key yet."
      >
        <template #cell(view)="data">
          <span
            class="svg-icon svg-icon-primary"
            v-on:click="onClickShowKeyButton(data.item)"
          >
            <inline-svg src="media/svg/icons/Design/Layers.svg" />
          </span>
        </template>
      </b-table>
      <b-modal
        ref="deploykey-show-modal"
        :title="getTitle()"
        ok-title="Generate new deployment key"
        @ok="showWarningMessage()"
      >
        <p>
          Insert this key inside GitHub, GitLab, Bitbucket or custom Git Server
          repository to enable Git deployment for your web application.
        </p>
        <div class="code-block">{{ getDeploymentKey() }}</div>
      </b-modal>
      <b-modal
        ref="remake-warning-modal"
        title="Warning"
        ok-title="Generate"
        @ok="createDeployKey(selectedUser)"
      >
        <p>
          Generating new deployment key will remove the current key from your
          server. Be sure to update your Git repository with your newly created
          deployment key. Continue generating deployment key for Litegix
        </p>
      </b-modal>
    </div>
  </div>
</template>

<style scoped>
.code-block {
  font-family: monospace, monospace;
  border-radius: 4px;
  background-color: #e3e6e9;
  padding: 12px;
  font-size: 12px;
  word-break: break-all;
}
</style>

<script>
import { showConfirmMsgbox, catchError } from "@/view/shared/msgbox";
import {
  GET_DEPLOY_KEYS,
  CREATE_DEPLOY_KEY
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "",
      fields: [
        "name",
        {
          key: "view",
          label: "View / Generate",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      selectedUser: null,
      selectedKey: "",
      deployKeys: []
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_DEPLOY_KEYS, this.serverId).then(response => {
      if (response.success) {
        this.deployKeys = response.data.keys;
        console.log("deployKeys", this.deployKeys);
      }
    });
  },
  methods: {
    getTitle() {
      return `Deployment Key for user ${this.selectedUser?.name}`;
    },
    getDeploymentKey() {
      return this.selectedKey;
    },
    createDeployKey() {
      console.log("createDeployKey, user=", this.selectedUser);
      const payload = { serverId: this.serverId, userId: this.selectedUser.id };
      this.$store
        .dispatch(CREATE_DEPLOY_KEY, payload)
        .then(res => {
          console.log("createDeployKey, result=", res);
          this.selectedUser.deploymentKey = res.data.key;
          this.showDeployKey();
        })
        .catch(catchError);
    },
    onClickShowKeyButton(user) {
      console.log("onClickShowKeyButton", user);
      this.selectedUser = user;
      if (!user.deploymentKey) {
        showConfirmMsgbox(
          `You have no deployment key for ${user.name}. Would you like to generate one?`
        ).then(m => {
          m.isConfirmed && this.createDeployKey();
        });
      } else {
        this.showDeployKey();
      }
    },
    showDeployKey() {
      this.selectedKey = this.selectedUser.deploymentKey;
      this.$refs["deploykey-show-modal"].show();
    },
    showWarningMessage() {
      this.$refs["remake-warning-modal"].show();
    }
  }
};
</script>
