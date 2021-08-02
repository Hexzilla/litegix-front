<template>
  <div class="topbar-item">
    <!-- <div
      class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
      id="kt_quick_user_toggle"
    >
      <span
        class="text-muted  font-size-base d-none d-md-inline mr-1"
      >
        Hi,
      </span>
      <span
        class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
      >
        {{ currentUserPersonalInfo.name }}
      </span>
      <span class="symbol symbol-35 symbol-light-success">
        <img v-if="false" alt="Pic" :src="currentUserPersonalInfo.photo" />
        <span v-if="true" class="symbol-label font-size-h5 ">
          {{ currentUserPersonalInfo.name.charAt(0).toUpperCase() }}
        </span>
      </span>
    </div> -->

    <!-- <div
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    > -->
      <!--begin::Header-->
      <!-- <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      >
        <h3 class=" m-0">
          User Profile
          <small class="text-muted font-size-sm ml-2">12 messages</small>
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div> -->
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative;"
      >
        <!--begin::Header-->
        <div class="d-flex align-items-center mt-5">
          <div class="symbol symbol-100 mr-5">
            <img
              class="symbol-label"
              :src="currentUserPersonalInfo.photo"
              alt=""
            />
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <router-link
              to="/custom-pages/profile"
              class=" font-size-h5 text-dark-75 text-hover-primary"
            >
              {{ getFullName }}
            </router-link>
            <div class="text-muted mt-1">Application Developer</div>
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="/media/svg/icons/Communication/Mail-notification.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span class="navi-text text-muted text-hover-primary">
                    {{ currentUserPersonalInfo.email }}
                  </span>
                </span>
              </a>
            </div>
            <button class="btn btn-light-primary btn-bold" @click="onLogout">
              Sign out
            </button>
          </div>
        </div>
        <!--end::Header-->
        <div class="separator separator-dashed mt-8 mb-5"></div>
        <!--begin::Nav-->
        <div class="navi navi-spacer-x-0 p-0">
          <!--begin::Item-->
          <router-link
            to="/settings/profile"
            @click.native="closeOffcanvas"
            href="#"
            class="navi-item"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-success">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="/media/svg/icons/General/Notification2.svg"
                    />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <!-- <router-link to="/custom-pages/profile"> -->
                  <div class="">My Profile</div>
                <!-- </router-link> -->
                <div class="text-muted">
                  Account settings and more
                  <!-- <span
                    class="label label-light-danger label-inline "
                  >
                    update
                  </span> -->
                </div>
              </div>
            </div>
          </router-link>
          <!--end:Item-->
        </div>
        <!--end::Nav-->
      </perfect-scrollbar>
      <!--end::Content-->
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.topbar-item {
  justify-content: center;
}
</style>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";

export default {
  name: "KTQuickUser",
  data() {
    return {
      list: [
        {
          title: "Another purpose persuade",
          desc: "Due in 2 Days",
          alt: "+28%",
          svg: "media/svg/icons/Home/Library.svg",
          type: "warning"
        },
        {
          title: "Would be to people",
          desc: "Due in 2 Days",
          alt: "+50%",
          svg: "media/svg/icons/Communication/Write.svg",
          type: "success"
        },
        {
          title: "Purpose would be to persuade",
          desc: "Due in 2 Days",
          alt: "-27%",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          type: "danger"
        },
        {
          title: "The best product",
          desc: "Due in 2 Days",
          alt: "+8%",
          svg: "media/svg/icons/General/Attachment2.svg",
          type: "info"
        }
      ]
    };
  },
  mounted() {
    // Init Quick User Panel
    console.log(this.$refs);
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
    //console.log(KTLayoutQuickUser.getElement());
  },
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    closeOffcanvas() {
      var el = KTLayoutQuickUser.getElement();
      if(el!=undefined)
      {
        try{
          console.log(el);
          //el.removeClass('show');
          el.style="";
          var canv = new KTOffcanvas(el);
          canv.show();
          canv.hide();
          //console.log(canv);
        }
        catch(eee)
        {
          console.log(eee);
        }
      }
      else
      {
        console.log('KTLayoutQuickUser could not found')
      }
    }
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo"]),

    getFullName() {
      return (
        this.currentUserPersonalInfo.name +
        " " +
        this.currentUserPersonalInfo.surname
      );
    }
  }
};
</script>
