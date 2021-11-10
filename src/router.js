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
              path: "notification/channel/new",
              name: "settings-channel-new",
              component: () =>
                import("@/view/pages/settings/notification/AddChannel.vue")
            },
            {
              path: "notification/channel/edit/:channelId",
              name: "settings-channel-edit",
              component: () =>
                import("@/view/pages/settings/notification/AddChannel.vue")
            },
            {
              path: "apiKey",
              name: "settings-apiKey",
              component: () =>
                import("@/view/pages/settings/api-key/ApiKey.vue")
            },
            {
              path: "apiKey/ipaddr/new",
              name: "settings-apiKey-ipaddr-new",
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
            },
            {
              path: "paymentmethod",
              name: "settings-paymentmethod",
              component: () =>
                import("@/view/pages/settings/payment/PaymentMethod.vue")
            },
            {
              path: "paymentmethod/new",
              name: "settings-paymentmethod-new",
              component: () =>
                import("@/view/pages/settings/payment/AddPayment.vue")
            }
          ]
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
        //servers/:serverId/webapps
        {
          path: "servers/:serverId/webapps",
          redirect: "servers/:serverId/webapps/",
          name: "server-webapp-create-root",
          component: () => import("@/view/pages/server/Server.vue"),
          props: true,
          children: [
            {
              path: "/",
              name: "server-webapps-list",
              component: () => import("@/view/pages/server/webapps/Webapps.vue")
            },
            {
              path: "create/custom",
              name: "server-webapps-create-custom",
              component: () => import("@/view/pages/server/webapps/Custom.vue")
            },
            {
              path: "create/wordpress",
              name: "server-webapps-create-wordpress",
              component: () =>
                import("@/view/pages/server/webapps/WordPress.vue")
            },
            {
              path: "create/phpmyadmin",
              name: "server-webapps-create-phpmyadmin",
              component: () =>
                import("@/view/pages/server/webapps/PHPMyAdmin.vue")
            },
            {
              path: "webapps",
              name: "server-webapps",
              component: () => import("@/view/pages/server/webapps/Webapps.vue")
            }
          ]
        },
        //servers/:serverId/webapps/:webappId
        {
          path: "servers/:serverId/webapps/:webappId",
          redirect: "servers/:serverId/webapps/:webappId/summary",
          name: "server-webapps-app",
          component: () =>
            import("@/view/pages/server/webapps/webapp/Webapp.vue"),
          props: true,
          children: [
            {
              path: "summary",
              name: "webapp-summary",
              component: () =>
                import("@/view/pages/server/webapps/webapp/Summary.vue")
            },
            {
              path: "deploy",
              name: "webapp-deploy",
              component: () =>
                import("@/view/pages/server/webapps/webapp/Deploy.vue")
            },
            {
              path: "domain",
              name: "webapp-domain",
              component: () =>
                import("@/view/pages/server/webapps/webapp/Domain.vue")
            },
            {
              path: "ssl",
              name: "webapp-ssl",
              component: () =>
                import("@/view/pages/server/webapps/webapp/SSL.vue")
            },
            {
              path: "filemanager",
              name: "webapp-filemanager",
              component: () =>
                import("@/view/pages/server/webapps/webapp/FileManager.vue")
            },
            {
              path: "firewall",
              name: "webapp-firewall",
              component: () =>
                import("@/view/pages/server/webapps/webapp/Firewall.vue")
            },
            {
              path: "activitylog",
              name: "webapp-activitylog",
              component: () =>
                import("@/view/pages/server/webapps/webapp/ActivityLog.vue")
            },
            {
              path: "weblog",
              name: "webapp-weblog",
              component: () =>
                import("@/view/pages/server/webapps/webapp/WebLog.vue")
            },
            {
              path: "settings",
              name: "webapp-settings",
              component: () =>
                import("@/view/pages/server/webapps/webapp/Settings.vue")
            }
          ]
        },
        //servers/:serverId
        {
          path: "servers/:serverId",
          redirect: "servers/:serverId/summary",
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
              path: "system",
              name: "server-system",
              component: () => import("@/view/pages/server/system/Index.vue")
            },
            {
              path: "systemuser",
              name: "server-systemusers",
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
              path: "systemuser/:userId/change_password",
              name: "server-user-change-password",
              component: () =>
                import("@/view/pages/server/systemuser/ChangePassword.vue")
            },

            {
              path: "sshkey",
              name: "server-sshkey",
              component: () => import("@/view/pages/server/sshkey/Index.vue")
            },
            {
              path: "sshkey/create",
              name: "server-sshkey-create",
              component: () =>
                import("@/view/pages/server/sshkey/AddSSHKey.vue")
            },
            /*{
              path: "deployment",
              name: "server-deployment",
              component: () => import("@/view/pages/server/DeploymentKey.vue")
            },
            {
              path: "phpcli",
              name: "server-phpcli",
              component: () => import("@/view/pages/server/PhpVersion.vue")
            },*/
            {
              path: "cronjob",
              name: "server-cronjob",
              component: () => import("@/view/pages/server/cronjob/CronJob.vue")
            },
            {
              path: "cronjob/new",
              name: "server-cronjob-new",
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
              component: () =>
                import("@/view/pages/server/settings/Settings.vue")
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
