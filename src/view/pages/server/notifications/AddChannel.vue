<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Add Notification Channel</h4>
        <p>Please select your notification channel.</p>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label class="control-label">Channel</label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Add </span></span>
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
      keys: [],
    };
  },
};
</script>
