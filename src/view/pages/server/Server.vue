<template>
  <div class="d-flex flex-row">
    <KTAsideMobile :menuItems="menuItems"></KTAsideMobile>
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

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTAsideMobile from "@/view/layout/aside/AsideMobile.vue";
import KTServerMenu from "@/view/layout/header/ServerMenu.vue";
import MenuItems from "@/view/layout/header/ServerMenu.js";

export default {
  props: ["serverId"],
  components: {
    KTAsideMobile,
    KTServerMenu
  },
  data() {
    return {
      menuItems: MenuItems
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Server" }]);
  }
};
</script>
