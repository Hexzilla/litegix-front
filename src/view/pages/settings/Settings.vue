<template>
  <div class="d-flex flex-row">
    <KTSubAside :n_path="'settings'"></KTSubAside>

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

// @media (min-width: 1280px) {
//   .container {
//     margin: 0 40px 0 40px;
//   }
// }
</style>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTSubAside from "@/view/layout/aside/SubAside.vue";

export default {
  components: {
    KTSubAside,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Settings" }]);
  },
};
</script>
