<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Change IP Address</span
          >
          <div class="text-muted mt-3 font-size-sm">
            <p>
              If your server's IP Address has been changed manually or
              automatically, we are not able to serve your server with the new
              IP Address due to technical limitation. If you wanted to change
              your IP Address, fill in the new IP Address for this server and
              wait for the next instruction.
            </p>
          </div>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <form>
          <b-form-group label="IP Address"
            ><b-form-input
              name="ipAddress"
              v-model="server.address"
              placeholder="Your server's new IP Address"
            ></b-form-input
          ></b-form-group>

          <button type="submit" class="btn btn-primary btn-block">
            Update IP Address
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTChangeIPAddress",
  props: ["server"],
  data() {
    return {};
  }
};
</script>
