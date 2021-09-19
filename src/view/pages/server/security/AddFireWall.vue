<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add Firewall Rule</span
        >
      </h3>
    </div>
    <div class="card-body py-5">
      <form>
        <div class="form-group">
          <label class="control-label">Type</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>

        <b-form-group label="Port"
          ><b-form-input
            name="port"
            placeholder="E.g: 8080 or 6000-9091"
          ></b-form-input
        ></b-form-group>

        <div class="form-group">
          <label class="control-label">Protocol</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          Save this rule
        </button>
      </form>
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