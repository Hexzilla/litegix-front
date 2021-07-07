<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add New Cron Job</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form>
        <b-form-group label="Job Label">
          <b-form-input
            name="label"
            placeholder="Label for this cron job"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="User (The user to run this job)">
          <b-form-input
            name="username"
            placeholder="User to run the cron job"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Vendor Binary</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label for="command" class="control-label">Command</label>
          <textarea
            name="command"
            rows="3"
            placeholder="/path/to/script.(sh | php | js) OR if the vendor binary is empty you can rm -rf /tmp/*"
            class="form-control"
          ></textarea>
        </div>
        <h4>Pre-defined Settings</h4>
        <div class="form-group">
          <label class="control-label">Predefined Settings</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <h4>Custom Settings</h4>
        <b-form-group label="Minute"
          ><b-form-input name="minute" placeholder=""></b-form-input
        ></b-form-group>
        <b-form-group label="Hour"
          ><b-form-input name="hure" placeholder=""></b-form-input
        ></b-form-group>
        <b-form-group label="Day of Month"
          ><b-form-input name="dayofmonth" placeholder=""></b-form-input
        ></b-form-group>
        <b-form-group label="Month"
          ><b-form-input name="month" placeholder=""></b-form-input
        ></b-form-group>
        <b-form-group label="Day of Week"
          ><b-form-input name="dayofweek" placeholder=""></b-form-input
        ></b-form-group>
        <button type="submit" class="btn btn-primary btn-block">
          Create cron job
        </button>
      </b-form>
    </div>
  </div>
</template>


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
