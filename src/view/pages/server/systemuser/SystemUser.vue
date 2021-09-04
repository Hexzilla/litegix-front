<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >System User</span
          >
        </h3>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />
          <b-link to="systemuser/create">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Create User</a
            >
          </b-link>
        </div>
      </div>
      <div class="card-body py-5 ml-8 mr-8">
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr class="text-center">
                <th class="pl-0 text-left" style="min-width: 200px">
                  Username
                </th>
                <th>Change Password</th>
                <th class="pr-0">Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in systemUsers">
                <tr v-bind:key="i">
                  <td class="pl-0">
                    <span
                      class="
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                      >{{ item.order_id }}</span
                    >
                  </td>
                  <td class="pl-0 text-center">
                    <i class="btn btn-icon btn-center btn-hover-primary btn-sm">
                      <span class="svg-icon svg-icon-md svg-icon-primary">
                        <inline-svg
                          src="media/svg/icons/General/Lock.svg"
                        ></inline-svg>
                      </span>
                    </i>
                  </td>
                  <td class="pr-0 text-center">
                    <i class="btn btn-icon btn-center btn-hover-primary btn-sm">
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
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import { mapGetters } from "vuex";
import { GET_SYSTEM_USERS } from "@/core/services/store/systemuser.module";

export default {
  data() {
    return {
      checked: false,
      list: [
        {
          order_id: "litegix"
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
          order_id: "root"
          // country: "Belarus",
          // country_desc: "Code: BY",
          // date: "02/04/2020",
          // date_desc: "Rejected",
          // company: "Agoda",
          // company_desc: "Houses & Hotels",
          // class: "warning",
          // status: "In Progress",
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["systemUsers"])
  },
  mounted() {
    this.$store.dispatch(GET_SYSTEM_USERS, this.$parent.serverId);
  },
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
