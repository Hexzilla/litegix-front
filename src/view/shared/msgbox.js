import Swal from "sweetalert2";

export const showSuccessMsgbox = async function(text) {
  return await Swal.fire({
    text: text,
    icon: "success",
    heightAuto: true
  });
};

export const showConfirmMsgbox = async function(text) {
  return await Swal.fire({
    text: text,
    icon: "question",
    showConfirmButton: true,
    showCancelButton: true,
    heightAuto: true
  });
};

export const showErrorMsgbox = async function(text) {
  return await Swal.fire({
    text: text,
    icon: "error",
    heightAuto: true
  });
};

export const catchError = async function(err) {
  const message =
    err.response?.data?.errors?.message || err.message || "Unknown Error!";
  return showErrorMsgbox(message);
};

export const makeSuccessToast = function(thiz, content) {
  thiz.$bvToast.toast(content, {
    title: "Litegix",
    variant: "success",
    autoHideDelay: 1000,
    solid: true
  });
};
