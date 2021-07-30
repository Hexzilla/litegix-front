<template>
  <!--begin::Advance Table Widget 10-->
  <v-app>
    <v-card>
      <div class="card-body">
        <!--begin::Header-->
        <v-card-title>
          <h1>Payment Methods</h1>
          <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
              transition="dialog-top-transition"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  large
                  type="button"
                  @click="add()"
                  v-on="on"
                >
                  Add a new payment method
                </v-btn>
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
                <v-card-text class="mt-5">
                    <v-form>
                      <v-text-field
                        outlined
                        dense
                        label="Name on Card"
                        v-model="form.name"
                      ></v-text-field>
                      <v-row>
                        <v-col cols="6">
                          <v-autocomplete
                            outlined
                            dense
                            id="selcountry"
                            label="Country"
                            v-model="form.country"
                          >
                          </v-autocomplete>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field
                            outlined
                            dense
                            label="Postcode"
                            id="postcode"
                            v-model="form.postcode"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>

                      <v-text-field
                        outlined
                        dense
                        id="cardnumber"
                        v-model="form.number"
                        label="Card Number"
                      >
                      </v-text-field>

                      <b-row>
                        <v-col cols="6">
                          <v-text-field
                            dense
                            outlined
                            id="expirationdate"
                            v-model="form.date"
                            label="Expiration Date"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field
                            outlined
                            dense
                            id="cvc_cvv"
                            v-model="form.secret"
                            label="CVC/CVV"
                          >
                          </v-text-field>
                        </v-col>
                      </b-row>

                      <v-btn block large type="submit" color="primary"
                        >Submit</v-btn
                      >
                    </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
        </v-card-title>
        <v-data-table :headers="headers" :items="methods"></v-data-table>
      </div>
    </v-card>
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
