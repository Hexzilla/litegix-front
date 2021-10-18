<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Server Details</span
          >
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <form>
          <b-form-group label="Server Name"
            ><b-form-input name="name" placeholder=""></b-form-input
          ></b-form-group>
          <b-form-group label="Provider"
            ><b-form-input name="provider" placeholder=""></b-form-input
          ></b-form-group>

          <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTServerDetail",
  data() {
    return {};
  }
};
</script>
