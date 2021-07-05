<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add New Database User</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >If you have changed your <strong>root</strong> database password,
          please update your new password inside
          <code>/etc/mysql/my.cnf</code> or adding new user won't work.</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form>
        <b-form-group label="Username">
          <b-form-input
            name="username"
            placeholder="Only alphanumeric and/or _ are allowed"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-input-group>
            <b-form-input
              type="password"
              name="password"
              placeholder=""
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-form-group label="Verify Password">
          <b-form-input
            type="password"
            name="password_confirmation"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <button type="submit" class="btn btn-primary btn-block">
          Add User
        </button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>