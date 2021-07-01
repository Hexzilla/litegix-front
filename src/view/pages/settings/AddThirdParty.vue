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
            <h6>Label</h6>
            <v-text-field
              dense
              placeholder="Label for this API Key"
              outlined
              :rules="nameRules"
              required
            ></v-text-field>
            <h5>Service</h5>
            <v-select
              v-model="select"
              :items="items"
              required
              dense
              outlined
            ></v-select>
            <h6>Username/Email/KeyId</h6>
            <v-text-field
              dense
              placeholder="API Username/Email"
              outlined
              :rules="emailRules"
              required
            ></v-text-field>
            <h6>Secret</h6>
            <p>
              You can create API Key for Cloudflare by using this URL:
              <a href="#"> https://www.cloudflare.com/a/profile</a>
            </p>
            <v-text-field
              dense
              placeholder="xxxx..."
              outlined
              :rules="nameRules"
              required
            ></v-text-field>
            <b-btn class="btn btn-dark" block @click="addKey" ref="topUpCredit"
              >Add API Key</b-btn
            >
          </v-form>
        </v-container>
      </div>
    </v-card>
    <!--end::Card-->
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    // nameRules: [
    //   (v) => !!v || "Name is required",
    //   (v) => (v && v.length <= 10) || "Name must be less than 10 characters"
    // ],
    // email: "",
    // emailRules: [
    //   (v) => !!v || "E-mail is required",
    //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    // ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"]
  }),

  methods: {
    addKey() {
      this.$refs.form.validate();
    }
  }
};
</script>
