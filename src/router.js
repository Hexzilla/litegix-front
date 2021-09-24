import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue")
        },
        {
          path: "/servers",
          name: "Servers",
          component: () => import("@/view/pages/servers/Servers.vue")
        },

        {
          path: "/servers/create",
          name: "server-create",
          component: () => import("@/view/pages/servers/CreateServer.vue")
        },
        {
          path: "/servers/connect",
          name: "server-connect",
          component: () => import("@/view/pages/servers/ConnectServer.vue")
        },
        {
          path: "/servers/:serverId/config",
          name: "server-config",
          component: () => import("@/view/pages/servers/ConfigServer.vue"),
          props: true
        },
        {
          path: "/vue-bootstrap",
          name: "vue-bootstrap",
          component: () =>
            import("@/view/pages/vue-bootstrap/VueBootstrap.vue"),
          children: [
            {
              path: "alert",
              name: "vue-bootstrap-alert",
              component: () => import("@/view/pages/vue-bootstrap/Alert.vue")
            },
            {
              path: "badge",
              name: "vue-bootstrap-badge",
              component: () => import("@/view/pages/vue-bootstrap/Badge.vue")
            },
            {
              path: "button",
              name: "vue-bootstrap-button",
              component: () => import("@/view/pages/vue-bootstrap/Button.vue")
            },
            {
              path: "button-group",
              name: "vue-bootstrap-button-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/ButtonGroup.vue")
            },
            {
              path: "button-toolbar",
              name: "vue-bootstrap-button-toolbar",
              component: () =>
                import("@/view/pages/vue-bootstrap/ButtonToolbar.vue")
            },
            {
              path: "card",
              name: "vue-bootstrap-card",
              component: () => import("@/view/pages/vue-bootstrap/Card.vue")
            },
            {
              path: "carousel",
              name: "vue-bootstrap-carousel",
              component: () => import("@/view/pages/vue-bootstrap/Carousel.vue")
            },
            {
              path: "collapse",
              name: "vue-bootstrap-collapse",
              component: () => import("@/view/pages/vue-bootstrap/Collapse.vue")
            },
            {
              path: "dropdown",
              name: "vue-bootstrap-dropdown",
              component: () => import("@/view/pages/vue-bootstrap/Dropdown.vue")
            },
            {
              path: "embed",
              name: "vue-bootstrap-embed",
              component: () => import("@/view/pages/vue-bootstrap/Embed.vue")
            },
            {
              path: "form",
              name: "vue-bootstrap-form",
              component: () => import("@/view/pages/vue-bootstrap/Form.vue")
            },
            {
              path: "form-checkbox",
              name: "vue-bootstrap-form-checkbox",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormCheckbox.vue")
            },
            {
              path: "form-file",
              name: "vue-bootstrap-form-file",
              component: () => import("@/view/pages/vue-bootstrap/FormFile.vue")
            },
            {
              path: "form-group",
              name: "vue-bootstrap-form-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormGroup.vue")
            },
            {
              path: "form-input",
              name: "vue-bootstrap-form-input",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormInput.vue")
            },
            {
              path: "form-radio",
              name: "vue-bootstrap-form-radio",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormRadio.vue")
            },
            {
              path: "form-select",
              name: "vue-bootstrap-form-select",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormSelect.vue")
            },
            {
              path: "form-textarea",
              name: "vue-bootstrap-form-textarea",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormTextarea.vue")
            },
            {
              path: "image",
              name: "vue-bootstrap-image",
              component: () => import("@/view/pages/vue-bootstrap/Image.vue")
            },
            {
              path: "input-group",
              name: "vue-bootstrap-input-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/InputGroup.vue")
            },
            {
              path: "jumbotron",
              name: "vue-bootstrap-jumbotron",
              component: () =>
                import("@/view/pages/vue-bootstrap/Jumbotron.vue")
            },
            {
              path: "layout-grid-system",
              name: "vue-bootstrap-layout-grid-system",
              component: () =>
                import("@/view/pages/vue-bootstrap/LayoutGridSystem.vue")
            },
            {
              path: "link",
              name: "vue-bootstrap-link",
              component: () => import("@/view/pages/vue-bootstrap/Link.vue")
            },
            {
              path: "list-group",
              name: "vue-bootstrap-list-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/ListGroup.vue")
            },
            {
              path: "media",
              name: "vue-bootstrap-media",
              component: () => import("@/view/pages/vue-bootstrap/Media.vue")
            },
            {
              path: "modal",
              name: "vue-bootstrap-modal",
              component: () => import("@/view/pages/vue-bootstrap/Modal.vue")
            },
            {
              path: "nav",
              name: "vue-bootstrap-nav",
              component: () => import("@/view/pages/vue-bootstrap/Nav.vue")
            },
            {
              path: "navbar",
              name: "vue-bootstrap-navbar",
              component: () => import("@/view/pages/vue-bootstrap/Navbar.vue")
            },
            {
              path: "pagination",
              name: "vue-bootstrap-pagination",
              component: () =>
                import("@/view/pages/vue-bootstrap/Pagination.vue")
            },
            {
              path: "pagination-nav",
              name: "vue-bootstrap-pagination-nav",
              component: () =>
                import("@/view/pages/vue-bootstrap/PaginationNav.vue")
            },
            {
              path: "notify-popover",
              name: "vue-bootstrap-popover",
              component: () => import("@/view/pages/vue-bootstrap/Popover.vue")
            },
            {
              path: "notify-toasts",
              name: "vue-bootstrap-toasts",
              component: () => import("@/view/pages/vue-bootstrap/Toasts.vue")
            },
            {
              path: "notify-tooltip",
              name: "vue-bootstrap-tooltip",
              component: () => import("@/view/pages/vue-bootstrap/Tooltip.vue")
            },
            {
              path: "progress",
              name: "vue-bootstrap-progress",
              component: () => import("@/view/pages/vue-bootstrap/Progress.vue")
            },
            {
              path: "progress-spinner",
              name: "vue-bootstrap-spinner",
              component: () => import("@/view/pages/vue-bootstrap/Spinner.vue")
            },
            {
              path: "table",
              name: "vue-bootstrap-table",
              component: () => import("@/view/pages/vue-bootstrap/Table.vue")
            },
            {
              path: "tabs",
              name: "vue-bootstrap-tabs",
              component: () => import("@/view/pages/vue-bootstrap/Tabs.vue")
            }
          ]
        },
        {
          path: "/settings",
          redirect: "/settings/profile",
          name: "settings",
          component: () => import("@/view/pages/settings/Settings.vue"),
          children: [
            {
              path: "profile",
              name: "settings-profile",
              component: () =>
                import("@/view/pages/settings/profile/Profile.vue")
            },
            {
              path: "account",
              name: "settings-account",
              component: () =>
                import("@/view/pages/settings/account/Account.vue")
            },
            {
              path: "notification",
              name: "settings-notification",
              component: () =>
                import("@/view/pages/settings/notification/Notification.vue")
            },
            {
              path: "apiKey",
              name: "settings-apiKey",
              component: () =>
                import("@/view/pages/settings/api-key/ApiKey.vue")
            },
            {
              path: "apiKey/ipaddr/add",
              name: "settings-apiKey-ipaddr-add",
              component: () =>
                import("@/view/pages/settings/api-key/AddAllowedAddress.vue")
            },
            {
              path: "activitylog",
              name: "settings-activitylog",
              component: () =>
                import("@/view/pages/settings/activity/ActivityLog.vue")
            },
            {
              path: "ip_whitelisting",
              name: "settings-ip_whitelisting",
              component: () =>
                import("@/view/pages/settings/ip-whitelist/IPWhitelist.vue")
            },
            {
              path: "subscription",
              name: "settings-subscription",
              component: () =>
                import("@/view/pages/settings/subscription/Subscription.vue")
            }
          ]
        },
        {
          path: "server/:serverId",
          redirect: "server/:serverId/summary",
          name: "server",
          component: () => import("@/view/pages/server/Server.vue"),
          props: true,
          children: [
            {
              path: "summary",
              name: "server-summary",
              component: () => import("@/view/pages/server/Summary.vue")
            },
            {
              path: "notification",
              name: "server-notification",
              component: () =>
                import("@/view/pages/server/notifications/Notification.vue")
            },
            {
              path: "notification/addchannel",
              name: "server-notification-create",
              component: () =>
                import("@/view/pages/server/notifications/AddChannel.vue")
            },
            {
              path: "application",
              name: "server-application",
              component: () =>
                import("@/view/pages/server/application/Application.vue")
            },
            {
              path: "application/create",
              name: "server-application-create",
              component: () =>
                import("@/view/pages/server/application/Create.vue")
            },
            {
              path: "application/create/custom",
              name: "server-application-create-custom",
              component: () =>
                import("@/view/pages/server/application/Custom.vue")
            },
            {
              path: "application/create/wordpress",
              name: "server-application-create-wordpress",
              component: () =>
                import("@/view/pages/server/application/WordPress.vue")
            },
            {
              path: "application/create/phpmyadmin",
              name: "server-application-create-phpmyadmin",
              component: () =>
                import("@/view/pages/server/application/PHPMyAdmin.vue")
            },
            {
              path: "database",
              name: "server-database",
              component: () => import("@/view/pages/server/databases/Index.vue")
            },
            {
              path: "database/create",
              name: "server-database-create",
              component: () =>
                import("@/view/pages/server/databases/CreateDatabase.vue")
            },
            {
              path: "database/createuser",
              name: "server-database-createuser",
              component: () =>
                import("@/view/pages/server/databases/CreateDatabaseUser.vue")
            },
            {
              path: "database/:databaseId/grant",
              name: "server-database-grant",
              component: () =>
                import("@/view/pages/server/databases/Grant.vue"),
              props: true
            },
            {
              path: "database/:userId/changepassword",
              name: "server-database-change",
              component: () =>
                import("@/view/pages/server/databases/ChangePassword.vue"),
              props: true
            },
            {
              path: "activitylog",
              name: "server-activitylog",
              component: () => import("@/view/pages/server/ActivityLog.vue")
            },
            {
              path: "delete",
              name: "server-delete",
              component: () => import("@/view/pages/server/DeleteServer.vue")
            },
            {
              path: "systemuser",
              name: "systemuser",
              component: () =>
                import("@/view/pages/server/systemuser/SystemUser.vue")
            },
            {
              path: "systemuser/create",
              name: "server-user-create",
              component: () =>
                import("@/view/pages/server/systemuser/CreateUser.vue")
            },

            {
              path: "sshkey",
              name: "server-sshkey",
              component: () => import("@/view/pages/server/sshkey/SSHKey.vue")
            },
            {
              path: "sshkey/create",
              name: "server-sshkey-create",
              component: () =>
                import("@/view/pages/server/sshkey/AddSSHKey.vue")
            },
            {
              path: "deployment",
              name: "server-deployment",
              component: () => import("@/view/pages/server/DeploymentKey.vue")
            },
            {
              path: "phpcli",
              name: "server-phpcli",
              component: () => import("@/view/pages/server/PhpVersion.vue")
            },
            {
              path: "cronjob",
              name: "server-cronjob",
              component: () => import("@/view/pages/server/cronjob/CronJob.vue")
            },
            {
              path: "cronjob/create",
              name: "server-cronjob-create",
              component: () =>
                import("@/view/pages/server/cronjob/AddCronJob.vue")
            },
            {
              path: "supervisor",
              name: "server-supervisor",
              component: () =>
                import("@/view/pages/server/supervisor/Supervisor.vue")
            },
            {
              path: "supervisor/create",
              name: "server-supervisor-create",
              component: () =>
                import("@/view/pages/server/supervisor/AddSupervisor.vue")
            },
            {
              path: "services",
              name: "server-services",
              component: () => import("@/view/pages/server/Services.vue")
            },
            {
              path: "settings",
              name: "server-settings",
              component: () => import("@/view/pages/server/Settings.vue")
            },
            {
              path: "security",
              name: "server-security",
              component: () =>
                import("@/view/pages/server/security/Security.vue")
            },
            {
              path: "security/addfirewall",
              name: "server-security-addfirewall",
              component: () =>
                import("@/view/pages/server/security/AddFireWall.vue")
            },
            {
              path: "health",
              name: "server-health",
              component: () => import("@/view/pages/server/Health.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/Login.vue"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login.vue")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/Login.vue")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
