<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="pull-left">Notification Channel</h4>
        <div class="d-flex pull-right">
          <div>
            <b-link to="notification/addchannel">
              <a class="btn btn-success">Add Notification Channel</a>
            </b-link>
          </div>
        </div>
        <div class="clearfix"></div>
        <p>
          Every server notification will be sent to the
          <a>notification channels</a>
          that you have defined.
        </p>
      </div>
      <div class="panel-body">
        <b-table :items="items1" :fields="fields1" show-empty empty-text="You don't have anything inside">
          <template #cell(remove)>
            <a role="button" class="text-danger rc rc-delete"></a>
          </template>
        </b-table>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Server Health Notification Settings</h4>
        <p>
          Customize your own notification based on your own preferences. All of
          the active notification will be send to all notification that have
          been added to this servers.
        </p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <form>
              <div>
                <h4 class="font-weight-bold" style="padding-top: 0px">
                  Server Health
                </h4>
                <ul class="list-unstyled">
                  <li>
                    <div class="form-group">
                      <div class="checkbox checkbox-primary">
                        <input
                          type="checkbox"
                          id="notification[load][is_enabled]"
                          name="notification[load][is_enabled]"
                          class="styled"
                        />
                        <label for="notification[load][is_enabled]"
                          ><span
                            class="font-weight-bold"
                            style="color: #151515; margin-bottom: 4px"
                            >Load</span
                          ><br /><span
                            >Notify me when load reach 5
                          </span></label
                        >
                      </div>
                    </div>
                    <vue-slider v-model="slider1"></vue-slider>
                  </li>
                  <li>
                    <div class="form-group">
                      <div class="checkbox checkbox-primary">
                        <input
                          type="checkbox"
                          id="notification[memory][is_enabled]"
                          name="notification[memory][is_enabled]"
                          class="styled"
                        />
                        <label for="notification[memory][is_enabled]"
                          ><span
                            class="font-weight-bold"
                            style="color: #151515; margin-bottom: 4px"
                            >Memory</span
                          ><br /><span
                            >Notify me when memory reach 99%
                          </span></label
                        >
                      </div>
                    </div>
                    <vue-slider v-model="slider1"></vue-slider>
                  </li>
                  <li>
                    <div class="form-group">
                      <div class="checkbox checkbox-primary">
                        <input
                          type="checkbox"
                          id="notification[disk][is_enabled]"
                          name="notification[disk][is_enabled]"
                          class="styled"
                        />
                        <label for="notification[disk][is_enabled]"
                          ><span
                            class="font-weight-bold"
                            style="color: #151515; margin-bottom: 4px"
                            >Disk</span
                          ><br /><span
                            >Notify me when disk reach 90%
                          </span></label
                        >
                      </div>
                    </div>
                    <vue-slider v-model="slider1" class="slider"></vue-slider>
                  </li>
                </ul>
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
              <button type="submit" class="btn btn-base btn-block">
                <span><span> Save settings </span></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>SSH Login Notification</h4>
        <p>
          You will get a notification when someone has successfully logged into
          your server. If you are not receiving notifications about server
          logins, please reinstall it using the Reinstall button below. SSH
          login notifications only work with the Business Package.
        </p>
      </div>
      <div class="panel-body">
        
        <a role="button" class="btn btn-success ">
          Reinstall SSH login notification</a
        >
        <a role="button" class="btn btn-success">
          Uninstall SSH login notification</a
        >
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>SSH Whitelist IP Notification</h4>
        <p>
          Add IP Address that you want to whitelist from receive notification
          when using SSH.
        </p>
        <div class="clearfix"></div>
      </div>
      <div class="panel-body">
        <h4>Add IP Address</h4>
        <form>
          <div class="form-group">
            <label for="ipAddress" class="control-label"
              >IP Address (or CIDR)
            </label>

            <input
              type="text"
              name="ipAddress"
              placeholder="E.g: 10.8.0.0/24 or 192.168.2.3"
              class="form-control input-lg"
            />
          </div>
          <div>
            <div class="hidden-xs hidden-sm" style="margin-top: 32px"></div>
            <button type="submit" class="btn btn-base btn-block">
              <span><span> Add </span></span>
            </button>
          </div>
        </form>
        <hr />
        <h4>Allowed IP Addresses</h4>
        <b-table :items="items2" :fields="fields2">
          <template #cell(delete)>
            <a role="button" class="text-danger rc rc-delete"></a>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>


<style scoped src="@/assets/styles/server.css"></style>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  data() {
    return {
      slider: 1,
      select: "",
      fields1: ["channel", "name", "remove"],
      items1: [],
      fields2: ["IP_address", "delete"],
      items2: [{ IP_address: "199.33.444.56", delete: "" }],
      keys: [],
    };
  },
  components: {
    VueSlider,
  },
};
</script>
