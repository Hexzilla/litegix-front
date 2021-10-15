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
import { GET_NOTIFICATIONS } from "@/core/services/store/account.module";
import Newsletter from "./Newsletter.vue";
import Channels from "./Channels.vue";

export default {
  name: "KTNotification",
  components: {
    Newsletter,
    Channels
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" }
    ]);
    this.$store.dispatch(GET_NOTIFICATIONS);
  }
};
</script>
