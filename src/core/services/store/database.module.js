import ApiService from "@/core/services/api.service";

export const SET_ERROR = "setError";

export const CREATE_DATABASE = "createDatabase";
export const STORE_DATABASE = "storeDatabase";
export const CREATE_DBUSER = "createDBuser";

export const GRANT_USER = "grantUser";
export const CHANGE_PASSWORD = "changePassword";

export const GET_DATABASES = "getDatabases";
export const GET_DBUSERS = "getDBusers";
export const GET_DATABASE = "getDatabase";
export const GET_DBUSER = "getDBuser";
export const GET_UNGRANTED_DBUSER = "getUngrantedDBuser";

export const DELETE_DATABASE = "deleteDatabase";
export const DELETE_DBUSER = "deleteDBuser";
export const REVOKE_USER = "revokeUser";

const state = {
  error: {}
};

const getters = {};

const actions = {
  [GET_DATABASE](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        `servers/${payload.serverId}/databases/${payload.databaseId}`
      )
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.databases);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [GET_DATABASES](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(`servers/${serverId}/databases`)
        .then(({ data }) => {
          resolve(data.data.databases);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [CREATE_DATABASE](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(`servers/${serverId}/databases/create`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [STORE_DATABASE](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(`servers/${payload.serverId}/databases`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [CREATE_DBUSER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(`servers/${payload.serverId}/databases/users`, payload)
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

  [GRANT_USER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(
        `servers/${payload.serverId}/databases/${payload.databaseId}/grant`,
        payload
      )
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

  [CHANGE_PASSWORD](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put(
        `servers/${payload.serverId}/databases/users/${payload.id}/password`,
        payload
      )
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

  [GET_DBUSERS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/databases/users")
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.dbusers);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [GET_UNGRANTED_DBUSER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        "servers/" +
          credentials.serverId +
          "/databases/" +
          credentials.databaseId +
          "/users/ungranted"
      )
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.users);
          }
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [GET_DBUSER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        "servers/" +
          credentials.serverId +
          "/databases/users/" +
          credentials.dbuserId
      )
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.dbuser);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },

  [DELETE_DATABASE](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(`servers/${payload.serverId}/databases/${payload.dbId}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [DELETE_DBUSER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        `servers/${payload.serverId}/databases/users/${payload.dbuserId}`
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
  [REVOKE_USER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        `servers/${payload.serverId}/databases/${payload.databaseId}/grant/${payload.dbuserId}`
      )
        .then(({ data }) => {
          resolve(data);
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
