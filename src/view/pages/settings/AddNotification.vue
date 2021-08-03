<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Add Notification Channel
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Add or remove your notification channels</span
        >
      </div>
      <div class="card-toolbar">
        <!-- <v-btn color="primary" @click="save()" ref="user_save_changes">
          Save Changes
        </v-btn>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
        Cancel
      </button> -->
      </div>
    </div>
    <div class="card-body">
      <v-form ref="addApiKey" v-model="valid" lazy-validation>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Channel:" label-for="channel">
              <b-form-select
                id="channel"
                :options="channels"
                required
                ref="channel"
              ></b-form-select>
            </b-form-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group
              label="Notification name:"
              label-for="name"
              description=""
            >
              <b-form-input
                id="name"
                type="name"
                required
                placeholder="Name for this notification"
                :rules="nameRules"
                ref="name"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Email:" label-for="email" description="">
              <b-form-input
                id="email"
                type="email"
                required
                placeholder="Email address to send the notification"
                :rules="emailRules"
                ref="email"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-btn
              class="btn btn-dark"
              block
              @click="addChannel"
              ref="topUpCredit"
              >Add Channel</b-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data: () => ({
    valid: true,
    name: "",
    channels: ["Email", "Slack", "Telegram"],
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
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    addChannel() {
      this.$refs.form.validate();
    },
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification", route: "notification" },
      { title: "Add Notification" },
    ]);
  },
};
</script>
