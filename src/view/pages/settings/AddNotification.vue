<template>
  <div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Add Notification Channel</h1>
        </v-card-title>
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
          <div class="form-group row align-items-center mt-5">
            <label class="col-xl-3 col-lg-3 col-form-label text-lg-right"
              >Notification name</label
            >
            <div class="col-lg-9 col-xl-6">
              <b-input
                type="text"
                placeholder="Name for this notification"
                :rules="nameRules"
                required
              ></b-input>
            </div>
          </div>
          <div class="form-group row align-items-center">
            <label class="col-xl-3 col-lg-3 col-form-label text-lg-right"
              >Email</label
            >
            <div class="col-lg-9 col-xl-6">
              <b-input
                type="text"
                placeholder="Email address to send the notification"
                :rules="emailRules"
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
                class="btn btn-dark"
                block
                @click="addChannel"
                ref="topUpCredit"
                >Add Channel</b-btn
              >
            </div>
          </div>
        </v-form>
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
