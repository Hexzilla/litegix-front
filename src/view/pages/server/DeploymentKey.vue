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
      <b-table :items="systemUsers" :fields="fields">
        <template #cell(view)="data">
          <span
            class="svg-icon svg-icon-primary"
            v-on:click="showDeployKey(data.item)"
          >
            <inline-svg src="media/svg/icons/Design/Layers.svg" />
          </span>
          <b-modal ref="my-modal" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

import { GET_SYSTEM_USERS } from "@/core/services/store/serversystem.module";

export default {
  data() {
    return {
      fields: [
        "name",
        {
          key: "view",
          label: "View / Generate",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["systemUsers"])
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.fetchSystemUsers();
  },
  methods: {
    fetchSystemUsers() {
      this.$store.dispatch(GET_SYSTEM_USERS, this.serverId).then(() => {
        console.log(this.systemUsers);
      });
    },
    async showDeployKey(item) {
      console.log("createDeploymentKey", item);
      const result = await Swal.fire({
        title: "",
        text: `You have no deployment key for ${item.name}. Would you like to generate one?`,
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        heightAuto: false
      });
      if (!result.isConfirmed) {
        return;
      }

      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  }
};
</script>
