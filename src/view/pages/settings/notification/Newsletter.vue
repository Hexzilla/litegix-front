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
        <button
          type="reset"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          Save Changes
        </button>
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
                  checkbox checkbox-lg checkbox-single
                  flex-shrink-0
                  mr-4
                  v-treeview
                "
              >
                <input
                  id="subscribe"
                  type="checkbox"
                  value="true"
                  v-model="newsletters.subscription"
                />
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
                  checkbox checkbox-single
                  flex-shrink-0
                  mr-4
                  v-treeview
                "
              >
                <input
                  id="update_account"
                  type="checkbox"
                  value="true"
                  v-model="newsletters.announchment"
                  :disabled="!newsletters.subscription"
                />
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
                  checkbox checkbox-single
                  flex-shrink-0
                  mr-4
                "
              >
                <input
                  id="chk_blog"
                  type="checkbox"
                  value="true"
                  v-model="newsletters.blog"
                  :disabled="!newsletters.subscription"
                />
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
                  checkbox checkbox-single
                  flex-shrink-0
                  mr-4
                "
              >
                <input
                  id="chk_Events"
                  type="checkbox"
                  value="true"
                  v-model="newsletters.events"
                  :disabled="!newsletters.subscription"
                />
                <span></span>
              </label>
              <label
                for="chk_Events"
                class="d-flex flex-wrap justify-content-between w-100"
              >
                <div class="d-flex flex-column py-2">
                  <div class="font-size-lg mb-1">Events and Meetups</div>
                  <span class="text-muted">
                    Be informed about Litegix events and meetups
                  </span>
                </div>
              </label>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import { UPDATE_NEWSLETTERS } from "@/core/services/store/account.module";

export default {
  name: "Newsletter",
  data() {
    return {
      defaultRule: {
        validators: {
          notEmpty: {
            message: "This field is required"
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters(["newsletters"])
  },
  methods: {
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        variant: variant,
        solid: true
      });
    },
    showMessageBox(icon, text) {
      Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary"
      });
    },
    save() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // send update request
      this.$store
        .dispatch(UPDATE_NEWSLETTERS, this.newsletters)
        .then(() => {
          this.showMessageBox("info", "Succesfully saved");
        })
        .catch(() => {
          this.showMessageBox("error", "Failed to save changes!");
        })
        .finally(() => {
          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        });
    }
  }
};
</script>
