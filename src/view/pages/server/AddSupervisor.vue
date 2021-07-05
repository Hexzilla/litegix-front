<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Add Supervisor Job</h4>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label for="label" class="control-label">Job Name </label>
            <input
              type="text"
              name="label"
              placeholder="Only letters, numbers, underscores and dashes are allowed"
              class="form-control input-lg"
            />
          </div>
          <div class="form-group">
            <label for="username" class="control-label"
              >Username (The system user to run this job)
            </label>
            <input
              type="text"
              name="username"
              placeholder="If you specify non-existent user, your supervisor will fail to start"
              class="form-control input-lg"
            />
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="control-label">Auto Restart</label>

                <div class="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    id="autoRestart"
                    name="autoRestart"
                    class="styled"
                  />
                  <label for="autoRestart">Auto Restart</label>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="control-label">Auto Start</label>

                <div class="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    id="autoStart"
                    name="autoStart"
                    class="styled"
                  />
                  <label for="autoStart">Auto Start</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="numprocs" class="control-label">Numprocs </label>
            <input
              type="number"
              name="numprocs"
              placeholder="Be careful! High numprocs will crash your server"
              class="form-control input-lg"
            />
          </div>

          <div class="form-group">
            <label class="control-label">Vendor Binary</label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <div class="form-group">
            <label for="directory" class="control-label"
              >Directory (Optional)
            </label>
            <input
              type="text"
              name="directory"
              placeholder="/path/to/folder"
              class="form-control input-lg"
            />
          </div>
          <div class="form-group">
            <label for="command" class="control-label">Command </label>
            <input
              type="text"
              name="command"
              placeholder="/var/www/testing/artisan queue:work --daemon --tries=3"
              class="form-control input-lg"
            />
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Add Supervisor Job </span></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      select: "",
      keys: []
    };
  }
};
</script>
