<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >SSH Config</span
          >
          <div class="text-muted mt-3 font-size-sm">
            <p>
              Please ensure an SSH Key is added if you want to enable
              passwordless login.
            </p>
          </div>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <form>
          <b-form-group label="Passwordless Login Only">
            <b-form-checkbox size="lg" name="passwordlessLogin"
              >Passwordless Login Only</b-form-checkbox
            >
          </b-form-group>
          <b-form-group label="Prevent root login">
            <b-form-checkbox size="lg" name="preventRootLogin"
              >Prevent root login</b-form-checkbox
            >
          </b-form-group>
          <b-form-group label="UseDNS">
            <b-form-checkbox size="lg" name="useDns">UseDNS</b-form-checkbox>
          </b-form-group>

          <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTSSHConfig",
  data() {
    return {};
  }
};
</script>
