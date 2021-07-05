<template>
  <div>
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h3 class="card-label font-weight-bolder text-dark">
            Subscription
          </h3>
          <v-spacer></v-spacer>
          <router-link
            to="/settings/create_subscription"
            v-slot="{ href, navigate }"
          >
            <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
              <button type="button" class="btn btn-success" ref="add">
                Add Subscription
              </button>
            </a>
          </router-link>
          <!-- <b-btn class="ml-2" variant="success" x-large @click="goAddPage">Add Subscription</b-btn> -->
        </v-card-title>
        <v-container>
          <p class="text--lighten-1 font-size-sm mt-3">
            Manage your customizable RunCloud subscription here. To simplify
            your billing, you can add both server and backup plan in one single
            subscription. To cancel your server plan, please change to Free
            Plan.
          </p>
          <p class="text--lighten-1 font-size-sm">
            Cancelled subscription will continue running until the end of
            billing cycle. Payment made is subject to and in accordance with the
            <h ref="#">Refund Policy.</h>
          </p>
          <b-card-group deck class="w-100 pr-10 pl-10">
            <b-card border-variant="secondary">
              <b-card-text>Current Server Plan</b-card-text>
              <h3>Trial</h3>
              <b-card-text class="">until 03-Jul-2021</b-card-text>
            </b-card>
            <b-card border-variant="secondary">
              <b-card-text>Current Backup Plan</b-card-text>
              <h3>N/A</h3>
            </b-card>
            <b-card border-variant="secondary">
              <v-row>
                <v-col cols="12" md="10">
                  <b-card-text>Available credit </b-card-text>
                </v-col>
                <v-col cols="12" md="2">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon color="primary" dark v-bind="attrs" v-on="on">
                        info
                      </v-icon>
                    </template>
                    <span>Tooltip</span>
                  </v-tooltip>
                </v-col>
              </v-row>
              <h3>$0.00</h3>
              <b-card-text
                >This credit can be used for the subscription</b-card-text
              >
            </b-card>
          </b-card-group>
          <v-toolbar flat>
            <template v-slot:extension>
              <v-tabs v-model="tab" align-with-title>
                <v-tabs-slider color="primary"></v-tabs-slider>
                <v-tab v-for="item in items" :key="item">
                  {{ item }}
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card flat>
                <v-card-text v-text="text"></v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </div>
    </v-card>

    <div class="form-group row mt-12"></div>

    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Credit Top-Up</h1>
        </v-card-title>
        <v-container>
          <p class="text--lighten-1 font-size-sm mt-3">
            Currently we accept Visa and MasterCard only for subscriptions. If
            you wish to use PayPal or any credit cards supported by PayPal, use
            our credit top-up below. It is a manual one-time payment
            (non-recurring) that adds credit to your account. You can add more
            credit at anytime to continue your subscription.
          </p>
          <h4>Amount</h4>
          <v-select :items="selItems" dense label="Amount" outlined></v-select>
          <b-btn
            class="btn btn-dark"
            block
            @click="topUpCredit"
            ref="topUpCredit"
            >Top Up Credit</b-btn
          >
        </v-container>
      </div>
    </v-card>
    <!--end::Card-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      tab: null,
      items: ["Active", "Inactive", "canceled"],
      text: "Looks like you don't have anything here."
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Subscription" }
    ]);
  }
};
</script>
