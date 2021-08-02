<template>
  <!--begin::Advance Table Widget 10-->
  <v-card class="card-body">
    <!--begin::Header-->
    <v-card-title>
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder">System User</span>
      </h3>
      <v-spacer></v-spacer>
      <div class="card-toolbar">
        <b-link to="user/create">
          <a class="btn btn-success font-weight-bolder font-size-sm">Create User</a>
        </b-link>
      </div>
    </v-card-title>
      <v-text-field 
        outlined 
        dense 
        label="Search" 
        hide-details=""
        class="searchSSHKey"
      ></v-text-field>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr class="text-center">
              <th class="pl-0" style="min-width: 180px">Username</th>
              <th style="min-width: 180px" >Change Password</th>
              <th class="pr-0" style="min-width: 160px">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 text-center">
                  <span class="
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                    >{{ item.order_id }}</span
                  >
                </td>
                <td class="pl-0 text-center">
                  <i class="btn btn-icon btn-center btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <inline-svg
                        src="media/svg/icons/General/Lock.svg"
                      ></inline-svg>
                    </span>
                  </i>
                </td>
                <td class="pr-0 text-center">
                  <i class="btn btn-icon btn-center btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <inline-svg
                        src="media/svg/icons/General/Trash.svg"
                      ></inline-svg>
                    </span>
                  </i>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </v-card>
  <!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "widget-2",
  data() {
    return {
      checked: false,
      list: [
        {
          order_id: "litegix",
          // country: "Brasil",
          // country_desc: "Code: BR",
          // date: "05/28/2020",
          // date_desc: "Paid",
          // company: "Intertico",
          // company_desc: "Web, UI/UX Design",
          // class: "primary",
          // status: "Approved",
        },
        {
          order_id: "root",
          // country: "Belarus",
          // country_desc: "Code: BY",
          // date: "02/04/2020",
          // date_desc: "Rejected",
          // company: "Agoda",
          // company_desc: "Houses & Hotels",
          // class: "warning",
          // status: "In Progress",
        },
      ],
    };
  },
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    },
  },
};
</script>
