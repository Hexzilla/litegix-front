<template>
  <div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Add Notification Channel</h1>
        </v-card-title>
        <v-container>
          <v-form ref="addApiKey" v-model="valid" lazy-validation>
            <b-card-group deck class="w-100 pr-10 pl-10">
              <b-card border-variant="secondary">
                <i class="fa fa-mail"></i>
                <b-card-text>Email</b-card-text>
              </b-card>
              <b-card border-variant="secondary">
                <i class="fa fa-slack"></i>
                <b-card-text>Slack</b-card-text>
              </b-card>
              <b-card border-variant="secondary">
                <i class="fa fa-telegram"></i>
                <b-card-text>Telegram</b-card-text>
              </b-card>
            </b-card-group>
            <b-container class="mt-3">
              <h6>Notification name</h6>
              <v-text-field
                dense
                placeholder="Name for this notification"
                outlined
                :rules="nameRules"
                required
              ></v-text-field>
              <h6>Email</h6>
              <v-text-field
                dense
                placeholder="Email address to send the notification"
                outlined
                :rules="emailRules"
                required
              ></v-text-field>
              <b-btn
                class="btn btn-dark"
                block
                @click="addChannel"
                ref="topUpCredit"
                >Add Channel</b-btn
              >
            </b-container>
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

  methods: {
    addChannel() {
      this.$refs.form.validate();
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification", route: "notification" },
      { title: "Add Notification" }
    ]);
  }
};
</script>
