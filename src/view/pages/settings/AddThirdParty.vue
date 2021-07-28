<template>
  <div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Add 3rd Party API Key</h1>
        </v-card-title>
        <v-container>
          <v-form ref="addApiKey" v-model="valid" lazy-validation>
            <div class="form-group row align-items-center">
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  label="Label"
                  type="text"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
            </div>
            <div class="form-group row align-items-center">
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-select
                  outlined
                  dense
                  type="text"
                  label="API Username/Email"
                ></v-select>
              </v-col>
            </div>
            <div class="form-group row align-items-center">
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  type="text"
                  label="Username/Email/KeyId"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
            </div>
            <div class="form-group row align-items-center">
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <p>
                  You can create API Key for Cloudflare by using this URL:
                  <a href="#"> https://www.cloudflare.com/a/profile</a>
                </p>
                <v-text-field
                  outlined
                  dense
                  type="text"
                  label="security"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
            </div>
            <div class="form-group row align-items-center">
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-btn
                  block
                  color="primary"
                  large
                  @click="addKey"
                  ref="topUpCredit"
                  >Add API Key</v-btn
                >
              </v-col>
            </div>
          </v-form>
        </v-container>
      </div>
    </v-card>
    <!--end::Card-->
  </div>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"]
  }),
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "3rd Party API Key", route: "third_party_api_key" },
      { title: "Add 3rd Party API Key" }
    ]);
  },

  methods: {
    addKey() {
      this.$refs.form.validate();
    }
  }
};
</script>
