import { useContext } from "react";
import NotificationContext from "../components/NotificationContext";

const useNotification = () => {
    const { notification, setNotification } = useContext(NotificationContext)

    const notify = (message, duration = 5) => {
        setNotification(message)

        setTimeout(() => {
            setNotification('')
        }, duration * 1000)
    }

    return {
        notify,
        notification
    }
}

export default useNotification