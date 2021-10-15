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
