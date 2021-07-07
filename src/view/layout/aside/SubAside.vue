<template>
  <!-- begin:: Aside -->

  <div
    class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
    id="kt_settings_aside"
    ref="kt_settings_aside"
  >
    <div class="card card-custom card-stretch">
      <div class="card-body pt-4">
        <KTSettingsSubMenu v-if="n_path == 'settings'"></KTSettingsSubMenu>
        <KTServerSubMenu v-if="n_path == 'server'"></KTServerSubMenu>
      </div>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import KTLayoutAside from "@/assets/js/layout/base/subaside.js";
import KTSettingsSubMenu from "@/view/layout/aside/SettingsMenu.vue";
import KTServerSubMenu from "@/view/layout/aside/ServerMenu.vue";

export default {
  name: "KTSubAside",
  props: ["n_path"],
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
  }
};
</script>
