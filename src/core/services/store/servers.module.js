import ApiService from "@/core/services/api.service";

export const SET_SERVERS = "setServers";
export const SET_ERROR = "setError";
export const SET_SERVER_SUMMERY = "setServerSummery";

export const CREATE_SERVER = "createServer";
export const CONFIGURE_SERVER = "configureServer";
export const GET_SERVERS = "getServers";
export const GET_SERVER_SUMMERY = "getServerSummery";
export const GET_SCRIPT = "getScript";
export const GET_INSTALL_STATUS = "getInstallStatus";

export const DELETE_SERVER = "deleteServer";

const state = {
  servers: {},
  summery: {},
  currentServer: {}
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
    console.log("GET_SERVERS");
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
      ApiService.get("/servers/" + credentials + "/installation/bashscript")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_INSTALL_STATUS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("/servers/" + serverId + "/installation/installstatus")
        .then(({ data }) => {
          resolve(data);
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
