import ApiService from "@/core/services/api.service";

export const SET_SERVERS = "setServers";
export const SET_ERROR = "setError";

export const CREATE_SERVER = "createServer";
export const CONFIGURE_SERVER = "configureServer";
export const GET_SERVERS = "getServers";

const state = {
  servers: {},
};

const getters = {
  servers(state) {
    return state.servers;
  }
};

const actions = {
  [CREATE_SERVER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/store", credentials)
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
      ApiService.get("servers/")
        .then(({ data }) => {
          resolve(data);
          console.log(data);
          if(data.success){
            context.commit(SET_SERVERS, data.data.servers);
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
