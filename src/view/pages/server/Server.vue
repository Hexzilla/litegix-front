<template>
  <v-app>
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
              <router-link
                to="/server/summary"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    style="cursor: pointer"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg src="/media/svg/icons/Design/Layers.svg" />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Summary</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/health"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg src="/media/svg/icons/Code/Compiling.svg" />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Server Health</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/application"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Shield-user.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Web Application</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/database"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/RSS.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Database</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/user"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Incoming-call.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">System User</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/sshkey"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Thumbtack.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">SSH Key</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/deployment"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Reply-all.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Deployment Key</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/phpcli"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Reply-all.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">PHP CLI</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/cronjob"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Safe-chat.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Cron Job</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/supervisor"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Sending.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Supervisor</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/notification"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    style="cursor: pointer"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg src="/media/svg/icons/General/User.svg" />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Notifications</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/services"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Mail-at.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Services</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/security"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Group.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Security</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/settings"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Share.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Settings</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/activitylog"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Mail-opened.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Activity Log</span>
                  </a>
                </div>
              </router-link>

              <router-link
                to="/server/delete"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <div class="navi-item mb-2">
                  <a
                    class="navi-link py-4"
                    style="cursor: pointer"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="navigate"
                    aria-selected="false"
                  >
                    <span class="navi-icon mr-2">
                      <span class="svg-icon">
                        <inline-svg
                          src="/media/svg/icons/Communication/Delete-user.svg"
                        />
                      </span>
                    </span>
                    <span class="navi-text font-size-lg">Delete Server</span>
                  </a>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!--begin::Content-->
      <div class="flex-row-fluid ml-lg-8">
        <transition name="fade-in-up">
          <router-view></router-view>
        </transition>
      </div>
      <!--end::Content-->
    </div>
  </v-app>
</template>

<style scoped src="@/assets/styles/app.css"></style>
<style scoped src="@/assets/styles/server.css"></style>

<style lang="scss">
@import "~vuetify/dist/vuetify.css";

.theme--light.v-application {
  background: transparent !important;
}
</style>
