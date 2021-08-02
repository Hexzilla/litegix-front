import ApiService from "@/core/services/api.service";

export const SET_DATABASE = "setDatabase";
export const SET_DATABASES = "setDatabases";
export const SET_DBUSER = "setDBuser";
export const SET_DBUSERS = "setDBusers";
export const SET_UNGRANTED_DBUSER = "setUngrantedDBusers";
export const SET_ERROR = "setError";

export const CREATE_DATABASE = "createDatabase";
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
  database: {},
  databases: {},
  databaseuser: {},
  databaseusers: {},
  ungrantedusers: {},
  error: {},
};

const getters = {
  database(state) {
    return state.database;
  },
  databases(state) {
    return state.databases;
  },
  databaseuser(state) {
    return state.databaseuser;
  },
  databaseusers(state) {
    return state.databaseusers;
  },
  ungrantedusers(state) {
    return state.ungrantedusers;
  },
};

const actions = {
  [CREATE_DATABASE](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(
        "servers/" + credentials.serverId + "/databases",
        credentials
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [CREATE_DBUSER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(
        "servers/" + credentials.serverId + "/databases/users",
        credentials
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GRANT_USER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(
        "servers/" +
          credentials.serverId +
          "/databases/" +
          credentials.databaseId +
          "/grant",
        credentials
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [CHANGE_PASSWORD](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.update(
        "servers/" +
          credentials.serverId +
          "/databases/users/" +
          credentials.id,
        "password",
        credentials
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_DATABASE](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        "servers/" +
          credentials.serverId +
          "/databases/" +
          credentials.databaseId
      )
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_DATABASE, data.data.databases);
          }
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [GET_DATABASES](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/databases")
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_DATABASES, data.data.results);
          }
        })
        .catch((error) => {
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
          resolve(data);
          if (data.success) {
            context.commit(SET_DBUSERS, data.data.dbusers);
          }
        })
        .catch((error) => {
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
          "/grant"
      )
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            context.commit(SET_UNGRANTED_DBUSER, data.data.ungrantedusers);
          }
        })
        .catch((error) => {
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
          resolve(data);
          if (data.success) {
            context.commit(SET_DBUSER, data.data.dbuser);
          }
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  
  [DELETE_DATABASE](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        "servers/" +
          credentials.serverId +
          "/databases/" +
          credentials.databaseId
      )
        .then(({ data }) => {
          resolve(data);
          // if (data.success) {
          //     context.commit(SET_DATABASES, data.data.databases);
          // }
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [DELETE_DBUSER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        "servers/" +
          credentials.serverId +
          "/databases/users/" +
          credentials.dbuserId
      )
        .then(({ data }) => {
          resolve(data);
          // if (data.success) {
          //     context.commit(SET_DBUSERS, data.data.dbusers);
          //     context.commit(SET_DATABASES, data.data.databases);
          // }
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
  [REVOKE_USER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        "servers/" +
          credentials.serverId +
          "/databases/" +
          credentials.databaseId +
          "/grant/" +
          credentials.dbuserId
      )
        .then(({ data }) => {
          resolve(data);
          // if (data.success) {
          //     context.commit(SET_DATABASES, data.data.databases);
          // }
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response.data.errors);
          reject(error);
        });
    });
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_DATABASE](state, database) {
    state.database = database;
    state.errors = {};
  },
  [SET_DATABASES](state, databases) {
    state.databases = databases;
    state.errors = {};
  },
  [SET_DBUSER](state, databaseuser) {
    state.databaseuser = databaseuser;
    state.errors = {};
  },
  [SET_DBUSERS](state, databaseusers) {
    state.databaseusers = databaseusers;
    state.errors = {};
  },
  [SET_UNGRANTED_DBUSER](state, databaseusers) {
    state.ungrantedusers = databaseusers;
    state.errors = {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
