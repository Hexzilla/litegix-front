<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Add Firewall Rule</h4>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label class="control-label">Type</label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>
          <div class="form-group">
            <label for="port" class="control-label">Port </label>

            <input
              type="text"
              name="port"
              placeholder="E.g: 8080 or 6000-9091"
              class="form-control input-lg"
            />
          </div>
          <div class="form-group">
            <label class="control-label">Protocol</label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <button
            data-v-69273b5e=""
            type="submit"
            class="btn btn-base btn-block"
          >
            <span
              ><span data-v-293d8245="">
                Save this rule
              </span></span
            >
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
        select:'',
        keys:[]
    };
  },
};
</script>