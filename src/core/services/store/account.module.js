import ApiService from "@/core/services/api.service";

// action types
export const FETCH_ACTIVITY_LOGS = "FetchActivityLogs";
export const FETCH_NOTIFICATION_NEWSLETTERS = "FetchNotificationNewsletters";
export const UPDATE_NOTIFICATION_NEWSLETTERS = "UpdateNotificationNewsletters";

// mutation types
export const SET_NOTIFICATION = "SetNotification";
export const SET_NOTIFICATION_NEWSLETTERS = "SetNotificationNewsletters";
export const SET_NOTIFICATION_CHANNELS = "SetNotificationChannels";

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
      ApiService.setHeader(),
        ApiService.get("settings/activity")
          .then(({ data }) => {
            console.log("account.activity", data);
            resolve(data);
          })
          .catch(error => {
            return reject(error);
          });
    });
  },
  [FETCH_NOTIFICATION_NEWSLETTERS](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader(),
        ApiService.get("settings/notifications")
          .then(({ data }) => {
            console.log("fetch", data);
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
  [UPDATE_NOTIFICATION_NEWSLETTERS](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/notifications/newsletters/subscribe", payload)
        .then(({ data }) => {
          console.log("update", data);
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
