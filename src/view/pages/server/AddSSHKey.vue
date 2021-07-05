<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Add SSH Key</h4>
      </div>
      <div class="panel-body">
        <form>
          <div>
            <div class="form-group">
              <label class="control-label">Use vault</label>
              <div class="checkbox checkbox-primary">
                <input
                  type="checkbox"
                  id="useVault"
                  name="useVault"
                  class="styled"
                />
                <label for="useVault">Use vaulted SSH Key</label>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Vaulted SSH Key</label>
              <b-form-select
                size="lg"
                v-model="select"
                :options="keys"
              ></b-form-select>
            </div>
          </div>
          <div class="form-group">
            <label for="label" class="control-label">Label </label>
            <input
              type="text"
              name="label"
              placeholder="Any label for you to recognize this public key"
              class="form-control input-lg"
            />
          </div>
          <div class="form-group">
            <label class="control-label">User</label>
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

<style scoped src="@/assets/styles/app.css"></style>
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
