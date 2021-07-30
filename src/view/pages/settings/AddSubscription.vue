<template>
  <div class="row">
    <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
      <div>
        <h1>Create subscription</h1>
        <h4 class="mt-6 mb-5">
          <v-avatar left class="gray darken-4" color="#cecdcd" size="32">
            1
          </v-avatar>
          Customize your own plan
        </h4>
      </div>
      <v-card>
        <div class="card-body">
          <v-container>
            <div>
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                  <v-card-title>Server</v-card-title>
                  <v-card-actions>
                    <v-dialog>
                      <v-card-text>
                        plans
                      </v-card-text>
                    </v-dialog> 
                  </v-card-actions>
                  <v-autocomplete
                    v-model="select"
                    :items="items"
                    required
                    dense
                    outlined
                  ></v-autocomplete>
                  <v-spacer></v-spacer>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" align="right">
                  <h1>USD 0</h1>
                  <v-card-subtitle >/monthly</v-card-subtitle>
                </div>
              </div>
              <v-spacer></v-spacer>
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                  <v-card-title>
                    Backup
                  </v-card-title>
                  <div>
                    <p>Monthly Backup Pro. Pro site backup package</p>
                    <v-card-actions>
                      <v-dialog>
                        <v-card-text>
                          Compare plans
                        </v-card-text>
                      </v-dialog> 
                    </v-card-actions>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" align="right">
                  <h1>USD 0</h1>
                  <v-card-subtitle>/monthly</v-card-subtitle>
                </div>
              </div>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <b-card-text class="text-left">Plan</b-card-text>
                  </v-col>
                  <v-col cols="12" sm="4" md="2">
                    <b-card-text class="text-right">Site</b-card-text>
                  </v-col>
                  <v-col cols="12" sm="8" md="4">
                    <b-card-text class="text-left">Storage</b-card-text>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <b-card-text class="text-right">Coast</b-card-text>
                  </v-col>
                </v-row>
                <hr />
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <b-card-text class="text-left">Backup Pro</b-card-text>
                  </v-col>
                  <v-col cols="12" sm="4" md="2">
                    <v-text-field
                      outlined
                      dense
                      type="number"
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="8" md="4">
                    <v-autocomplete outlined dense class="text-left"></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <b-card-text class="text-right">USD</b-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-container>
        </div>
      </v-card>
      <h4 class="mt-6 mb-5">
        <v-avatar left class="gray darken-4" color="#cecdcd" size="32">
          2
        </v-avatar>
        Select payment method
      </h4>
      <v-card>
        <div class="card-body">
          <v-container>
            <b-card
              align="center"
              bg-variant="primary"
              min-height="60"
              style="cursor: pointer"
              rounded="3"
            >
              <span>
                <v-img
                  max-width="55"
                  class="float-left"
                  src="../../../../public/media/logos/logo-letter-9.png"
                ></v-img>
                <b-card-text>Add a New Payment Method</b-card-text>
              </span>
            </b-card>
          </v-container>
        </div>
      </v-card>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <v-card>
        <div class="card-body">
          <v-card-title>
            <h1>Summary</h1>
          </v-card-title>
          <v-content>
            <v-form>
              <v-card-actions>
                <v-card-subtitle>Bill Monthly</v-card-subtitle>
                <v-switch
                  v-model="switch1"
                  color="gray"
                ></v-switch>
                <v-card-subtitle>Bill Yearly (Save 2 months)</v-card-subtitle>
              </v-card-actions>
            </v-form>
          </v-content>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "AddSubscription",
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Subscription", route: "subscription" },
      { title: "Create Subscription" }
    ]);
  },
  data () {
      return {
        switch1: true,
      }
    }
};
</script>
