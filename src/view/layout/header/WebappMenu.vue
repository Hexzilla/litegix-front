<template>
  <div
    class="submenu flex-row-auto offcanvas-mobile w-300px w-xl-350px"
    id="kt_settings_aside"
    ref="kt_settings_aside"
  >
    <v-card>
      <div class="card-body pt-14">
        <div
          class="navi navi-bold navi-hover navi-active row p-5 list-rounded d-flex"
          role="tablist"
        >
          <template v-for="(item, i) in menuItems">
            <router-link
              v-bind:key="i"
              :to="`/servers/${serverId}/webapps/${webappId}${item.link}`"
              v-slot="{ href, navigate, isActive, isExactActive }"
            >
              <div
                class="navi-item col-sm-6 border h-md-100px"
                :class="item.class"
              >
                <a
                  class="navi-link navi-rect h-100"
                  :class="[
                    isActive && 'active',
                    isExactActive && 'active',
                    item.class
                  ]"
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
</template>
<script>
export default {
  name: "KTWebappMenu",
  props: ["serverId", "webappId"],
  data() {
    return {
      menuItems: [
        {
          title: "Summary",
          link: "/summary",
          icon: "/media/svg/icons/General/User.svg",
          class: "round-top-left"
        },
        {
          title: "Deploy",
          link: "/deploy",
          icon: "/media/svg/icons/Communication/Incoming-call.svg",
          class: "round-top-right"
        },
        {
          title: "Domain",
          link: "/domain",
          icon: "/media/svg/icons/Communication/Mail-notification.svg"
        },
        {
          title: "SSL/TLS",
          link: "/ssl",
          icon: "/media/svg/icons/Communication/Reply-all.svg"
        },
        {
          title: "File Manager",
          link: "/filemanager",
          icon: "/media/svg/icons/Communication/Mail-opened.svg"
        },
        {
          title: "Firewall",
          link: "/firewall",
          icon: "/media/svg/icons/Communication/Safe-chat.svg"
        },
        {
          title: "Activity Log",
          link: "/activitylog",
          icon: "/media/svg/icons/Communication/Sending.svg",
          class: "round-bottom-left"
        },
        {
          title: "Web Log",
          link: "/weblog",
          icon: "/media/svg/icons/Communication/Thumbtack.svg",
          class: "round-bottom-right"
        }
      ]
    };
  }
};
</script>
