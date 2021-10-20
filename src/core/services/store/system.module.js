import ApiService from "@/core/services/api.service";
export const SET_ERROR = "setError";

export const CREATE_SYSTEM_USER = "CREATE_SYSTEM_USER";
export const GET_SYSTEM_USER = "GET_SYSTEM_USER";
export const GET_SYSTEM_USERS = "GET_SYSTEM_USERS";
export const DELETE_SYSTEM_USER = "DELETE_SYSTEM_USER";
export const CHANGE_SYSTEM_USER_PASSWORD = "CHANGE_SYSTEM_USER_PASSWORD";

export const CREATE_SSH_KEY = "CREATE_SSH_KEY";
export const GET_SSH_KEYS = "GET_SSH_KEYS";
export const DELETE_SSH_KEY = "DELETE_SSH_KEY";

export const CREATE_DEPLOY_KEY = "CREATE_DEPLOY_KEY";
export const GET_DEPLOY_KEYS = "GET_DEPLOY_KEYS";

export const GET_SYSTEM_SERVICES = "GET_SYSTEM_SERVICES";

export const GET_PHP_VERSION = "GET_PHP_VERSION";
export const UPDATE_PHP_VERSION = "UPDATE_PHP_VERSION";

export const CREATE_CRON_JOB = "CREATE_CRON_JOB";
export const STORE_CRON_JOB = "STORE_CRON_JOB";
export const GET_CRON_JOBS = "GET_CRON_JOBS";

export const CREATE_SUPERVISOR_JOB = "CREATE_SUPERVISOR_JOB";
export const STORE_SUPERVISOR_JOB = "STORE_SUPERVISOR_JOB";
export const GET_SUPERVISOR_JOBS = "GET_SUPERVISOR_JOBS";

export const GET_SERVER_ACTIVITY_LOGS = "GET_SERVER_ACTIVITY_LOGS";

const state = {
  sshKeys: []
};

const getters = {
  sshKeys(state) {
    return state.sshKeys;
  }
};

const actions = {
  [CREATE_SYSTEM_USER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + payload.serverId + "/systemusers", payload)
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data);
          }
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [GET_SYSTEM_USER](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(
        `servers/${payload.serverId}/systemusers/${payload.userId}`
      )
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.user);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
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
            resolve(data.data.users);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [CHANGE_SYSTEM_USER_PASSWORD](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put(
        `servers/${payload.serverId}/systemusers/${payload.userId}/password`,
        payload
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
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
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },
  [CREATE_SSH_KEY](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(
        "servers/" + payload.serverId + "/sshcredentials",
        payload
      )
        .then(({ data }) => {
          resolve(data);
          if (data.success) {
            resolve(data.data);
          }
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data.errors);
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
            resolve(data.data.sshKeys);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data.errors);
          reject(error);
        });
    });
  },
  [DELETE_SSH_KEY](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete(
        `servers/${payload.serverId}/sshcredentials/${payload.keyId}`
      )
        .then(({ data }) => {
          console.log("delete-users-ok", data);
          resolve(data);
        })
        .catch(error => {
          console.log("delete-users-error", error);
          context.commit(SET_ERROR, error.response?.data?.errors);
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
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [GET_DEPLOY_KEYS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/deploykeys")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [GET_SYSTEM_SERVICES](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/services")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
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
            resolve(data.data.phpVersion);
          }
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
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
            resolve(payload.phpVersion);
          }
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },

  [CREATE_CRON_JOB](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/cronjobs/create")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [STORE_CRON_JOB](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + payload.serverId + "/cronjobs", payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [GET_CRON_JOBS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/cronjobs")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },

  [CREATE_SUPERVISOR_JOB](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/supervisors/create")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [STORE_SUPERVISOR_JOB](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("servers/" + payload.serverId + "/supervisors", payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error.response);
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [GET_SUPERVISOR_JOBS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/supervisors")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
          reject(error);
        });
    });
  },
  [GET_SERVER_ACTIVITY_LOGS](context, serverId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("servers/" + serverId + "/activities")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          context.commit(SET_ERROR, error.response?.data?.errors);
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
