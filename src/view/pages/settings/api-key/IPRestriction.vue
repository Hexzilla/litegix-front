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
          <b-link to="apiKey/ipaddr/add">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Add IP Address</a
            >
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
            :items="ip_address"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            show-empty
            empty-text="You don't have anything allowed IP addresses."
          >
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="ip_address.length"
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
export default {
  name: "IPRestriction",
  data() {
    return {
      fields: ["IP Address", "Description", "Delete"],
      ip_address: [],
      currentPage: 1,
      perPage: 10
    };
  }
};
</script>
