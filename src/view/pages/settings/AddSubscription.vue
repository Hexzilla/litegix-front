<template>
  <div class="row">
    <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
      <div>
        <h1>Create subscription</h1>
        <h4>1 Customize your own plan</h4>
      </div>
      <v-card>
        <div class="card-body">
          <v-container>
            <div>
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                  <v-card-title>
                    <h4>Server</h4>
                    <h6>Compare plans</h6>
                  </v-card-title>
                  <v-select
                    v-model="select"
                    :items="items"
                    required
                    dense
                    outlined
                  ></v-select>
                  <v-spacer></v-spacer>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" align="right">
                  <h1>USD 0</h1>
                  <h6>/monthly</h6>
                </div>
              </div>
              <v-spacer></v-spacer>
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                  <v-card-title>
                    <h4>Backup</h4>
                  </v-card-title>
                  <div>
                    <p>Monthly Backup Pro. Pro site backup package</p>
                    <h6>Compare plans</h6>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" align="right">
                  <h1>USD 0</h1>
                  <h6>/monthly</h6>
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
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      v-model="passLen"
                      :rules="rules"
                      outlined
                      dense
                      type="number"
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-select outlined dense class="text-left"></v-select>
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
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <v-card>
        <div class="card-body">
          <v-card-title>
            <h1>Subscription summary</h1>
          </v-card-title>
          <v-container>
            <v-form ref="addApiKey" v-model="valid" lazy-validation>
              <v-switch
                v-model="switch1"
                :label="`Switch 1: ${switch1.toString()}`"
              ></v-switch>
            </v-form>
          </v-container>
        </div>
      </v-card>
    </div>
  </div>
</template>
