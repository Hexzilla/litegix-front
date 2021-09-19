<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add Supervisor Job</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form>
        <b-form-group label="Job Name">
          <b-form-input
            name="label"
            placeholder="Only letters, numbers, underscores and dashes are allowed"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Username (The system user to run this job)"
          ><b-form-input
            name="username"
            placeholder="If you specify non-existent user, your supervisor will fail to start"
          ></b-form-input
        ></b-form-group>

        <div class="d-flex">
          <b-form-group label="Auto Restart" class="w-250px">
            <b-form-checkbox size="lg" name="autoRestart"
              >Auto Restart</b-form-checkbox
            >
          </b-form-group>
          <b-form-group label="Auto Start" class="w-250px">
            <b-form-checkbox size="lg" name="autoStart"
              >Auto Start</b-form-checkbox
            >
          </b-form-group>
        </div>

        <b-form-group label="Numprocs"
          ><b-form-input
            type="number"
            name="numprocs"
            placeholder="Be careful! High numprocs will crash your server"
          ></b-form-input
        ></b-form-group>

        <div class="form-group">
          <label class="control-label">Vendor Binary</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>

        <b-form-group label="Directory (Optional)"
          ><b-form-input
            name="command"
            placeholder="/var/www/testing/artisan queue:work --daemon --tries=3"
          ></b-form-input
        ></b-form-group>
        <b-form-group label="Command"
          ><b-form-input
            name="directory"
            placeholder="/path/to/folder"
          ></b-form-input
        ></b-form-group>
        <button type="submit" class="btn btn-primary btn-block">
          Add Supervisor Job
        </button>
      </b-form>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      select: "",
      keys: [],
    };
  },
};
</script>
