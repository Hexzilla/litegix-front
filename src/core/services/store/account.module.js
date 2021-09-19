import ApiService from "@/core/services/api.service";

// action types
export const FETCH_ACTIVITY_LOGS = "FETCH_ACTIVITY_LOGS";
export const FETCH_NOTIFICATIONS = "FETCH_NOTIFICATIONS";
export const UPDATE_NEWSLETTERS = "UPDATE_NEWSLETTERS";
export const FETCH_API_KEYS = "FETCH_API_KEYS";
export const GENERATE_API_KEY = "GENERATE_API_KEY";
export const GENERATE_SECRET_KEY = "GENERATE_SECRET_KEY";
export const UPDATE_ENABLE_ACCESS = "UPDATE_ENABLE_ACCESS";

// mutation types
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const SET_NOTIFICATION_NEWSLETTERS = "SET_NOTIFICATION_NEWSLETTERS";
export const SET_NOTIFICATION_CHANNELS = "SET_NOTIFICATION_CHANNELS";
export const SET_API_KEYS = "SET_API_KEYS";

const state = {
  newsletters: {
    subscription: false,
    updates_announcements: false,
    blog: false,
    event: false
  },
  channels: [],
  apiKeys: {
    enableAccess: false,
    apiKey: "API Key",
    secretKey: "Secret Key"
  }
};

const getters = {
  newsletters(state) {
    return state.newsletters;
  },

  notificationChannels(state) {
    return state.channels;
  },

  apiKeys(state) {
    return state.apiKeys;
  }
};

const actions = {
  [FETCH_ACTIVITY_LOGS]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/activity")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [FETCH_API_KEYS](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/apikeys")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_API_KEYS, data.data.apiKeys);
          }
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [GENERATE_API_KEY](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put("settings/apiKeys/apiKey")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_API_KEYS, data.data.apiKeys);
          }
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [GENERATE_SECRET_KEY](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put("settings/apiKeys/secretKey")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_API_KEYS, data.data.apiKeys);
          }
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [UPDATE_ENABLE_ACCESS](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/apiKeys/enableaccess", payload)
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_API_KEYS, data.data.apiKeys);
          }
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [FETCH_NOTIFICATIONS](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/notifications")
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_NOTIFICATION, data.data);
          }
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [UPDATE_NEWSLETTERS](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/notifications/newsletters/subscribe", payload)
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_NOTIFICATION_NEWSLETTERS, payload);
          }
          resolve(data);
        })
        .catch(({ response }) => {
          return reject(response.data.errors);
        });
    });
  }
};

const mutations = {
  [SET_NOTIFICATION](state, notification) {
    state.newsletters = notification.newsletters;
    state.channels = notification.channels;
  },
  [SET_NOTIFICATION_NEWSLETTERS](state, newsletters) {
    state.newsletters = newsletters;
  },
  [SET_NOTIFICATION_CHANNELS](state, channels) {
    state.channels = channels;
  },
  [SET_API_KEYS](state, data) {
    state.apiKeys = {
      ...state.apiKeys,
      ...data
    };
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
