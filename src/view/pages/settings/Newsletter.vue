<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">Newsletter</h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Subscribe or unsubscribe to our newsletter</span
        >
      </div>
      <div class="card-toolbar">
        <v-btn color="primary" @click="save()" ref="kt_save_changes">
          Save Changes
        </v-btn>
        <!-- <button type="reset" class="btn btn-secondary" @click="cancel()">
        Cancel
      </button> -->
      </div>
    </div>
    <v-card class="card-body">
      <v-form>
        <v-row>
          <v-col md="6" sm="12" class="ml-4">
            <div class="d-flex flex-grow-1">
              <label
                class="
                  checkbox checkbox-lg checkbox-lg checkbox-single
                  flex-shrink-0
                  mr-4
                  v-treeview
                "
              >
                <input id="subscribe" type="checkbox" value="1" />
                <span></span>
              </label>
              <label
                for="subscribe"
                class="d-flex flex-wrap justify-content-between w-100"
              >
                <div class="d-flex flex-column py-2">
                  <div class="font-size-lg mb-1">Newsletter Subscription</div>
                  <span class="text-muted">
                    Subscribe or unsubscribe to our newsletter
                  </span>
                </div>
              </label>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" sm="12" class="ml-4">
            <div class="d-flex flex-grow-1">
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
              <label
                for="update_account"
                class="d-flex flex-wrap justify-content-between w-100"
              >
                <div class="d-flex flex-column py-2">
                  <div class="font-size-lg mb-1">Updates and Announcements</div>
                  <span class="text-muted">
                    Stay up to date with the latest announcements and promotions
                    from RunCloud
                  </span>
                </div>
              </label>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" sm="12" class="ml-4">
            <div class="d-flex flex-grow-1">
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
              <label
                for="chk_blog"
                class="d-flex flex-wrap justify-content-between w-100"
              >
                <div class="d-flex flex-column py-2">
                  <div class="font-size-lg mb-1">Blog</div>
                  <span class="text-muted">
                    Whenever a blog post is published, you will be the first to
                    know!
                  </span>
                </div>
              </label>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" sm="12" class="ml-4">
            <div class="d-flex flex-grow-1">
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
              <label
                for="chk_Events"
                class="d-flex flex-wrap justify-content-between w-100"
              >
                <div class="d-flex flex-column py-2">
                  <div class="font-size-lg mb-1">Events and Meetups</div>
                  <span class="text-muted">
                    Be informed about RunCloud events and meetups
                  </span>
                </div>
              </label>
            </div>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col md="6" sm="12" offset-sm="0" class="ml-5">
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
        </v-row> -->
      </v-form>
    </v-card>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "Newsletter",
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
          photo,
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
