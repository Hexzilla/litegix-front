import ApiService from "@/core/services/api.service";

// action types
export const FETCH_ACTIVITY_LOGS = "FETCH_ACTIVITY_LOGS";
export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const UPDATE_NEWSLETTERS = "UPDATE_NEWSLETTERS";
export const GET_CHANNELS = "GET_CHANNELS";
export const GET_CHANNEL = "GET_CHANNEL";
export const UPDATE_CHANNEL = "UPDATE_CHANNEL";
export const ADD_CHANNEL = "ADD_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const GET_PAYMENT_METHODS = "GET_PAYMENT_METHODS";
export const ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD";
export const GET_API_KEYS = "GET_API_KEYS";
export const GENERATE_API_KEY = "GENERATE_API_KEY";
export const GENERATE_SECRET_KEY = "GENERATE_SECRET_KEY";
export const UPDATE_ENABLE_ACCESS = "UPDATE_ENABLE_ACCESS";
export const GET_ALLOWED_IP_ADDRESSES = "GET_ALLOWED_IP_ADDRESSES";
export const ADD_ALLOWED_IP_ADDRESS = "ADD_ALLOWED_IP_ADDRESS";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

// mutation types
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const SET_NOTIFICATION_NEWSLETTERS = "SET_NOTIFICATION_NEWSLETTERS";
export const SET_NOTIFICATION_CHANNELS = "SET_NOTIFICATION_CHANNELS";

const state = {
  newsletters: {
    subscription: false,
    updates_announcements: false,
    blog: false,
    event: false
  },
  channels: []
};

const getters = {
  newsletters(state) {
    return state.newsletters;
  },

  notificationChannels(state) {
    return state.channels;
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
  [GET_API_KEYS]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/apikey")
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.apiKeys);
          }
          reject(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [GENERATE_API_KEY]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put("settings/apikey/apiKey")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [GENERATE_SECRET_KEY]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.put("settings/apikey/secretKey")
        .then(({ data }) => {
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
      ApiService.post("settings/apikey/enableaccess", payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [GET_ALLOWED_IP_ADDRESSES]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/apikey/ipaddr")
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.addresses);
          }
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [ADD_ALLOWED_IP_ADDRESS](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/apikey/ipaddr", payload)
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.apiKeys);
          }
          reject(data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  [GET_NOTIFICATIONS](context) {
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
  },
  [GET_PAYMENT_METHODS]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/paymentmethods")
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.payments);
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [ADD_PAYMENT_METHOD](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/paymentmethods", payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [GET_CHANNELS]() {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get("settings/notifications/channels")
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.channels);
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [GET_CHANNEL](context, channelId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.get(`settings/notifications/channels/${channelId}`)
        .then(({ data }) => {
          if (data.success) {
            resolve(data.data.channel);
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [UPDATE_CHANNEL](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post(`settings/notifications/channels/${payload.id}`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [ADD_CHANNEL](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/notifications/channels", payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [DELETE_CHANNEL](context, channelId) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.delete("settings/notifications/channels/" + channelId)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  [DELETE_ACCOUNT](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/TODO-delete-account", payload)
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
