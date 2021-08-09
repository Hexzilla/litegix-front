<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Notification Channels
        </h3>
        <span class="text-muted font-size-sm mt-1"
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
      <div>
        <span class="font-size-lg mt-8">
          Here you can add notifications to notify you on certain events.
          <br />You can add <b>Slack, Telegram and Email </b>for the
          notification channel. You then can hook the registered notifications
          to your <b> Servers, Atomic Deployment </b> and
          <b> Payment History (soon)</b>.
        </span>
      </div>
      <v-data-table :headers="headers" :items="desserts" class="mt-5">
        <template v-slot:top>
          <v-toolbar flat>
            <v-text-field
              outlined
              dense
              label="search"
              class="searchBox"
              :search="search"
              style="margin-top: 25px; margin-right: 5px"
            ></v-text-field>
            <router-link
              to="/settings/AddNotification"
              v-slot="{ href, navigate }"
            >
              <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
                <v-btn large type="button" color="primary" ref="add">
                  Add
                </v-btn>
              </a>
            </router-link>
          </v-toolbar>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "Channels",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Service",
          align: "left",
          sortable: false,
          value: "service",
        },
        { text: "Name", value: "name" },
        { text: "Content", value: "content" },
        { text: "Options", value: "options" },
      ],
      desserts: [],
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" },
    ]);
    this.current_photo = this.currentUserProfile.photo;
  },
  methods: {
    save() {
      var name = this.$refs.name.value;
      var surname = this.$refs.surname.value;
      var company_name = this.$refs.company_name.value;
      var phone = this.$refs.phone.value;
      var email = this.$refs.email.value;
      var company_site = this.$refs.company_site.value;
      var photo = this.photo;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_PERSONAL_INFO, {
          name,
          surname,
          company_name,
          phone,
          email,
          company_site,
          photo,
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
  },
};
</script>
