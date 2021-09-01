<template>
  <div class="navi navi-bold navi-hover navi-active row p-5" role="tablist">
    <template v-for="(item, i) in menuItems">
      <router-link
        v-bind:key="i"
        :to="item.link"
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <div class="navi-item col-sm-6 border h-md-100px" :class="item.class">
          <a
            class="navi-link navi-rect h-100"
            :class="[isActive && 'active', isExactActive && 'active']"
            :href="href"
            @click="navigate"
            style="cursor: pointer"
            aria-selected="false"
          >
            <div class="navi-content">
              <div class="navi-icon">
                <span class="svg-icon">
                  <inline-svg :src="item.icon" />
                </span>
              </div>
              <div class="navi-text font-size-lg">{{ item.title }}</div>
            </div>
          </a>
        </div>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: "SettingsMenu",
  data() {
    return {
      menuItems: [
        {
          title: "Profile",
          link: "/settings/profile",
          icon: "media/svg/icons/General/User.svg",
          class: "border-radius-top-left"
        },
        {
          title: "Account",
          link: "/settings/authentication",
          icon: "media/svg/icons/Communication/Incoming-call.svg",
          class: "border-radius-top-right"
        },
        {
          title: "Notifications",
          link: "/settings/notification",
          icon: "media/svg/icons/Communication/Mail-notification.svg"
        },
        {
          title: "API Key",
          link: "/settings/api_key",
          icon: "media/svg/icons/Communication/Reply-all.svg"
        },
        {
          title: "Activity Log",
          link: "/settings/activitylog",
          icon: "media/svg/icons/Communication/Mail-opened.svg"
        },
        {
          title: "IP Whitelisting",
          link: "/settings/ip_whitelisting",
          icon: "media/svg/icons/Communication/Safe-chat.svg"
        },
        {
          title: "Subscription",
          link: "/settings/subscription",
          icon: "media/svg/icons/Communication/Sending.svg"
        },
        {
          title: "Payment",
          link: "/settings/payment_method",
          icon: "media/svg/icons/Communication/Thumbtack.svg"
        },
        {
          title: "SSH Key Vault",
          link: "/settings/ssh_key_vault",
          icon: "media/svg/icons/Communication/Mail-at.svg",
          class: "border-radius-bottom-left"
        },
        {
          title: "WordPress",
          link: "/settings/wordpress_canvas",
          icon: "media/svg/icons/Communication/Share.svg",
          class: "border-radius-bottom-right"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/pages/aside.scss";
</style>
