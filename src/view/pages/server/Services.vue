<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="pull-left">Services</h4>
        <div class="btn-group filter pull-right">
          <a type="button" class="btn btn-success" title=""
            ><i class="rc rc-ln-grid-view"></i
          ></a>
          <a type="button" class="btn btn-success active" title=""
            ><i class="rc rc-ln-list-view"></i
          ></a>
        </div>
        <div class="clearfix"></div>
        <p data-nsfw-filter-status="swf">
          Enable or disable services running on your server. Depending on usage,
          NGiNX, HTTPD, and Supervisord will start or stop automatically.
        </p>
      </div>
    </div>
    <div>
      <div class="panel panel-default">
        <div class="panel-body">
          <b-table
            :items="items1"
            :fields="fields1"
            show-empty
            empty-text="You don't have anything inside here yet."
          >
            <template #cell(remove)>
              <a role="button" class="text-danger rc rc-delete"></a>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/app.css"></style>
<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      fields1: ["service", "processor_usage", "memory_usage", "status"],
      items1: [],
    };
  },
};
</script>