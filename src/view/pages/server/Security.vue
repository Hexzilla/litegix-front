<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="pull-left">Basic Firewall</h4>
        <div class="d-flex pull-right">
          <div>
            <b-link to="security/addfirewall">
              <a class="btn btn-success" data-nsfw-filter-status="swf"
                >Add Firewall Rule</a
              >
            </b-link>
            <a
              role="button"
              class="btn btn-success"
              data-nsfw-filter-status="swf"
            >
              Deploy</a
            >
          </div>
        </div>
        <div class="clearfix"></div>
        <p data-nsfw-filter-status="swf">
          The default firewall is firewalld and the default zone is runcloud. If
          you manually change the default zone, RunCloud may not work properly
          and the settings that were defined here will not be used. By default,
          all ports to your server are closed except the port defined in Global
          type below. Newly added rules and newly removed rules will not be
          pushed to your server. To use the rules defined below, you must click
          deploy firewall button above to deploy your firewall.
        </p>
      </div>
      <div class="panel-body">
        <b-table
          :items="items1"
          :fields="fields1"
          show-empty
          empty-text="You don't have anything inside here yet."
        >
          <template #cell(type)="data">
            <span class="label label-primary label-primary">{{
              data.item.type
            }}</span>
          </template>
          <template #cell(delete)>
            <a
              role="button"
              class="text-danger rc rc-delete"
              data-nsfw-filter-status="swf"
            ></a>
          </template>
        </b-table>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>SSH Session</h4>
      </div>
      <div class="panel-body">
        <b-table
          :items="items1"
          :fields="fields1"
          show-empty
          empty-text="There is no active SSH Session"
        >
        </b-table>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="pull-left">Fail2Ban</h4>

        <div class="clearfix"></div>
      </div>
      <div class="panel-body">
        <p data-nsfw-filter-status="swf">
          Add the IP Address that you want to manually ban here. Adding the IP
          Address here will temporary ban the IP Address depends on the jail
          time that has been set in Fail2Ban.
        </p>
        <form
          action="https://manage.runcloud.io/servers/163149/securities/fail2ban/blockedip"
          role="form"
        >
          <div class="form-group">
            <label for="ipAddress" class="control-label">IP Address </label>

            <input
              type="text"
              name="ipAddress"
              placeholder="IP Address to manual ban"
              class="form-control input-lg"
            />
          </div>
          <button
            data-v-69273b5e=""
            type="submit"
            class="btn btn-base btn-block"
          >
            <span
              data-v-293d8245=""
              data-v-69273b5e=""
              data-nsfw-filter-status="swf"
              ><span data-v-293d8245="" data-nsfw-filter-status="swf">
                Ban
              </span></span
            >
          </button>
        </form>
      </div>
      <div class="panel-body">
        <p>
          These are the IP Addresses that have been banned for bruteforcing into
          your server. You need to remove them in order to get back the access
          to your server.
        </p>
        <b-table
          :items="items3"
          :fields="fields3"
          show-empty
          empty-text="No blocked IP Address"
        ></b-table>
      </div>
    </div>
  </div>
</template>


<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      fields1: [
        "type",
        "protocol",
        "IP_address",
        "action",
        {
          key: "delete",
          label: "delete",
          thClass: "text-right",
          tdClass: "text-right",
        },
      ],
      items1: [
        {
          type: "Global",
          protocol: "TCP",
          IP_address: "22",
          action: "-",
          delete: "",
        },
        {
          type: "Global",
          protocol: "TCP",
          IP_address: "22",
          action: "-",
          delete: "",
        },
        {
          type: "Global",
          protocol: "TCP",
          IP_address: "22",
          action: "-",
          delete: "",
        },
      ],
      fields2: [
        "user_name",
        "IP_address",
        "login_since",
        "idle_time",
        "current_running_process",
        {
          key: "status",
          label: "Status",
          thClass: "text-right",
          tdClass: "text-right",
        },
      ],
      items2: [],
      fields3: [
        "IP_address",
        {
          key: "delete",
          label: "Delete",
          thClass: "text-center",
          tdClass: "text-center",
        },
      ],
      items3: [],
    };
  },
};
</script>