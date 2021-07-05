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
              <label class="col-xl-3 col-lg-3 col-form-label text-lg-right"
                >Label</label
              >
              <div class="col-lg-9 col-xl-6">
                <b-input
                  type="text"
                  placeholder="Label for this API Key"
                  :rules="nameRules"
                  required
                ></b-input>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-xl-3 col-lg-3 col-form-label text-lg-right"
                >Service</label
              >
              <div class="col-lg-9 col-xl-6">
                <b-select
                  type="text"
                  placeholder="API Username/Email"
                ></b-select>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-xl-3 col-lg-3 col-form-label text-lg-right"
                >Username/Email/KeyId</label
              >
              <div class="col-lg-9 col-xl-6">
                <b-input
                  type="text"
                  placeholder="API Username/Email"
                  :rules="emailRules"
                  required
                ></b-input>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-xl-3 col-lg-3 col-form-label text-lg-right"
                >Secret</label
              >
              <div class="col-lg-9 col-xl-6">
                <p>
                  You can create API Key for Cloudflare by using this URL:
                  <a href="#"> https://www.cloudflare.com/a/profile</a>
                </p>
                <b-input
                  type="text"
                  placeholder="xxxx..."
                  :rules="nameRules"
                  required
                ></b-input>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label
                class="col-xl-3 col-lg-3 col-form-label text-lg-right"
              ></label>
              <div class="col-lg-9 col-xl-6">
                <b-btn
                  class="btn btn-dark mt-5"
                  block
                  @click="addKey"
                  ref="topUpCredit"
                  >Add API Key</b-btn
                >
              </div>
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
