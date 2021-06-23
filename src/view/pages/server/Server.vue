<template>
  <div class="d-flex flex-row">
    <div
      class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
      id="kt_profile_aside"
    >
      <div class="card card-custom card-stretch">
        <div class="card-body pt-4">
          <div class="d-flex justify-content-end">
            <KTDropdown2></KTDropdown2>
          </div>
          <!--begin::Nav-->
          <div
            class="navi navi-bold navi-hover navi-active navi-link-rounded"
            role="tablist"
          >
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4 active"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="0"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Design/Layers.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Summary</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="1"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/General/User.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Server Health</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="2"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Web Application</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="3"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Shield-user.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Database</span>
                <!-- <span class="navi-label">
                  <span
                    class="label label-light-danger label-rounded font-weight-bold"
                    >5</span
                  >
                </span> -->
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="4"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Mail-opened.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">System User</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="5"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Mail-opened.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">SSH Key</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Files/File.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Deployment Key</span>
                <span class="navi-label">
                  <span
                    class="label label-light-primary label-inline font-weight-bold"
                    >new</span
                  >
                </span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Text/Article.svg" />
                  </span>
                </span>
                <span class="navi-text">PHP CLI</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Cron Job</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Supervisor</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Notification</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Services</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Security</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Settings</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Activity Log</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Delete Server</span>
              </a>
            </div>
          </div>
          <!--end::Nav-->
        </div>
      </div>
    </div>

    <!--begin::Content-->
    <div class="flex-row-fluid ml-lg-8">
      <b-tabs class="hide-tabs" v-model="tabIndex">
        <b-tab active>
          <Database></Database>
        </b-tab>

        <b-tab>
          <ServerHealth></ServerHealth>
        </b-tab>

        <b-tab>
          <Database></Database>
        </b-tab>

        <b-tab>
          <Database></Database>
        </b-tab>

        <b-tab>
          <SystemUser></SystemUser>
        </b-tab>

        <b-tab>
          <SSHKey></SSHKey>
        </b-tab>

        <b-tab>
          <Database></Database>
        </b-tab>

        <b-tab>
          <Database></Database>
        </b-tab>
      </b-tabs>
    </div>
    <!--end::Content-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTDropdown2 from "@/view/content/dropdown/Dropdown2";
import ServerHealth from "@/view/pages/server/Health";
import Database from "@/view/pages/server/Database";
import SystemUser from "@/view/pages/server/SystemUser";
import SSHKey from "@/view/pages/server/SSHKey";

export default {
  name: "server-summary",
  components: {
    KTDropdown2,
    ServerHealth,
    Database,
    SystemUser,
    SSHKey
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Summary" }]);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      let target = event.target;
      if (!event.target.classList.contains("navi-link")) {
        target = event.target.closest(".navi-link");
      }

      const tab = target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".navi-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-tab"));

      // set current active tab
      target.classList.add("active");
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
