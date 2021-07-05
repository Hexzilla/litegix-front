<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="webapplication-index-page">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="pull-left">Web Application</h4>
          <div class="d-flex pull-right">
            <div
              class="
                form-group form-search
                d-flex
                justify-content-between
                align-items-center
                margin-bottom-unset
              "
            >
              <input
                type="text"
                placeholder="Search..."
                class="form-control input-lg"
              />
              <!---->
              <!---->
            </div>
            <div>
              <b-link to="application/create">
                <a class="btn btn-success">Create Web App</a>
              </b-link>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="panel-body">
          <b-table :items="items" :fields="fields"></b-table>
        </div>
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
        "web_application_name",
        "status",
        "owner",
        "domain",
        "PHP_ version",
        "stack",
      ],
      items: [{}],
    };
  },
};
</script>