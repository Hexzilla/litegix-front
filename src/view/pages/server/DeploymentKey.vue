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
      <span
        class="text-muted mt-3 font-size-sm"
        data-nsfw-filter-status="swf"
        >To use Git Deployment inside a Web Application, you must use and
        generate a Git Deployment Key. Each user can only have one deployment
        key, and it can be used for multiple Web Applications (except you are
        using GitHub).</span
      >
    </div>
    <div class="card-body py-0">
      <b-table :items="items" :fields="fields">
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
        "user",
        {
          key: "view",
          label: "View / Generate",
          thClass: "text-center",
          tdClass: "text-center",
        },
      ],
      items: [{ user: "runcloud", view: "" }],
    };
  },
};
</script>