<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Notification Channel</span
          >
        </h3>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />

          <b-link to="notification/addchannel">
            <a class="btn btn-primary">Add Notification Channel</a>
          </b-link>
        </div>
      </div>
      <div class="card-body py-5">
        <b-table
          :items="items1"
          :fields="fields1"
          show-empty
          empty-text="You don't have anything inside"
        >
          <template #cell(remove)>
            <a role="button" class="text-danger rc rc-delete"></a>
          </template>
        </b-table>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Server Health Notification Settings</span
          ><span class="text-muted mt-3 font-weight-bold font-size-sm"
            >Customize your own notification based on your own preferences. All
            of the active notification will be send to all notification that
            have been added to this servers.</span
          >
        </h3>
      </div>
      <div class="card-body py-5">
        <form>
          <div>
            <h4 class="font-weight-bold" style="padding-top: 0px">
              Server Health
            </h4>

            <b-form-group label="notificatioin">
              <b-form-checkbox
                size="lg"
                v-model="load"
                name="notification[load][is_enabled]"
                class="mt-6 mb-3"
                >Load (Notify me when load reach {{ slider1 }})</b-form-checkbox
              >
              <b-form-checkbox
                size="lg"
                v-model="memory"
                name="notification[load][is_enabled]"
                class="mt-6 mb-3"
                >Memory (Notify me when memory reach
                {{ slider2 }}%)</b-form-checkbox
              >
              <b-form-checkbox
                size="lg"
                v-model="disk"
                name="notification[load][is_enabled]"
                class="mt-6 mb-3"
                >Disk (Notify me when load reach 5Notify me when disk reach
                {{ slider3 }}%)</b-form-checkbox
              >
            </b-form-group>
          </div>
          <h4 class="font-weight-bold">Snooze health notification</h4>
          <div class="form-group">
            <label class="control-label"
              >User (Owner of this Web Application)</label
            >
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Save settings
          </button>
        </form>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >SSH Login Notification</span
          ><span class="text-muted mt-3 font-weight-bold font-size-sm"
            >You will get a notification when someone has successfully logged
            into your server. If you are not receiving notifications about
            server logins, please reinstall it using the Reinstall button below.
            SSH login notifications only work with the Business Package.</span
          >
        </h3>
      </div>
      <div class="card-body py-5">
        <a role="button" class="btn btn-primary mr-4">
          Reinstall SSH login notification</a
        >
        <a role="button" class="btn btn-primary">
          Uninstall SSH login notification</a
        >
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >SSH Whitelist IP Notification</span
          ><span class="text-muted mt-3 font-weight-bold font-size-sm"
            >Add IP Address that you want to whitelist from receive notification
            when using SSH.</span
          >
        </h3>
      </div>
      <div class="card-body py-5">
        <h4>Add IP Address</h4>
        <form>
          <b-form-group label="IP Address (or CIDR)">
            <b-form-input
              name="ipAddress"
              placeholder="E.g: 10.8.0.0/24 or 192.168.2.3"
            ></b-form-input>
          </b-form-group>
          <button type="submit" class="btn btn-primary btn-block">Add</button>
        </form>
        <hr />
        <h4>Allowed IP Addresses</h4>
        <b-table :items="items2" :fields="fields2">
          <template #cell(delete)>
            <a role="button" class="text-danger">del</a>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
      memory: false,
      disk: false,
      slider1: 1,
      slider2: 1,
      slider3: 1,
      select: "",
      fields1: ["channel", "name", "remove"],
      items1: [],
      fields2: ["IP_address", "delete"],
      items2: [{ IP_address: "199.33.444.56", delete: "" }],
      keys: []
    };
  }
};
</script>
