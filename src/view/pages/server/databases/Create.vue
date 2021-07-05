<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add New Database</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >If you have changed your <strong>root</strong> database password,
          please update your new password inside
          <code>/etc/mysql/my.cnf</code> or adding new database won't
          work.</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form>
        <b-form-group label="Database Name">
          <b-form-input
            name="name"
            placeholder="Only alphanumeric and/or _ are allowed"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Assign Database User</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="items"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label class="control-label">Collation (Optional)</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="items"
          ></b-form-select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Add Database
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
      items: [],
    };
  },
};
</script>