import ApiService from "@/core/services/api.service";

// action types
export const FETCH_PROFILE_INFO = "fetchUserProfileInfo";

export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_COMPANY_INFO = "updateUserCompanyInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_COMPANY_INFO = "setCompanyInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";

const state = {
  user_personal_info: {
    photo: "media/users/300_21.jpg",
    name: "James",
    username: "",
    surname: "Jones",
    company_name: "Fifestudios",
    job: "Application Developer",
    email: "matt@fifestudios.com",
    phone: "44(76)34254578",
    timezone: "",
    loginNotification: false,
    company_site: "fifestudios"
  },
  user_account_info: {
    username: "nick84",
    email: "nick.watson@loop.com",
    language: "English",
    time_zone: "(GMT-11:00) Midway Island",
    communication: {
      email: true,
      sms: true,
      phone: false
    },
    verification: true
  },
  user_company_info: {
    name: "Fifestudios",
    address1: "address1",
    address2: "address2",
    country: "Canada (+1)",
    state: "tomsk",
    city: "astrik",
    postal: "1111111",
    tax: "111",
    site: "fifestudios"
  }
};

const getters = {
  currentUserPersonalInfo(state) {
    return state.user_personal_info;
  },

  currentUserAccountInfo(state) {
    return state.user_account_info;
  },

  currentUserPhoto(state) {
    return state.user_personal_info.photo;
  },

  currentUserCompany(state) {
    return state.user_company_info;
  }
};

const actions = {
  [FETCH_PROFILE_INFO](context) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader(),
        ApiService.get("settings/profile")
          .then(({ data }) => {
            console.log("profileinfo", data);
            if (data.success) {
              context.commit(SET_PERSONAL_INFO, data.data.user);
              context.commit(SET_COMPANY_INFO, data.data.company);
            }
            resolve(data);
          })
          .catch(error => {
            return reject(error);
          });
    });
  },
  [UPDATE_PERSONAL_INFO](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/profile", payload)
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_PERSONAL_INFO, data.data.profile);
          }
          resolve(data);
        })
        .catch(({ response }) => {
          return reject(response.data.errors);
        });
    });
  },
  [UPDATE_COMPANY_INFO](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("settings/profile/company", payload)
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_COMPANY_INFO, data.data.company);
          }
          resolve(data);
        })
        .catch(({ response }) => {
          return reject(response.data.errors);
        });
    });
  },
  [UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(SET_ACCOUNT_INFO, payload);
  }
};

const mutations = {
  [SET_PERSONAL_INFO](state, user_personal_info) {
    state.user_personal_info = {
      ...state.user_personal_info,
      ...user_personal_info
    };
  },
  [SET_COMPANY_INFO](state, user_company_info) {
    state.user_company_info = {
      ...state.user_company_info,
      ...user_company_info
    };
  },
  [SET_ACCOUNT_INFO](state, user_account_info) {
    state.user_account_info = user_account_info;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
