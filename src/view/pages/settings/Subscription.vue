<template>
  <div>
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Subscription</h1>
          <v-spacer></v-spacer>
          <router-link
            to="/settings/create_subscription"
            v-slot="{ href, navigate }"
          >
            <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
              <v-btn
                large
                color="primary"
                ref="add">
                Add Subscription
              </v-btn>
            </a>
          </router-link>
          <!-- <b-btn class="ml-2" variant="success" x-large @click="goAddPage">Add Subscription</b-btn> -->
        </v-card-title>
        <v-container>
          <p class="text-muted font-size-sm mt-3">
            Manage your customizable RunCloud subscription here. To simplify
            your billing, you can add both server and backup plan in one single
            subscription. To cancel your server plan, please change to Free
            Plan.
          </p>
          <p class="text-muted font-size-sm">
            Cancelled subscription will continue running until the end of
            billing cycle. Payment made is subject to and in accordance with the
            <strong>Refund Policy.</strong>
          </p>
          <!-- <v-card-actions>
            <v-card color="secondary">
              <v-card-title>Current Server Plan</v-card-title>
              <h3>Trial</h3>
              <v-card-title class="">until 03-Jul-2021</v-card-title>
            </v-card>
            <v-card color="secondary">
              <v-card-title>Current Backup Plan</v-card-title>
              <h3>N/A</h3>
            </v-card>
            <v-card color="secondary">
              <v-row>
                <v-col cols="12" md="10">
                  <v-card-title>Available credit </v-card-title>
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
              <v-card-title
                >This credit can be used for the subscription</v-card-title
              >
            </v-card>
          </v-card-actions> -->
          <v-row justify="space-around">
            <v-col
              cols="12"
              md="4"
            >
              <v-sheet
                elevation="6"
                class="mx-auto"
              >
                <v-card class="">
                  <v-card-title>Current Server Plan</v-card-title>
                  <v-card-subtitle>Trial</v-card-subtitle>
                  <v-card-subtitle class="">until 03-Jul-2021</v-card-subtitle>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-sheet
                elevation="6"
                class="mx-auto"
              >
                <v-card >
                  <v-card-title>Current Backup Plan</v-card-title>
                  <v-card-subtitle>N/A</v-card-subtitle>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-sheet
                elevation="6"
                class="mx-auto"
              >
                <v-card>
                  <v-card-title>Available credit 
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="primary" dark v-bind="attrs" v-on="on">
                          info
                        </v-icon>
                      </template>
                      <span>Tooltip</span>
                    </v-tooltip>
                  </v-card-title>
                  <v-card-subtitle>$0.00</v-card-subtitle>
                  <v-card-subtitle
                    >This credit can be used for the subscription</v-card-subtitle
                  >
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>


          
          <v-tabs v-model="tab" align-with-title class="mt-5">
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
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
          <p class="text-muted font-size-sm mt-1">
            Currently we accept Visa and MasterCard only for subscriptions. If
            you wish to use PayPal or any credit cards supported by PayPal, use
            our credit top-up below. It is a manual one-time payment
            (non-recurring) that adds credit to your account. You can add more
            credit at anytime to continue your subscription.
          </p>
          <div class="form-group row align-items-center">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-select
                :items="selItems"
                dense
                label="Amount"
                outlined
              ></v-select>
            </v-col>
          </div>

          <div class="form-group row align-items-center">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-btn
                color="primary"
                large
                block
                @click="topUpCredit"
                ref="topUpCredit"
                >Top Up Credit</v-btn
              >
            </v-col>
          </div>
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
