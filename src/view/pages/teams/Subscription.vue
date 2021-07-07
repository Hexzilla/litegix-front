<template>
  <div class="card card-customa card-stretch gutter-b">
    <div class="card-header border-0">
      <h4>Please subscribe to use this feature</h4>
      <span class="text-muted mt-3 font-size-sm"
        >This feature only available for higher tier subscription. Please
        upgrade your current subscription to enjoy this feature.</span
      >
    </div>
    <div class="card-body pt-0">
      <b-table
        :items="items"
        :fields="fields"
        show-empty
        empty-text="You don't have anything inside"
      >
        <template #head(label)>
          <h5><i class="fab fa-codepen"></i> Feature Comparison</h5>
        </template>
        <template #head(free)>
          <p class="mb-1"><strong>FREE</strong></p>
          <p class="text-muted mb-1">($0/month)</p>
          <b-button class="py-1" disabled v-if="state == 0">Current</b-button>
        </template>
        <template #head(basic)>
          <p class="mb-1"><strong>BASIC</strong></p>
          <p class="text-muted mb-1">($8/month)</p>
          <b-button class="py-1" disabled v-if="state == 1">Current</b-button>
          <b-button class="py-1" variant="success" v-if="state < 1"
            >upgrade</b-button
          >
        </template>
        <template #head(pro)>
          <p class="mb-1"><strong>PRO</strong></p>
          <p class="text-muted mb-1">($15/month)</p>
          <b-button class="py-1" disabled v-if="state == 2">Current</b-button>
          <b-button class="py-1" variant="success" v-if="state < 2"
            >upgrade</b-button
          >
        </template>
        <template #head(business)>
          <p class="mb-1"><strong>BUSINESS</strong></p>
          <p class="text-muted mb-1">($45/month)</p>
          <b-button class="py-1" disabled v-if="state == 3">Current</b-button>
          <b-button class="py-1" variant="success" v-if="state < 3"
            >upgrade</b-button
          >
        </template>
        <template #cell(free)="data">
          <i class="fas fa-times" v-if="data.item.free === false"></i>
          <i
            class="fas fa-check text-warning"
            v-if="data.item.free === true"
          ></i>
          {{
            data.item.free !== true && data.item.free !== false
              ? data.item.free
              : ""
          }}
        </template>
        <template #cell(basic)="data">
          <i class="fas fa-times" v-if="data.item.basic === false"></i>
          <i
            class="fas fa-check text-warning"
            v-if="data.item.basic === true"
          ></i>
          {{
            data.item.basic !== true && data.item.basic !== false
              ? data.item.basic
              : ""
          }}
        </template>
        <template #cell(pro)="data">
          <i class="fas fa-times" v-if="data.item.pro === false"></i>
          <i
            class="fas fa-check text-warning"
            v-if="data.item.pro === true"
          ></i>
          {{
            data.item.pro !== true && data.item.pro !== false
              ? data.item.pro
              : ""
          }}
        </template>
        <template #cell(business)="data">
          <i class="fas fa-times" v-if="data.item.business === false"></i>
          <i
            class="fas fa-check text-warning"
            v-if="data.item.business === true"
          ></i>
          {{
            data.item.business !== true && data.item.business !== false
              ? data.item.business
              : ""
          }}
        </template>
      </b-table>
    </div>
  </div>
</template>


<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      state: 0,
      fields: ["label", "free", "basic", "pro", "business"],
      items: [
        {
          label: "Total connected server",
          free: "1",
          basic: "1",
          pro: "Unlimited",
          business: "Unlimited",
        },
        {
          label: "Graph of data transferred out per web application",
          free: false,
          basic: "Daily only",
          pro: "Daily only",
          business: "Daily & Monthly",
        },
        {
          label:
            "Reports server load, memory and hard disk usage for your servers",
          free: false,
          basic: "Hourly only",
          pro: "Hourly only",
          business: "Hourly & Daily",
        },
        {
          label: "WordPress site staging",
          free: false,
          basic: "1",
          pro: "10",
          business: "Unlimited",
        },
        {
          label:
            "Team Management. Share server with team based on permission given",
          free: "1",
          basic: "1",
          pro: "Unlimited",
          business: "Unlimited",
        },
        {
          label: "Atomic Git Deployment",
          free: false,
          basic: false,
          pro: false,
          business: true,
        },
        {
          label: "RunCache (WordPress caching system)",
          free: true,
          basic: false,
          pro: false,
          business: true,
        },
        {
          label: "Server health check",
          free: false,
          basic: true,
          pro: true,
          business: true,
        },
      ],
    };
  },
   mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Subscription is required" }]);
  },
};
</script>
