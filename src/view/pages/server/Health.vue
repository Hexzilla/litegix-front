<template>
  <div>
    <v-card class="card-body">
      <!--begin::Header-->
      <v-card-title>
        <h3 class="card-label font-weight-bolder">
          Server Health
        </h3>
        <!-- <span class="text-muted font-weight-bold font-size-sm mt-1">
            Update your server health
          </span> -->
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          type="reset"
          ref="kt_save_changes"
          @click="showModal"
        >
          Disk Cleanup
        </v-btn>
        <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
      </v-card-title>
      <v-divider></v-divider>
      <!--end::Header-->
      <!--begin::Body-->
      <div>
        <div class="" v-html="html"></div>
      </div>
      <!--end::Body-->
    </v-card>
    <div class="mt-5">
      <Usage></Usage>
    </div>
  </div>
</template>

<script>
import Usage from "@/view/pages/server/Usage";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "ServerHealth",
  components: {
    Usage
  },
  data() {
    return {
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
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Health" }]);
  },
  methods: {
    async showModal() {
      const ok = await this.$refs.confirmDialogue.show({
        title: "Disk CleanUp",
        message:
          "Your unclaimed rewards will be reset to $0.00 after you click Request Cash Out button. Cash out request will be processed not more than 7 days. You won't receive full cash out rewards bacause PayPal will take some for processing fees.",
        okButton: "Clean"
      });
      // If you throw an error, the method will terminate here unless you surround it wil try/catch
      if (ok) {
        alert("You have successfully delete this page.");
      } else {
        // alert('You chose not to delete this page. Doing nothing now.')
      }
    }
  }
};
</script>
