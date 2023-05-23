// import styles from "./TodoHead.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../store/notification-slice";

function Notification() {
  const { notification } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  console.log(notification);
  useEffect(() => {
    let notificationTimeOut;
    if (notification.show && notification.duration !== 0) {
      notificationTimeOut = setTimeout(() => {
        dispatch(
          clearNotification({ show: false, duration: 0, message: "", type: "" })
        );
      }, notification.duration + "000");
    }
    return () => clearTimeout(notificationTimeOut);
  }, [notification]);

  return (
    <div
      className={`alert ${notification.type}`}
      style={notification.show ? { display: "block" } : { display: "none" }}
    >
      {notification.message}
    </div>
  );
}

export { Notification };
