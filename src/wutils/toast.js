import {toast} from "react-toastify";


const CustomToast = {
  success: (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: true
    });
  },
  error: (error) => {
    let message = "Something went wrong";
    if (error && error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    return toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: true
    });
  },
  errorByMessage: (errorMessage) => {
    return toast.error(errorMessage || "Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: true
    });
  }
};

export default CustomToast;

