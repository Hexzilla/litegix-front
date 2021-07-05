<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add Notification Channel</span
        ><span class="text-muted mt-3 font-weight-bold font-size-sm"
          >Please select your notification channel.</span
        >
      </h3>
    </div>
    <div class="card-body py-5">
      <form>
        <div class="form-group">
          <label class="control-label">Channel</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
           Add
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
