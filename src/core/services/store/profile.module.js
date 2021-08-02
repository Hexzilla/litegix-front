/* eslint-disable */
import ApiService from "@/core/services/api.service";

// action types
export const LOAD_PROFILE_INFO = "loadUserProfileInfo";
export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_COMPANY_INFO = "updateUserCompanyInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const GET_PROFILE_INFO ="getPersonalInfo"
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_COMPANY_INFO = "setCompanyInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";
// export const SET_ERROR = "setError";
// export const SET_SUCCESS = "setSuccess";

const state = {
  user_personal_info: {
    email: "yasha@mail.ru",
    name: "Jones James",
    surname: "Jones", //<--- unuse
    photo: "/media/users/300_21.jpg",
    job: "Application Developer",
    timezone: "(GMT+05:30) New Delhi",
    phone: "44(76)34254578", //<--- unuse
    recv_notification: true
  },
  user_company_info: {
    name: "Fifestudios",
    address1: "address1",
    address2: "address2",
    // address3: "address3",
    country: "Canada (+1)",
    state: "tomsk",
    city: "astrik", //<--- unuse
    postal: "1111111",
    tax: "111",
    site: "fifestudios" //<--- unuse
    //    }
  },
  user_account_info: {
    username: "",
    email: "",
    language: "English",
    time_zone: "(GMT-11:00) Midway Island",
    communication: {
      email: true,
      sms: true,
      phone: false
    },
    verification: true
  }
};

const getters = {
  
  currentUserPersonalInfo(state) {
    return state.user_personal_info;
  },

  currentUserCompanyInfo(state) {
    return state.user_company_info;
  },

  currentUserAccountInfo(state) {
    return state.user_account_info;
  },

  currentUserPhoto(state) {
    return state.user_personal_info.photo;
  }
};

const actions = {
  // context : viewPage info
  // payload : user_personal_info
  [LOAD_PROFILE_INFO](context, payload) {
    context.commit(GET_PROFILE_INFO, payload);    
  },
  [UPDATE_PERSONAL_INFO](context, payload) {
    context.commit(SET_PERSONAL_INFO, payload);
  },
  [UPDATE_COMPANY_INFO](context, company_json) {
    // context.commit(SET_COMPANY_INFO, payload);
    var updateInfo = {
      payload : state.user_personal_info,
      name: company_json.company_name,
      address1: company_json.address1,
      address2: company_json.address2,
      city: company_json.city,
      postal: company_json.postCode,
      state: company_json.state,
      country: company_json.country,
      tax: company_json.gstNumber
    };
    return new Promise((resolve, reject) => {
      ApiService.setHeader(),
      ApiService.post("settings/profile/updatecompany", updateInfo)
        .then((data) => {
          //context.commit(SET_SUCCESS, data);
          resolve(data);
        })
        .catch(error => {
          var ErrorArray = error.response.data.errors;
          console.log(ErrorArray);
          var ErrorMsg = ErrorArray[0].msg  + ' in ' + ErrorArray[0].param + ' : ' + '\'' + ErrorArray[0].value + '\'';
          console.log("update-error", ErrorMsg);
          //context.commit(SET_ERROR, ErrorMsg);
          return reject(ErrorMsg);
        });
    });
  },
  [UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(SET_ACCOUNT_INFO, payload);
  },
};

const mutations = {
  [GET_PROFILE_INFO](state) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader(),
      ApiService.post("settings/profile", {})
        .then(({ data }) => {
          
          state.user_personal_info.email = data.user.email;
          state.user_personal_info.name = data.user.username;
          state.user_personal_info.timezone = data.user.timezone;
          state.user_personal_info.recv_notification = data.user.loginNotification;

          state.user_account_info.email = data.user.email;
          state.user_account_info.username = data.user.username;
          state.user_account_info.time_zone = data.user.timezone;

          state.user_company_info = data.company;
          //console.log(data.company),console.log(state.user_company_info)
          resolve(data);
        })
        .catch(error => {
          console.log("profile loading error", error.response);
          return reject(error);
        });
    });
  },

  [SET_PERSONAL_INFO](state, user_personal_info) {
    //user_personal_info = changed personalinfo
    //state = this.state
    state.user_personal_info = {
      ...state.user_personal_info,
      user_personal_info
    };
    var updateInfo = {
      payload : user_personal_info,
      name: user_personal_info.name.replace(' ', ''),
      email: user_personal_info.email,
      timezone: user_personal_info.timezone,
      loginNotification: user_personal_info.recv_notification=='on' ? true : false
    };
    return new Promise((resolve, reject) => {
      ApiService.setHeader(),
      ApiService.post("settings/profile/update", updateInfo)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          console.log("update-error", error.response);
          //context.commit(SET_ERROR, error.response.data.errors);
          return reject(error);
        });
    });
  },
  [SET_COMPANY_INFO](state, user_company_info) {
    state.user_company_info = 
    {
      ...state.user_company_info,
      user_company_info
    };

    // console.log("SET_COMPANY_INFO");
    // console.log(state.user_personal_info);
    var updateInfo = {
      payload : state.user_personal_info,
      name: user_company_info.company_name,
      address1: user_company_info.address1,
      address2: user_company_info.address2,
      city: user_company_info.city,
      postal: user_company_info.postCode,
      state: user_company_info.state,
      country: user_company_info.country,
      tax: user_company_info.gstNumber
    };
    return new Promise((resolve, reject) => {
      ApiService.setHeader(),
      ApiService.post("settings/profile/updatecompany", updateInfo)
        .then((data) => {
          //state.commit(SET_SUCCESS, data);
          resolve(data);
        })
        .catch(error => {
          //var ErrorArray = error.response.data.errors;
          //console.log(ErrorArray);
          //var ErrorMsg = ErrorArray[0].msg  + ' in ' + ErrorArray[0].param + ' : ' + '\'' + ErrorArray[0].value + '\'';
          //console.log("update-error", ErrorMsg);
          //state.commit(SET_ERROR, ErrorMsg);
          return reject(error);
        });
    });

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
