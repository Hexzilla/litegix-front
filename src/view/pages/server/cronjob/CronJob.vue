<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Cron Job</span>
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        
        <b-link to="cronjob/create">
              <a class="btn btn-success">Create</a>
            </b-link>
      </div>
      <span
        class="text-muted mt-3 font-weight-bold font-size-sm"
        data-nsfw-filter-status="swf"
        >Rebuilding Cron Job will delete all Cron Job configs that was generated
        by RunCloud. We will add it back to match your configuration
        below.</span
      >
    </div>
    <div class="card-body py-0">
       <b-table
          :items="items"
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
export default {
  data() {
    return {
      fields: [
        { key: "name", label: "Job name" },
        { key: "view", label: "Run as" },
        { key: "command", label: "Command" },
        { key: "time", label: "Time to run" },
        { key: "action", label: "Action" },
      ],
      items: [],
    };
  },
};
</script>