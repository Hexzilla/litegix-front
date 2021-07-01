<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h1 class="font-weight-bolder text-dark mt-5">Newsletter</h1>
          <span class="text--lighten-1 font-size-sm mt-8"
            >Subscribe or unsubscribe to our newsletter.</span
          >
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Form-->
      <form class="form">
        <!--begin::Body-->
        <div class="card-body">
          <div class="row border-bottom">
            <div class="col-lg-6 col-xl-9">
              <h4 class=" mb-6">
                <i
                  class="
                    v-icon
                    notranslate
                    v-alert__icon
                    mdi mdi-check-circle
                    theme--dark
                    --v-secondary-lighten5
                  "
                ></i>
                Newsletter Subscription
              </h4>
            </div>
            <div class="col-lg-6 col-xl-3 v-card__actions">
              <a href="#" class="btn btn-danger btn-sm la-pull-right">
                <span class=" mb-6">
                  Newsletter Subscription
                </span>
              </a>
            </div>
          </div>
          <div class="row mt-12">
            <div class="col-lg-9 col-xl-6">
              <h5 class=" mb-6">Newsletter Subscription</h5>
            </div>
          </div>
          <div class="mb-6">
            <!--begin::Content-->
            <div class="d-flex align-items-center flex-grow-1">
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
                class="
                  d-flex
                  flex-wrap
                  align-items-center
                  justify-content-between
                  w-100
                "
              >
                <div class="d-flex flex-column align-items-cente py-2">
                  <div
                    class="
                      text-dark-75
                      
                      text-hover-primary
                      font-size-lg
                      mb-1
                    "
                  >
                    Updates and Announcements
                  </div>
                  <span class="text-muted">
                    Stay up to date with the latest announcements and promotions
                    from RunCloud
                  </span>
                </div>
              </label>
              <!--end::Section-->
            </div>
            <!--end::Content-->
          </div>
          <div class="mb-6">
            <!--begin::Content-->
            <div class="d-flex align-items-center flex-grow-1">
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
                class="
                  d-flex
                  flex-wrap
                  align-items-center
                  justify-content-between
                  w-100
                "
              >
                <div class="d-flex flex-column align-items-cente py-2">
                  <div
                    class="
                      text-dark-75
                      
                      text-hover-primary
                      font-size-lg
                      mb-1
                    "
                  >
                    Blog
                  </div>
                  <span class="text-muted ">
                    Whenever a blog post is published, you will be the first to
                    know!
                  </span>
                </div>
              </label>
              <!--end::Section-->
            </div>
            <!--end::Content-->
          </div>
          <div class="mb-6">
            <!--begin::Content-->
            <div class="d-flex align-items-center flex-grow-1">
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
                class="
                  d-flex
                  flex-wrap
                  align-items-center
                  justify-content-between
                  w-100
                "
              >
                <div class="d-flex flex-column align-items-cente py-2">
                  <div
                    class="
                      text-dark-75
                      
                      text-hover-primary
                      font-size-lg
                      mb-1
                    "
                  >
                    Events and Meetups
                  </div>
                  <span class="text-muted ">
                    Be informed about RunCloud events and meetups
                  </span>
                </div>
              </label>
              <!--end::Section-->
            </div>
            <!--end::Content-->
          </div>
          <div class="form-group row">
            <div class="col-lg-12 col-xl-12">
              <div class="input-group input-group-lg input-group-solid">
                <button
                  type="reset"
                  class="btn btn-success mr-2 w-100"
                  @click="save()"
                  ref="kt_save_changes"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--end::Body-->
      </form>
      <!--end::Form-->
    </div>
    <div class="form-group"></div>
    <v-card>
      <div class="card-body">
        <v-card-title>
          <h1>Channels</h1>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search..."
            outlined
            dense
            hide-details
            class="mr-2"
          ></v-text-field>
          <router-link
            to="/settings/notification/add"
            v-slot="{ href, navigate }"
          >
            <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
              <button type="button" class="btn btn-success" ref="add">
                Add
              </button>
            </a>
          </router-link>
        </v-card-title>
        <div>
          <span class="text--lighten-1 font-size-sm mt-8">
            Here you can add notifications to notify you on certain events. You
            can add <b>Slack, Telegram and Email </b>for the notification
            channel. You then can hook the registered notifications to your
            <b> Servers, Atomic Deployment </b> and
            <b> Payment History (soon)</b>.
          </span>
        </div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </div>
    </v-card>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";

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
