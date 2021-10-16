<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >IP Whitelist</span
        >
      </h3>

      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
      </div>
    </div>
    <div class="card-body pb-10 pt-0">
      <div class="overflow-auto">
        <b-table
          :striped="true"
          :items="addresses"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          show-empty
          empty-text="You don't have anything activity logs."
        >
        </b-table>
        <b-pagination
          class="float-right"
          v-model="currentPage"
          :total-rows="addresses.length"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { GET_ALLOWED_IP_ADDRESSES } from "@/core/services/store/account.module";
export default {
  data() {
    return {
      fields: [
        "address",
        {
          key: "totalLogin",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "browser",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          key: "lastLogin",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      addresses: [],
      currentPage: 1,
      perPage: 10
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "IP Whitelist" }
    ]);

    this.$store.dispatch(GET_ALLOWED_IP_ADDRESSES).then(addresses => {
      console.log("this.addresses", addresses);
      this.addresses = addresses;
    });
  }
};
</script>
