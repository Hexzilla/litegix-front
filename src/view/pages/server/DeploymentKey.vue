<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Deployment Key</span
        >
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
      </div>
      <span class="text-muted mt-3 font-size-sm" data-nsfw-filter-status="swf"
        >To use Git Deployment inside a Web Application, you must use and
        generate a Git Deployment Key. Each user can only have one deployment
        key, and it can be used for multiple Web Applications (except you are
        using GitHub).</span
      >
    </div>
    <div class="card-body py-0">
      <b-table :items="deployKeys" :fields="fields">
        <template #cell(view)="data">
          <span
            class="svg-icon svg-icon-primary"
            v-on:click="showDeployKey(data.item)"
          >
            <inline-svg src="media/svg/icons/Design/Layers.svg" />
          </span>
          <b-modal
            ref="deploykey-modal"
            title="Deployment Key"
            ok-title="Generate new deployment key"
            @ok="generateNewKey($event, data.item)"
          >
            <p class="my-4">{{ data.item.deploymentKey }}</p>
          </b-modal>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import {
  GET_DEPLOY_KEYS,
  CREATE_DEPLOY_KEY
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: null,
      fields: [
        "name",
        {
          key: "view",
          label: "View / Generate",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      deployKeys: []
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch(GET_DEPLOY_KEYS, this.serverId).then(response => {
        console.log(this.deployKeys);
        if (response.success) {
          this.deployKeys = response.data.keys;
        }
      });
    },
    async createDeployKey(user) {
      const payload = { serverId: this.serverId, userId: user.id };
      const response = await this.$store.dispatch(CREATE_DEPLOY_KEY, payload);
      if (response.success) {
        user.deploymentKey = response.data.key;
      }
    },
    async showDeployKey(user) {
      if (!user.deploymentKey) {
        const result = await Swal.fire({
          title: "",
          text: `You have no deployment key for ${user.name}. Would you like to generate one?`,
          icon: "question",
          showConfirmButton: true,
          showCancelButton: true,
          heightAuto: false
        });
        if (!result.isConfirmed) {
          return;
        }
        await this.createDeployKey(user);
      }

      if (!user.deploymentKey) {
        return;
      }
      this.$refs["deploykey-modal"].show();
    },
    async generateNewKey(event, user) {
      event.preventDefault();
      await this.createDeployKey(user);
    }
  }
};
</script>
