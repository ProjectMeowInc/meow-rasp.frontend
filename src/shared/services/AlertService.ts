import { Bounce, toast } from "react-toastify"

/**
 * Класс для отображения сообщений пользователю
 */
export class AlertService {
    /**
     * Метод показывающий уведомление об успешном завершении действия
     * @param message сообщение для пользователя
     */
    public static success(message: string) {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    /**
     * Метод показывающий уведомление об отрицательным завершении действия
     * @param message сообщение для пользователя
     */
    public static error(message: string) {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }
}
