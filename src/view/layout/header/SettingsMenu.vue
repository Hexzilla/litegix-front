<template>
  <div
    class="submenu flex-row-auto offcanvas-mobile w-300px w-xl-350px"
    id="kt_settings_aside"
    ref="kt_settings_aside"
  >
    <div class="card">
      <div class="card-body pt-14">
        <!--Avatar-->
        <div class="text-center mb-10">
          <div class="symbol symbol-60 symbol-circle symbol-xl-90">
            <div
              class="symbol-label"
              :style="{
                backgroundImage: `url(${currentUserPhoto})`
              }"
            ></div>
            <i class="symbol-badge symbol-badge-bottom bg-success"></i>
          </div>

          <h4 class="font-weight-bold my-2">James Jones</h4>
          <div class="text-muted mb-2">Application Developer</div>
          <span
            class="
                label label-light-warning label-inline
                font-weight-bold
                label-lg
              "
            >Active</span
          >
        </div>

        <div class="mb-10 text-center">
          <a href="#" class="btn btn-icon btn-circle btn-light-facebook mr-2">
            <i class="socicon-facebook"></i>
          </a>
          <a href="#" class="btn btn-icon btn-circle btn-light-twitter mr-2">
            <i class="socicon-twitter"></i>
          </a>
          <a href="#" class="btn btn-icon btn-circle btn-light-google">
            <i class="socicon-google"></i>
          </a>
        </div>

        <!--Menu Items-->
        <div
          class="navi navi-bold navi-hover navi-active row p-5 list-rounded d-flex"
          role="tablist"
        >
          <template v-for="(item, i) in menuItems">
            <router-link
              v-bind:key="i"
              :to="item.link"
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
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "KTSettingsMenu",
  data() {
    return {
      menuItems: [
        {
          title: "Profile",
          link: "/settings/profile",
          icon: "/media/svg/icons/General/User.svg",
          class: "round-top-left"
        },
        {
          title: "Account",
          link: "/settings/account",
          icon: "/media/svg/icons/Communication/Incoming-call.svg",
          class: "round-top-right"
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
          icon: "/media/svg/icons/Communication/Sending.svg",
          class: "round-bottom-left"
        },
        {
          title: "Payment",
          link: "/settings/paymentmethod",
          icon: "/media/svg/icons/Communication/Thumbtack.svg",
          class: "round-bottom-right"
        }
        // {
        //   title: "SSH Key Vault",
        //   link: "/settings/ssh_key_vault",
        //   icon: "/media/svg/icons/Communication/Mail-at.svg",
        //   class: "round-bottom-left"
        // },
        // {
        //   title: "WordPress",
        //   link: "/settings/wordpress_canvas",
        //   icon: "/media/svg/icons/Communication/Share.svg",
        //   class: "round-bottom-right"
        // }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUserPhoto"])
  }
};
</script>
