<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 pt-5 pb-0">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Cron Job</span>
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />

        <b-link to="cronjob/new">
          <a class="btn btn-primary">Create</a>
        </b-link>
      </div>
    </div>
    <div class="card-body py-0 mt-2">
      <p class="font-size-md mt-1">
        Rebuilding Cron Job will delete all Cron Job configs that was generated
        by Litegix. We will add it back to match your configuration below.
      </p>
      <b-table
        :items="cronJobs"
        :fields="fields"
        show-empty
        empty-text="You don't have any cron jobs configured yet."
      >
        <template #cell(view)>
          <span class="svg-icon svg-icon-primary">
            <inline-svg src="media/svg/icons/Design/Layers.svg" />
          </span>
        </template>
        <template #cell(action)="data">
          <a role="button" v-on:click="deleteCronJob(data.item)"
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
  GET_CRON_JOBS,
  DELETE_CRON_JOB
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "",
      fields: [
        { key: "label", label: "Job name" },
        { key: "user", label: "Run as" },
        { key: "command", label: "Command" },
        { key: "time", label: "Time to run" },
        {
          key: "action",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      cronJobs: []
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(GET_CRON_JOBS, this.serverId).then(response => {
      console.log("cronJobs", response);
      if (response.success) {
        this.cronJobs = response.data.cronJobs;
      }
    });
  },
  methods: {
    async deleteCronJob(job) {
      console.log("deleteCronJob", job);
      const result = await showConfirmMsgbox("Do you want to delete this?");
      if (!result.isConfirmed) {
        return;
      }

      const payload = {
        serverId: this.serverId,
        cronJobId: job.id
      };
      this.$store
        .dispatch(DELETE_CRON_JOB, payload)
        .then(response => {
          console.log("delete cronJobs", response);
          return showSuccessMsgbox(
            `Cron Job ${job.label} has been successfully deleted`
          );
        })
        .then(() => {
          const index = this.cronJobs.indexOf(job);
          if (index >= 0) {
            this.cronJobs.splice(index, 1);
          }
        })
        .catch(catchError);
    }
  }
};
</script>
