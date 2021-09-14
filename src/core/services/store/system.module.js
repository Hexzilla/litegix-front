import ApiService from "@/core/services/api.service";
export const SET_SYSTEM_USERS = "setSystemUsers";
export const SET_SSH_KEYS = "setSSHKeys";
export const SET_ERROR = "setError";

export const CREATE_SYSTEM_USERS = "createSystemUsers";
export const GET_SYSTEM_USERS = "getSystemUsers";
export const DELETE_SYSTEM_USER = "deleteSystemUser";

export const CREATE_SSH_KEY = "createSSHKey";
export const GET_SSH_KEYS = "getSSHKeys";
export const DELETE_SSH_KEY = "deleteSSHKey";

export const CREATE_DEPLOY_KEY = "createDeployKey";
export const GET_DEPLOY_KEYS = "getDeployKeys";
export const SET_DEPLOY_KEYS = "setDeployKeys";

export const GET_SYSTEM_SERVICES = "getSystemServices";
export const SET_SYSTEM_SERVICES = "setSystemServices";

export const GET_PHP_VERSION = "getPhpVersion";
export const UPDATE_PHP_VERSION = "updatePhpVersion";
export const SET_PHP_VERSION = "setPhpVersion";

const state = {
  systemUsers: [],
  sshKeys: [],
  deployKeys: [],
  services: [],
  phpVersion: ""
};

const getters = {
  systemUsers(state) {
    return state.systemUsers;
  },
  sshKeys(state) {
    return state.sshKeys;
  },
  deployKeys(state) {
    return state.deployKeys;
  },
  services(state) {
    return state.services;
  },
  phpVersion(state) {
    return state.phpVersion;
  }
};

const actions = {
  [CREATE_SYSTEM_USERS](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + payload.serverId + "/systemusers", payload)
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_SYSTEM_USERS, data.data);
          }
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_SYSTEM_USERS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/systemusers")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_SYSTEM_USERS, data.data.users);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [DELETE_SYSTEM_USER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        `servers/${payload.serverId}/systemusers/${payload.userId}`
      )
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
  },
  [CREATE_SSH_KEY](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(
        "servers/" + payload.serverId + "/sshcredentials/store",
        payload
      )
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
      ApiService.get("servers/" + serverId + "/sshcredentials")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_SSH_KEYS, data.data.sshKeys);
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
      ApiService.delete(
        `servers/${payload.serverId}/sshcredentials/${payload.userId}`
      )
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
  },
  [CREATE_DEPLOY_KEY](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + payload.serverId + "/deploykeys", payload)
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
  [GET_DEPLOY_KEYS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/deploykeys")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_DEPLOY_KEYS, data.data.keys);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_SYSTEM_SERVICES](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/services")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_SYSTEM_SERVICES, data.data.services);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_PHP_VERSION](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/phpVersion")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_PHP_VERSION, data.data.phpVersion);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [UPDATE_PHP_VERSION](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put("servers/" + payload.serverId + "/phpVersion", payload)
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_PHP_VERSION, payload.phpVersion);
          }
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
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
  [SET_SYSTEM_USERS](state, systemUser) {
    state.systemUsers = systemUser;
    state.errors = {};
  },
  [SET_SSH_KEYS](state, keys) {
    state.sshKeys = keys;
    state.errors = {};
  },
  [SET_DEPLOY_KEYS](state, keys) {
    state.deployKeys = keys;
    state.errors = {};
  },
  [SET_SYSTEM_SERVICES](state, services) {
    state.services = services;
    state.errors = {};
  },
  [SET_PHP_VERSION](state, version) {
    console.log("SET_PHP_VERSION", state, version);
    state.phpVersion = version;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
