<template>
  <v-app>
    <div
      class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
      id="kt_settings_aside"
      ref="kt_settings_aside"
    >
      <v-card>
        <div class="card-body pt-14">
          <div
            class="navi navi-bold navi-hover navi-active row p-5"
            role="tablist"
          >
            <template v-for="(item, i) in menuItems">
              <router-link
                v-bind:key="i"
                :to="`/servers/` + serverId + item.link"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div
                  class="navi-item col-sm-6 border h-md-100px"
                  :class="item.class"
                >
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
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
export default {
  name: "ServerMenu",
  props: ["serverId"],
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
          link: "/server/user",
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
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/pages/aside.scss";
</style>
