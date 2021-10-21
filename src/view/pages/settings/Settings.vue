<template>
  <div class="d-flex flex-row">
    <KTAsideMobile :menuItems="menuItems"></KTAsideMobile>
    <KTSettingsMenu></KTSettingsMenu>

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
import KTSettingsMenu from "@/view/layout/header/SettingsMenu.vue";

export default {
  components: {
    KTAsideMobile,
    KTSettingsMenu
  },
  data() {
    return {
      menuItems: [
        {
          title: "Profile",
          link: "/settings/profile",
          icon: "/media/svg/icons/General/User.svg",
          class: "border-radius-top-left"
        },
        {
          title: "Account",
          link: "/settings/account",
          icon: "/media/svg/icons/Communication/Incoming-call.svg",
          class: "border-radius-top-right"
        },
        {
          title: "Notifications",
          link: "/settings/notification",
          icon: "/media/svg/icons/Communication/Mail-notification.svg"
        },
        {
          title: "API Key",
          link: "/settings/apiKey",
          icon: "/media/svg/icons/Communication/Reply-all.svg"
        },
        {
          title: "Activity Log",
          link: "/settings/activitylog",
          icon: "/media/svg/icons/Communication/Mail-opened.svg"
        },
        {
          title: "IP Whitelisting",
          link: "/settings/ip_whitelisting",
          icon: "/media/svg/icons/Communication/Safe-chat.svg"
        },
        {
          title: "Subscription",
          link: "/settings/subscription",
          icon: "/media/svg/icons/Communication/Sending.svg"
        },
        {
          title: "Payment",
          link: "/settings/paymentmethod",
          icon: "/media/svg/icons/Communication/Thumbtack.svg"
        },
        {
          title: "SSH Key Vault",
          link: "/settings/ssh_key_vault",
          icon: "/media/svg/icons/Communication/Mail-at.svg",
          class: "border-radius-bottom-left"
        },
        {
          title: "WordPress",
          link: "/settings/wordpress_canvas",
          icon: "/media/svg/icons/Communication/Share.svg",
          class: "border-radius-bottom-right"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Settings" }]);
  }
};
</script>
