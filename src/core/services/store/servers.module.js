import ApiService from "@/core/services/api.service";

export const SET_SERVERS = "SET_SERVERS";
export const SET_ERROR = "SET_ERROR";

export const CREATE_SERVER = "CREATE_SERVER";
export const STORE_SERVER = "STORE_SERVER";
export const CONFIGURE_SERVER = "CONFIGURE_SERVER";
export const GET_SERVERS = "GET_SERVERS";
export const GET_SCRIPT = "GET_SCRIPT";
export const GET_INSTALL_STATUS = "GET_INSTALL_STATUS";

export const GET_SERVER_SUMMERY = "GET_SERVER_SUMMERY";
export const GET_SERVER_SETTINGS = "GET_SERVER_SETTINGS";
export const UPDATE_SERVER_DETAIL = "UPDATE_SERVER_DETAIL";
export const UPDATE_SERVER_ADDRESS = "UPDATE_SERVER_ADDRESS";
export const DELETE_SERVER = "DELETE_SERVER";

const state = {
  servers: {},
  currentServer: {}
};

const getters = {
  servers(state) {
    return state.servers;
  },
  currentServer(state) {
    return state.currentServer;
  }
};

const actions = {
  [CREATE_SERVER](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("/servers/create")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },
  [STORE_SERVER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("/servers", credentials)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data.errors);
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
          context.commit(SET_ERROR, error.response?.data.errors);
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
          context.commit(SET_ERROR, error.response?.data.errors);
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
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },
  [DELETE_SERVER](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete("servers/" + serverId)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },

  [GET_SERVER_SUMMERY](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + serverId + "/summary")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },

  [GET_SERVER_SETTINGS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/settings")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },

  [UPDATE_SERVER_DETAIL](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put(
        "servers/" + payload.serverId + "/settings/details",
        payload
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },

  [UPDATE_SERVER_ADDRESS](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put(
        "servers/" + payload.serverId + "/settings/address",
        payload
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data.errors);
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
