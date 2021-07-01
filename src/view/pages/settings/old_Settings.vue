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
            <span class="text-muted">My Account</span>
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
                <span class="navi-text font-size-lg">Profile</span>
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
                <span class="navi-text font-size-lg">Notifications</span>
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
                <span class="navi-text font-size-lg">Server Transfer</span>
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
                <span class="navi-text font-size-lg">Referral</span>
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
                <span class="navi-text font-size-lg">Activity Log</span>
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
                      src="media/svg/icons/Communication/Delete-user.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Delete Account</span>
              </a>
            </div>
            <span class="text-muted">API & Security</span>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="6"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Incoming-call.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Authentication</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="7"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Reply-all.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">API Key</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="8"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Communication/RSS.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">3rd Party API Key</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="9"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Safe-chat.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">IP Whitelisting</span>
              </a>
            </div>
            <span class="text-muted">Billing</span>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="10"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Sending.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Subscription</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="11"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Mail-at.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Payment Method</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="12"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Communication/Group.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Payment History</span>
              </a>
            </div>
            <span class="text-muted">Tools</span>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="13"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Thumbtack.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">SSH Key Vault</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="14"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Communication/Share.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">WordPress Canvas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--begin::Content-->
    <div class="flex-row-fluid ml-lg-8">
      <b-tabs class="hide-tabs" v-model="tabIndex">
        <b-tab active>
          <Account></Account>
        </b-tab>

        <b-tab>
          <KTNotification></KTNotification>
        </b-tab>

        <b-tab>
          <KTServerTrans></KTServerTrans>
        </b-tab>

        <b-tab>
          <KTReferal></KTReferal>
        </b-tab>

        <b-tab>
          <KTActivityLog></KTActivityLog>
        </b-tab>

        <b-tab>
          <KTDeleteAccount></KTDeleteAccount>
        </b-tab>
        <b-tab>
          <KTAuthentication></KTAuthentication>
        </b-tab>
        <b-tab>
          <KTWordpressCanvas></KTWordpressCanvas>
        </b-tab>
        <b-tab>
          <KTWordpressCanvas></KTWordpressCanvas>
        </b-tab>
        <b-tab>
          <KTWordpressCanvas></KTWordpressCanvas>
        </b-tab>
        <b-tab>
          <KTWordpressCanvas></KTWordpressCanvas>
        </b-tab>
        <b-tab>
          <KTPaymentMethod></KTPaymentMethod>
        </b-tab>
        <b-tab>
          <KTPaymentHistory></KTPaymentHistory>
        </b-tab>
        <b-tab>
          <KTSSHKeyVault></KTSSHKeyVault>
        </b-tab>
        <b-tab>
          <KTWordpressCanvas></KTWordpressCanvas>
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
import KTNotification from "./Notification";
import KTServerTrans from "./ServerTrans";
import KTReferal from "./Referal";
import KTActivityLog from "./ActivityLog";
import Account from "./Account";
import KTDeleteAccount from "./DeleteAccount";
import KTAuthentication from "./Authentication";
import KTPaymentMethod from "./PaymentMethod";
import KTPaymentHistory from "./PaymentHistory";
import KTSSHKeyVault from "./AddSSHKey";
// import KTSSHKeyVault from "./SSHKeyVault";
// import KTWordpressCanvas from "./WordpressCanvas";
import KTWordpressCanvas from "./CreateCanvas";
export default {
  name: "Profile",
  components: {
    KTDropdown2,
    KTNotification,
    KTServerTrans,
    KTReferal,
    KTActivityLog,
    Account,
    KTDeleteAccount,
    KTAuthentication,
    KTSSHKeyVault,
    KTWordpressCanvas,
    KTPaymentHistory,
    KTPaymentMethod
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Settings" }]);
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
