<template>
  <v-app>
    <!--begin::Card-->
      <v-card class="card-body">
        <!--begin::Header-->
        <v-card-title>
          <h1>Newsletter</h1>
          <v-spacer></v-spacer>
        </v-card-title>
        <!--end::Header-->
        <!--begin::Form-->
        <v-form>
          <!--begin::Body-->
          <p class="text-muted font-size-sm mt-1">
            Two-factor authentication adds an extra layer of security to your
            account by asking for a verification code when you sign in.
          </p>
          <v-divider></v-divider>
          <div class="row">
            <div class="col-lg-9 col-xl-10 mt-3">
              <h5 class="mb-6">
                <v-avatar left size="32" color="success">
                  <v-icon color="#fff">mdi-check</v-icon>
                </v-avatar>
                Newsletter Subscription
              </h5>
            </div>
            <v-spacer></v-spacer>
            <div class="col-lg-3 col-xl-2 v-card__actions float-right">
              <a href="#" class="btn btn-danger btn-sm la-pull-right">
                <span class="mb-6"> Newsletter Subscription </span>
              </a>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="row mt-12">
            <div class="col-lg-9 col-xl-6">
              <h5 class="mb-6">Newsletter Subscription</h5>
            </div>
          </div>

          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <!--begin::Content-->
              <div class="d-flex flex-grow-1">
                <!--begin::Checkbox-->
                <label
                  class="
                    checkbox checkbox-lg checkbox-lg checkbox-single
                    flex-shrink-0
                    mr-4
                    v-treeview
                  "
                >
                  <input id="update_account" type="checkbox" value="1" />
                  <span></span>
                </label>
                <!--end::Checkbox-->
                <!--begin::Section-->
                <label
                  for="update_account"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <div class="font-size-lg mb-1">
                      Updates and Announcements
                    </div>
                    <span class="text-muted">
                      Stay up to date with the latest announcements and
                      promotions from RunCloud
                    </span>
                  </div>
                </label>
                <!--end::Section-->
              </div>
              <!--end::Content-->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <!--begin::Content-->
              <div class="d-flex flex-grow-1">
                <!--begin::Checkbox-->
                <label
                  class="
                    checkbox checkbox-lg checkbox-lg checkbox-single
                    flex-shrink-0
                    mr-4
                  "
                >
                  <input id="chk_blog" type="checkbox" value="1" />
                  <span></span>
                </label>
                <!--end::Checkbox-->
                <!--begin::Section-->
                <label
                  for="chk_blog"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <div class="font-size-lg mb-1">Blog</div>
                    <span class="text-muted">
                      Whenever a blog post is published, you will be the first
                      to know!
                    </span>
                  </div>
                </label>
                <!--end::Section-->
              </div>
              <!--end::Content-->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <!--begin::Content-->
              <div class="d-flex flex-grow-1">
                <!--begin::Checkbox-->
                <label
                  class="
                    checkbox checkbox-lg checkbox-lg checkbox-single
                    flex-shrink-0
                    mr-4
                  "
                >
                  <input id="chk_Events" type="checkbox" value="1" />
                  <span></span>
                </label>
                <!--end::Checkbox-->
                <!--begin::Section-->
                <label
                  for="chk_Events"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <div class="font-size-lg mb-1">
                      Events and Meetups
                    </div>
                    <span class="text-muted">
                      Be informed about RunCloud events and meetups
                    </span>
                  </div>
                </label>
                <!--end::Section-->
              </div>
              <!--end::Content-->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <div class="input-group input-group-lg input-group-solid">
                <v-btn
                  block
                  color="primary"
                  elevation="2"
                  large
                  @click="save()"
                  ref="kt_save_changes"
                >
                  Update
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <!--end::Body-->
        </v-form>
        <!--end::Form-->
    </v-card>
    <div class="form-group"></div>
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Channels</h1>
          <v-spacer></v-spacer>
        </v-card-title>
        <div>
          <span class="text-muted font-size-sm mt-8">
            Here you can add notifications to notify you on certain events. You
            can add <b>Slack, Telegram and Email </b>for the notification
            channel. You then can hook the registered notifications to your
            <b> Servers, Atomic Deployment </b> and
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
                style="margin-top:25px;margin-right: 5px;"
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
    </v-card>
  </v-app>
</template>

<script>
// import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "Notification",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Service",
          align: "left",
          sortable: false,
          value: "service"
        },
        { text: "Name", value: "name" },
        { text: "Content", value: "content" },
        { text: "Options", value: "options" }
      ],
      desserts: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" }
    ]);
    this.current_photo = this.currentUserPersonalInfo.photo;
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
          photo
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
  }
};
</script>
