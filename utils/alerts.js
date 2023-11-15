import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const successAlert = (message) => {
    Swal.fire({
        icon: "success",
        title: "Success",
        text: message,
        timer: 500000,
        showCancelButton: false,
        timerProgressBar: true,
        confirmButtonText: "Okay",
        confirmButtonColor: "#1D417C",
        imageWidth: 600,
        imageHeight: 600,
    });
};

export const errorAlert = (message) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        confirmButtonText: "Okay",
        confirmButtonColor: "#1D417C",
        imageWidth: 600,
        imageHeight: 600,
    });
};

export const toastNotification = (message, type, autoClose = 2000) => {
    if (type === "success") {
        toast.success(message, {
            position: "top-right",
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        toast.error(message, {
            position: "top-right",
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};
