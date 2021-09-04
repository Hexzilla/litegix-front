import ApiService from "@/core/services/api.service";
export const SET_SSH_KEYS = "setSSHKeys";
export const SET_ERROR = "setError";

export const CREATE_SSH_KEY = "createSSHKey";
export const GET_SSH_KEYS = "getSSHKeys";
export const DELETE_SSH_KEY = "deleteSSHKey";

const state = {
  sshKeys: []
};

const getters = {
  sshKeys(state) {
    return state.sshKeys;
  }
};

const actions = {
  [CREATE_SSH_KEY](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + payload.serverId + "/sshkey/store", payload)
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_SSH_KEYS, data.data);
          }
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_SSH_KEYS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/sshkey")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_SSH_KEYS, data.data.users);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [DELETE_SSH_KEY](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(`servers/${payload.serverId}/sshkey/${payload.userId}`)
        .then(({ data }) => {
          console.log("delete-users-ok", data);
          resolve(data);
        })
        .catch(error => {
          console.log("delete-users-error", error);
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
  [SET_SSH_KEYS](state, keys) {
    state.sshKeys = keys;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
