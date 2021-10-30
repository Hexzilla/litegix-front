<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Basic Firewall</span
          >
        </h3>
        <div class="card-toolbar">
          <b-link to="security/addfirewall">
            <a class="btn btn-success mr-4">Add Firewall Rule</a>
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
      <div class="card-body py-5">
        <span class="pb-5 font-size-sm">
          The default firewall is firewalld and the default zone is Litegix. If
          you manually change the default zone, Litegix may not work properly
          and the settings that were defined here will not be used. By default,
          all ports to your server are closed except the port defined in Global
          type below. Newly added rules and newly removed rules will not be
          pushed to your server. To use the rules defined below, you must click
          deploy firewall button above to deploy your firewall.</span
        >

        <b-table
          :items="items1"
          :fields="fields1"
          show-empty
          empty-text="You don't have anything inside here yet."
        >
          <template #cell(type)="data">
            <span class="label label-lg label-inline label-primary">{{
              data.item.type
            }}</span>
          </template>
          <template #cell(delete)>
            <a role="button" class="text-danger">del</a>
          </template>
        </b-table>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >SSH Session</span
          >
        </h3>
      </div>
      <div class="card-body py-5">
        <b-table
          :items="items1"
          :fields="fields1"
          show-empty
          empty-text="There is no active SSH Session"
        >
        </b-table>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">Fail2Ban</span>
        </h3>
      </div>
      <div class="card-body py-5">
        <span class="pb-5 font-size-sm">
          Add the IP Address that you want to manually ban here. Adding the IP
          Address here will temporary ban the IP Address depends on the jail
          time that has been set in Fail2Ban.</span
        >

        <form>
          <b-form-group label="IP Address"
            ><b-form-input
              name="ipAddress"
              placeholder="IP Address to manual ban"
            ></b-form-input>
          </b-form-group>

          <button type="submit" class="btn btn-success btn-block">Ban</button>
        </form>
      </div>
      <div class="card-body py-5">
        <span class="pb-5 font-size-sm">
          These are the IP Addresses that have been banned for bruteforcing into
          your server. You need to remove them in order to get back the access
          to your server.</span
        >
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
          tdClass: "text-right"
        }
      ],
      items1: [
        {
          type: "Global",
          protocol: "TCP",
          IP_address: "22",
          action: "-",
          delete: ""
        },
        {
          type: "Global",
          protocol: "TCP",
          IP_address: "22",
          action: "-",
          delete: ""
        },
        {
          type: "Global",
          protocol: "TCP",
          IP_address: "22",
          action: "-",
          delete: ""
        }
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
          tdClass: "text-right"
        }
      ],
      items2: [],
      fields3: [
        "IP_address",
        {
          key: "delete",
          label: "Delete",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      items3: []
    };
  }
};
</script>
