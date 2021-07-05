<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="pull-left">Deployment Key</h4>
        <div class="d-flex pull-right">
          <div
            class="
              form-group form-search
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <input
              type="text"
              placeholder="Search..."
              class="form-control input-lg"
            />
          </div>
        </div>
        <div class="clearfix"></div>
        <p data-nsfw-filter-status="swf">
          To use Git Deployment inside a Web Application, you must use and
          generate a Git Deployment Key. Each user can only have
          <strong>one</strong> deployment key, and it can be used for multiple
          Web Applications (except you are using GitHub).
        </p>
      </div>
      <div class="panel-body">
        <b-table :items="items" :fields="fields">
          <template #cell(view)>
            <i role="button" class="rc rc-preview text-primary"></i>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

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