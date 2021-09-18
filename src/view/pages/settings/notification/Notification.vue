<template>
  <div>
    <div>
      <Newsletter></Newsletter>
    </div>
    <div class="mt-8">
      <Channels></Channels>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { FETCH_NOTIFICATION_NEWSLETTERS } from "@/core/services/store/account.module";
import Newsletter from "./Newsletter.vue";
import Channels from "./Channels.vue";

export default {
  name: "KTNotification",
  components: {
    Newsletter,
    Channels
  },
  created() {
    this.$store.dispatch(FETCH_NOTIFICATION_NEWSLETTERS);
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" }
    ]);
  }
};
</script>
