<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            Server Health
          </h3>
          <span class="text-muted font-weight-bold font-size-sm mt-1">
            Update your server health
          </span>
        </div>
        <div class="card-toolbar">
          <button
            type="reset"
            class="btn btn-success mr-2"
            @click="save()"
            ref="kt_save_changes"
          >
            Disk Cleanup
          </button>
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body">
        <div class="" v-html="html"></div>
      </div>
      <!--end::Body-->
    </div>
    <div class="row">
      <div class="col-md-4">
        <Usage></Usage>
      </div>
      <div class="col-md-4">
        <Usage></Usage>
      </div>
      <div class="col-md-4">
        <Usage></Usage>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import Usage from "@/view/pages/server/Usage";

export default {
  name: "ServerHealth",
  components: {
    Usage
  },
  data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null,
      html: `
        Your server health data is collected every <strong>15 minutes</strong>. 
        If your server load is more than <strong>5</strong>, or the RAM usage is more than <strong>99%</strong>, 
        or the disk usage is more than <strong>90%</strong>, we will send you an email, 
        Slack and/or Telegram notification for your reference to take the required actions. 
        We will keep sending an email and notification 
        if the issue was not resolved within an hour after the last notification.
      `
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
    },
    cancel() {
      this.$refs.name.value = this.currentUserPersonalInfo.name;
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      this.$refs.company_site.value = this.currentUserPersonalInfo.company_site;
      this.current_photo = this.currentUserPersonalInfo.photo;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    }
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    }
  }
};
</script>
