<template>
  <div></div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      tab: null,
      items: ["Active", "Inactive", "canceled"],
      text: "Looks like you don't have anything here."
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Subscription" }
    ]);
  }
};
</script>
