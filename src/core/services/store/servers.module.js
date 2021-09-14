import ApiService from "@/core/services/api.service";

export const SET_SERVERS = "setServers";
export const SET_CONFIGSCRIPT = "setConfigScript";
export const SET_ERROR = "setError";
export const SET_INSTALLPROCESS = "setInstallProcess";
export const SET_SERVER_SUMMERY = "setServerSummery";

export const CREATE_SERVER = "createServer";
export const CONFIGURE_SERVER = "configureServer";
export const GET_SERVERS = "getServers";
export const GET_SERVER_SUMMERY = "getServerSummery";
export const GET_SCRIPT = "getScript";
export const GET_INSTALLPROCESS = "getInstallProcess";

export const DELETE_SERVER = "deleteServer";

const state = {
  servers: {},
  summery: {},
  currentServer: {},
  configscript: {},
  installprocess: 0
};

const getters = {
  servers(state) {
    return state.servers;
  },
  summery(state) {
    return state.summery;
  },
  currentServer(state) {
    return state.currentServer;
  },
  configscript(state) {
    return state.configscript;
  },
  installprocess(state) {
    return state.installprocess;
  }
};

const actions = {
  [CREATE_SERVER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("/servers", credentials)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_SERVERS](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("/servers")
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_SERVERS, data.data.servers);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_SCRIPT](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("/servers/" + credentials + "/config/installscript")
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_CONFIGSCRIPT, data.data);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_INSTALLPROCESS](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        "/servers/" +
          credentials +
          "/config/installstate/" +
          state.installprocess
      )
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_INSTALLPROCESS, data.data.state);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [DELETE_SERVER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        "servers/" +
          credentials +
          "/config/installstate/" +
          state.installprocess
      )
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_INSTALLPROCESS, data.data.state);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [GET_SERVER_SUMMERY](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + credentials + "/summary")
        .then(({ data }) => {
          resolve(data);
          console.log(data);
          if (data.success) {
            context.commit(SET_SERVER_SUMMERY, data.data);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_SERVERS](state, servers) {
    state.servers = servers;
    state.errors = {};
  },
  [SET_SERVER_SUMMERY](state, summery) {
    state.summery = summery;
    state.errors = {};
  },
  [SET_CONFIGSCRIPT](state, configscript) {
    state.configscript = configscript;
    state.errors = {};
  },
  [SET_INSTALLPROCESS](state, installprocess) {
    state.installprocess = installprocess;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
