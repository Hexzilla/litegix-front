<template>
  <v-app>
    <!--begin::Card-->
    <v-card>
      <!--begin::Body-->
      <div class="card-body pt-15">
        <!--begin::User-->
        <div class="text-center mb-10">
          <div class="symbol symbol-60 symbol-circle symbol-xl-90">
            <div
              class="symbol-label"
              :style="{
                backgroundImage: `url('media/users/300_21.jpg')`
              }"
            ></div>
          </div>

          <h2 class=" my-2">
            <b>DNS Manager</b>
          </h2>
          <div class="text-muted mb-2">
            Create a domain, add domain records, import zones and domains.
          </div>
        </div>
        <!--end::User-->

        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
            transition="dialog-top-transition"
          >
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Let's get started</v-btn>
            </template>
            <v-card>
              <v-toolbar flat dark color="primary">
                <v-toolbar-title>Add Cloudflare API Key</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <br />
                <b-link href="/"> How to get an API key?</b-link>
                <v-divider></v-divider>
                <v-container>
                  <b-form @submit="onSubmit">
                    <b-form-group
                      id="input-group-1"
                      label="Label"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback1"
                      :state="state1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.label"
                        placeholder="Label for this API Key"
                        :state="state1"
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-2"
                      label="Username/Email/KeyId"
                      label-for="input-2"
                      :invalid-feedback="invalidFeedback2"
                      :state="state2"
                    >
                      You can create API Key for Cloudflare by using this URL:
                      <br /><b-link>
                        https://dash.cloudflare.com/profile/api-tokens</b-link
                      >
                      <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="API Username/Email"
                        :state="state2"
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-3"
                      label="Secret"
                      label-for="input-3"
                      :invalid-feedback="invalidFeedback3"
                      :state="state3"
                    >
                      <b-form-input
                        id="input-3"
                        v-model="form.secret"
                        :state="state3"
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-button block type="submit" variant="primary"
                      >Submit</b-button
                    >
                  </b-form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
      <!--end::Body-->
    </v-card>
    <!--end::Card-->
  </v-app>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  computed: {
    state1() {
      return this.form.label.length >= 1 ? true : false;
    },
    state2() {
      return this.form.name.length >= 1 ? true : false;
    },
    state3() {
      return this.form.secret.length >= 6 ? true : false;
    },
    invalidFeedback1() {
      if (this.form.label.length > 0) {
        return "";
      } else {
        return "Please enter something";
      }
    },
    invalidFeedback2() {
      if (this.form.name.length > 0) {
        return "";
      } else {
        return "Please enter something";
      }
    },
    invalidFeedback3() {
      if (this.form.secret.length > 6) {
        return "";
      } else if (this.form.secret.length > 0) {
        return "Enter at least 6 characters";
      } else {
        return "Please enter something";
      }
    }
  },
  data: () => ({
    dialog: false,
    form: {
      label: "",
      name: "",
      secret: ""
    }
  }),
  methods: {
    onSubmit(evt) {
      if (this.state1 && this.state2 && this.state3) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        this.dialog = false;
      }
      return;
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "DNS Manager" }]);
  }
};
</script>
