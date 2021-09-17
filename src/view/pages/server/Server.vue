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

<style lang="scss">
@import "~vuetify/dist/vuetify.css";

.theme--light.v-application {
  background: transparent !important;
}
</style>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTAsideMobile from "@/view/layout/aside/AsideMobile.vue";
import KTServerMenu from "@/view/layout/header/ServerMenu.vue";

export default {
  props: ["serverId"],
  components: {
    KTAsideMobile,
    KTServerMenu
  },
  data() {
    return {
      menuItems: [
        {
          title: "Summary",
          link: "/server/summary",
          icon: "media/svg/icons/Design/Layers.svg",
          class: "border-radius-top-left"
        },
        {
          title: "Server Health",
          link: "/server/health",
          icon: "media/svg/icons/Code/Compiling.svg",
          class: "border-radius-top-right"
        },
        {
          title: "Web Application",
          link: "/server/application",
          icon: "media/svg/icons/Communication/Mail-notification.svg"
        },
        {
          title: "Database",
          link: "/server/database",
          icon: "media/svg/icons/Communication/Reply-all.svg"
        },
        {
          title: "System User",
          link: "/server/systemuser",
          icon: "media/svg/icons/Communication/Mail-opened.svg"
        },
        {
          title: "SSH Key",
          link: "/server/sshkey",
          icon: "media/svg/icons/Communication/Safe-chat.svg"
        },
        {
          title: "Deployment Key",
          link: "/server/deployment",
          icon: "media/svg/icons/Communication/Sending.svg"
        },
        {
          title: "PHP CLI",
          link: "/server/phpcli",
          icon: "media/svg/icons/Communication/Thumbtack.svg"
        },
        {
          title: "Notifications",
          link: "/server/notification",
          icon: "media/svg/icons/Communication/Sending.svg"
        },
        {
          title: "Services",
          link: "/server/services",
          icon: "media/svg/icons/Communication/Thumbtack.svg"
        },
        {
          title: "Cron Job",
          link: "/server/cronjob",
          icon: "media/svg/icons/Communication/Sending.svg"
        },
        {
          title: "Supervisor",
          link: "/server/supervisor",
          icon: "media/svg/icons/Communication/Thumbtack.svg"
        },
        {
          title: "Activity Log",
          link: "/server/activitylog",
          icon: "media/svg/icons/Communication/Mail-at.svg",
          class: "border-radius-bottom-left"
        },
        {
          title: "Settings",
          link: "/server/settings",
          icon: "media/svg/icons/Communication/Share.svg",
          class: "border-radius-bottom-right"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Server" }]);
  }
};
</script>
