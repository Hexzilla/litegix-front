import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import servers from "./servers.module";
import database from "./database.module";
import sshkeys from "./sshkey.module";
import systemusers from "./systemuser.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile,
    servers,
    database,
    sshkeys,
    systemusers
  }
});
