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
      <p class="font-size-md mt-1 mb-6">
        Monitor and control processes on your server.
      </p>
      <b-table
        :items="supervisors"
        :fields="fields"
        show-empty
        empty-text="You don't have any supervisor jobs configured yet."
      >
        <template #cell(view)>
          <span class="svg-icon svg-icon-primary">
            <inline-svg src="media/svg/icons/Design/Layers.svg" />
          </span>
        </template>
        <template #cell(action)="data">
          <a role="button" v-on:click="deleteSupervisorJob(data.item)"
            ><i class="fas fa-trash-alt text-danger"></i
          ></a>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import {
  showConfirmMsgbox,
  showSuccessMsgbox,
  catchError
} from "@/view/shared/msgbox";
import {
  GET_SUPERVISOR_JOBS,
  DELETE_SUPERVISOR_JOB
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "",
      fields: [
        { key: "name", label: "Job name" },
        { key: "user", label: "Run as" },
        { key: "command", label: "Command" },
        {
          key: "action",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      supervisors: []
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(GET_SUPERVISOR_JOBS, this.serverId).then(response => {
      console.log("supervisors", response);
      if (response.success) {
        this.supervisors = response.data.supervisors;
      }
    });
  },
  methods: {
    async deleteSupervisorJob(job) {
      console.log("deleteSupervisorJob", job);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }

      const payload = {
        serverId: this.serverId,
        jobId: job.id
      };
      this.$store
        .dispatch(DELETE_SUPERVISOR_JOB, payload)
        .then(response => {
          console.log("delete supervisor job", response);
          return showSuccessMsgbox(
            `Supervisor Job ${job.name} has been successfully deleted`
          );
        })
        .then(() => {
          const index = this.supervisors.indexOf(job);
          if (index >= 0) {
            this.supervisors.splice(index, 1);
          }
        })
        .catch(catchError);
    }
  }
};
</script>
