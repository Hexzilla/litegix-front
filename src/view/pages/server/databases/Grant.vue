<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Grant User to Database</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >data-nsfw-filter-status="swf">If you have changed your
          <strong>root</strong> database password, please update your new
          password inside <code>/etc/mysql/my.cnf</code> or grant user to
          database won't work.</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form>
        <div class="form-group">
          <label class="control-label">User</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="items"
          ></b-form-select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Grant
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
      items: [],
      select: "",
    };
  },
};
</script>