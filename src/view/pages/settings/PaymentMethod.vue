<template>
  <!--begin::Advance Table Widget 10-->
  <v-app>
    <div class="card card-custom">
      <div class="card-body">
        <!--begin::Header-->
        <v-card-title>
          <h1>Payment Methods</h1>
          <v-spacer></v-spacer>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
              transition="dialog-top-transition"
            >
              <template v-slot:activator="{ on }">
                <button
                  type="button"
                  class="btn btn-success w-100"
                  @click="add()"
                  v-on="on"
                >
                  Add a new payment method
                </button>
              </template>
              <v-card>
                <v-toolbar flat>
                  <v-toolbar-title>Add Cloudflare API Key</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn icon dark @click="dialog = false">
                      <v-icon color="primary">mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>

                <v-card-text>
                  <v-container>
                    <b-form>
                      <b-form-group
                        id="input-group-1"
                        label="Name on Card"
                        label-for="cardname"
                      >
                        <b-form-input
                          id="cardname"
                          v-model="form.name"
                        ></b-form-input>
                      </b-form-group>
                      <b-row>
                        <b-col sm="6">
                          <b-form-group
                            id="input-group-2"
                            label="Country"
                            label-for="selcountry"
                          >
                            <b-form-select
                              id="selcountry"
                              v-model="form.country"
                            ></b-form-select>
                          </b-form-group>
                        </b-col>

                        <b-col sm="6">
                          <b-form-group
                            id="input-group-3"
                            label="Postcode"
                            label-for="postcode"
                          >
                            <b-form-input
                              id="postcode"
                              v-model="form.postcode"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-form-group
                        id="input-group-4"
                        label="Card Number"
                        label-for="cardnumber"
                      >
                        <b-form-input
                          id="cardnumber"
                          v-model="form.number"
                        ></b-form-input>
                      </b-form-group>

                      <b-row>
                        <b-col sm="6">
                          <b-form-group
                            id="input-group-5"
                            label="Expiration Date"
                            label-for="expirationdate"
                          >
                            <b-form-input
                              id="expirationdate"
                              v-model="form.date"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>

                        <b-col sm="6">
                          <b-form-group
                            id="input-group-6"
                            label="CVC/CVV"
                            label-for="cvc_cvv"
                          >
                            <b-form-input
                              id="cvc_cvv"
                              v-model="form.secret"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-button block type="submit" variant="primary"
                        >Submit</b-button
                      >
                    </b-form>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </v-card-title>
        <v-container>
          <v-data-table :headers="headers" :items="methods"></v-data-table>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
// import { mapGetters } from "vuex";
// import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Card",
          align: "left",
          sortable: false,
          value: "card"
        },
        { text: "Expires", value: "expires" }
      ],
      form: {
        name: "",
        country: "",
        postcode: "",
        number: "",
        date: "",
        cvccvv: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Payment Method" }
    ]);
  }
};
</script>
