<template>
  <div
    class="navi navi-bold navi-hover navi-active navi-link-rounded row"
    role="tablist"
  >
    <div class="text-muted col-12 mb-3">My Account</div>
    <router-link
      to="/settings/profile"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg rounded-lg h-md-70px">
        <a
          class="navi-link py-4 h-100"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          style="cursor: pointer"
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
    </router-link>

    <router-link
      to="/settings/notification"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          :class="[isActive && 'active', isExactActive && 'active']"
          style="cursor: pointer"
          :href="href"
          @click="navigate"
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
    </router-link>

    <router-link
      to="/settings/server_transfer"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
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
    </router-link>

    <router-link
      to="/settings/referal"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Shield-user.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">Referral</span>
        </a>
      </div>
    </router-link>

    <router-link
      to="/settings/activitylog"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Mail-opened.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">Activity Log</span>
        </a>
      </div>
    </router-link>

    <router-link
      to="/settings/delete_account"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Delete-user.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">Delete Account</span>
        </a>
      </div>
    </router-link>

    <div class="text-muted col-12 mb-3">API & Security</div>

    <router-link
      to="/settings/authentication"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
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
    </router-link>

    <router-link
      to="/settings/api_key"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Reply-all.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">API Key</span>
        </a>
      </div>
    </router-link>

    <router-link
      to="/settings/third_party_api_key"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
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
    </router-link>

    <router-link
      to="/settings/ip_whitelisting"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Safe-chat.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">IP Whitelisting</span>
        </a>
      </div>
    </router-link>

    <div class="text-muted col-12 mb-3">Billing</div>

    <router-link
      to="/settings/subscription"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px ">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Sending.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">Subscription</span>
        </a>
      </div>
    </router-link>

    <router-link
      to="/settings/payment_method"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Mail-at.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">Payment Method</span>
        </a>
      </div>
    </router-link>

    <router-link
      to="/settings/payment_history"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
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
    </router-link>

    <div class="text-muted  col-12 mb-3">Tools</div>

    <router-link
      to="/settings/ssh_key_vault"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
          aria-selected="false"
        >
          <span class="navi-icon mr-2">
            <span class="svg-icon">
              <inline-svg src="media/svg/icons/Communication/Thumbtack.svg" />
            </span>
          </span>
          <span class="navi-text font-size-lg">SSH Key Vault</span>
        </a>
      </div>
    </router-link>

    <router-link
      to="/settings/wordpress_canvas"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <div class="navi-item col-sm-6 border rounded-lg h-70px">
        <a
          class="navi-link py-4 h-100"
          style="cursor: pointer"
          :class="[isActive && 'active', isExactActive && 'active']"
          :href="href"
          @click="navigate"
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
    </router-link>
    <!-- last navi-item for no bottom-border -->
    <div class="navi-item"></div>
  </div>
</template>
