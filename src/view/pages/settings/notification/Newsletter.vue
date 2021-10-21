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
          type="button"
          class="btn btn-primary mr-2"
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
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-12">
            <b-form-group label="">
              <b-form-checkbox
                size="lg"
                ref="notification"
                :checked="newsletters.subscription"
              >
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
              </b-form-checkbox>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <b-form-group label="">
              <b-form-checkbox
                size="lg"
                ref="notification"
                :checked="newsletters.announchment"
                :disabled="!newsletters.subscription"
              >
                <label
                  for="subscribe"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <div class="font-size-lg mb-1">
                      Updates and Announcements
                    </div>
                    <span class="text-muted">
                      Stay up to date with the latest announcements and
                      promotions from Litegix
                    </span>
                  </div>
                </label>
              </b-form-checkbox>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <b-form-group label="">
              <b-form-checkbox
                size="lg"
                ref="notification"
                :checked="newsletters.blog"
                :disabled="!newsletters.subscription"
              >
                <label
                  for="subscribe"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <div class="font-size-lg mb-1">
                      Blog
                    </div>
                    <span class="text-muted">
                      Whenever a blog post is published, you will be the first
                      to know!
                    </span>
                  </div>
                </label>
              </b-form-checkbox>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <b-form-group label="">
              <b-form-checkbox
                size="lg"
                ref="notification"
                :checked="newsletters.events"
                :disabled="!newsletters.subscription"
              >
                <label
                  for="subscribe"
                  class="d-flex flex-wrap justify-content-between w-100"
                >
                  <div class="d-flex flex-column py-2">
                    <div class="font-size-lg mb-1">
                      Events and Meetups
                    </div>
                    <span class="text-muted">
                      Be informed about Litegix events and meetups
                    </span>
                  </div>
                </label>
              </b-form-checkbox>
            </b-form-group>
          </div>
        </div>
      </form>
    </div>
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
        icon: icon
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
