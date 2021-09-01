<template>
  <div class="d-flex flex-row">
    <KTServerMenu :serverId="serverId"></KTServerMenu>

    <!--begin::Content-->
    <div class="flex-row-fluid ml-lg-8">
      <transition name="fade-in-up">
        <router-view></router-view>
      </transition>
    </div>
    <!--end::Content-->
  </div>
</template>

<style lang="scss">
@import "~vuetify/dist/vuetify.css";

.theme--light.v-application {
  background: transparent !important;
}
</style>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTServerMenu from "@/view/layout/aside/ServerMenu.vue";

export default {
  props: ["serverId"],
  components: {
    KTServerMenu
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Server" }]);
  }
};
</script>
