<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Add SSH Key</span>
      </h3>
    </div>
    <div class="card-body py-0">
      <b-form>
        <b-form-group label="Use vault">
          <b-form-checkbox size="lg" name="useVault">Use vaulted SSH Key</b-form-checkbox>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Vaulted SSH Key</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>

        <b-form-group label="Label">
          <b-form-input
            name="label"
            placeholder="Any label for you to recognize this public key"
          ></b-form-input>
        </b-form-group>
        <div class="form-group">
          <label class="control-label">User</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Add
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
