<template>
  <v-app>
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
                :to="`/servers/` + serverId + item.link"
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
  </v-app>
</template>
<script>
import MenuItems from "./ServerMenu.js";

export default {
  name: "KTServerMenu",
  props: ["serverId"],
  data() {
    return {
      menuItems: MenuItems
    };
  }
};
</script>
