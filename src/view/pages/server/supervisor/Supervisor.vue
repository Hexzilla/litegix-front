<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Supervisor Jobs</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >Monitor and control processes on your server.</span
        >
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />

        <b-link to="supervisor/create">
          <a class="btn btn-primary">Create</a>
        </b-link>
      </div>
    </div>
    <div class="card-body py-0">
      <div
        class="text-muted mt-3 mb-5 font-weight-bold font-size-sm"
        data-nsfw-filter-status="swf"
      >
        Monitor and control processes on your server.
      </div>
      <b-table
        :items="supervisors"
        :fields="fields"
        show-empty
        empty-text="You don't have any cron jobs configured yet."
      >
        <template #cell(view)>
          <span class="svg-icon svg-icon-primary">
            <inline-svg src="media/svg/icons/Design/Layers.svg" />
          </span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { GET_SUPERVISOR_JOBS } from "@/core/services/store/system.module";

export default {
  props: ["serverId"],
  data() {
    return {
      fields: [
        { key: "name", label: "Job name" },
        { key: "userName", label: "Run as" },
        { key: "command", label: "Command" }
      ],
      supervisors: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store
        .dispatch(GET_SUPERVISOR_JOBS, this.serverId)
        .then(response => {
          console.log("supervisors", response);
          if (response.success) {
            this.supervisors = response.data.supervisors;
          }
        });
    }
  }
};
</script>
