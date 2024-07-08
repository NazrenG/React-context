import React from "react";
import { useNotification } from "../context/NotificationContext";
import { NotificationItem } from "./NotificationItem";

export const NotificationList: React.FC = () => {
  const { notifications } = useNotification();

  return (
    <div>
      <ul>
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            notification={item}
          ></NotificationItem>
        ))}
      </ul>
    </div>
  );
};
