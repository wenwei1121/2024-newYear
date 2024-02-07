import Swal, { SweetAlertOptions } from "sweetalert2"

export const useAlerts = () => {
  const checkAlert = async (title: string, options?: SweetAlertOptions) => {
    const {
      icon = "warning",
      showConfirmButton = true,
      confirmButtonText = "確定",
      confirmButtonColor = "violet-500",
      showCancelButton = true,
      cancelButtonText = "取消",
      cancelButtonColor = "gray",
      allowOutsideClick = false,
    } = options || {};

    const res = await Swal.fire({
        title,
        icon,
        showConfirmButton,
        confirmButtonText,
        confirmButtonColor,
        showCancelButton,
        cancelButtonText,
        cancelButtonColor,
        allowOutsideClick,
    });

    return res.isConfirmed;
  }

  return {
    checkAlert,
  }
}