<template>
  <div>
    <div class="card card-custom">
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            IP Address Restriction
          </h3>
          <span class="text-muted font-size-sm mt-1">
            Manage API Key and API Secret
          </span>
        </div>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />
          <b-link to="apiKey/ipaddr/new">
            <a class="btn btn-primary">Add IP Address</a>
          </b-link>
        </div>
      </div>
      <div class="card-body">
        <p class="font-size-md mt-1">
          Any requests to the API endpoint can only be made from these IP
          Address(es). If no IP Address is added and API Access is enabled, your
          API Key and API Secret can be requested from any IP address.
        </p>
        <div class="overflow-auto mt-8">
          <p class="font-size-lg font-weight-bolder">
            Allowed IP Address(es):
          </p>
          <b-table
            :items="addresses"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            show-empty
            empty-text="You don't have anything allowed IP addresses."
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
  </div>
  <!--end::Card-->
</template>

<script>
import { GET_ALLOWED_IP_ADDRESSES } from "@/core/services/store/account.module";
export default {
  name: "IPRestriction",
  data() {
    return {
      fields: ["address", "browser", "totalLogin"],
      addresses: [],
      currentPage: 1,
      perPage: 10
    };
  },
  mounted() {
    this.$store.dispatch(GET_ALLOWED_IP_ADDRESSES).then(addresses => {
      console.log("this.addresses", addresses);
      this.addresses = addresses;
    });
  }
};
</script>
