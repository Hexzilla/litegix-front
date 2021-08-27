<template>
  <v-app>
    <div
      class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
      id="kt_settings_aside"
      ref="kt_settings_aside"
    >
      <v-card>
        <div class="card-body pt-14">
          <div v-if="n_path == 'settings'">
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
              <a
                href="#"
                class="btn btn-icon btn-circle btn-light-facebook mr-2"
              >
                <i class="socicon-facebook"></i>
              </a>
              <a
                href="#"
                class="btn btn-icon btn-circle btn-light-twitter mr-2"
              >
                <i class="socicon-twitter"></i>
              </a>
              <a href="#" class="btn btn-icon btn-circle btn-light-google">
                <i class="socicon-google"></i>
              </a>
            </div>

            <KTSettingsSubMenu></KTSettingsSubMenu>
          </div>
          <div v-if="n_path == 'server'">
            <KTServerSubMenu :serverId="serverId"></KTServerSubMenu>
          </div>
        </div>
      </v-card>
    </div>
    <!-- end:: Aside -->
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import KTLayoutAside from "@/assets/js/layout/base/subaside.js";
import KTSettingsSubMenu from "@/view/layout/aside/SettingsMenu.vue";
import KTServerSubMenu from "@/view/layout/aside/ServerMenu.vue";

export default {
  name: "KTSubAside",
  props: ["n_path", "serverId"],
  data() {
    return {
      insideTm: 0,
      outsideTm: 0
    };
  },
  components: {
    KTServerSubMenu,
    KTSettingsSubMenu
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$nextTick(() => {
      const asideRef = this.$refs["kt_settings_aside"];

      // Init Aside
      KTLayoutAside.init(asideRef);

      asideRef.querySelectorAll(".navi-link").forEach(item => {
        item.addEventListener("click", () => {
          KTLayoutAside.getOffcanvas().hide();
        });
      });

      // Init Aside Menu
      // KTLayoutAsideMenu.init(this.$refs["kt_aside_menu"]);
    });
  },
  computed: {
    ...mapGetters(["currentUserPhoto"])
  }
};
</script>
