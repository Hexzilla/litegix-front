<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Auto Update</span
          >
          <div class="text-muted mt-3 font-size-sm">
            <p>
              Your server is set to automatically update to latest version for
              all Litegix packages. We do recommend enabling Security Update.
            </p>
          </div>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <div class="alert alert-warning">
          By enabling 3rd Party Software Update, you will risk breaking your
          server. You shouldn't enable this, unless you know what you are doing.
        </div>
        <form>
          <b-form-group label="3rd Party Software Update">
            <b-form-checkbox size="lg" name="softwareUpdate"
              >3rd Party Software Update</b-form-checkbox
            >
          </b-form-group>
          <b-form-group label="Security Update">
            <b-form-checkbox size="lg" name="securityUpdate"
              >Security Update</b-form-checkbox
            >
          </b-form-group>
          <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTAutoUpdate",
  data() {
    return {};
  }
};
</script>
