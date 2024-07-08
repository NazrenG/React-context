import { createContext, useContext, useState } from "react";

type Notification = {
  id: number;
  message: string;
  type: string;
};

type NotificationContextType = {
  addNotification: (message: string, type: string) => void;
  removeNotification: (id: number) => void;
  notifications: Notification[];
};
const NotificationContext = createContext({} as NotificationContextType);
export const useNotification = () => {
  return useContext(NotificationContext);
};

interface Props {
  children: React.ReactNode;
}

const NotificationContextProvider: React.FC<Props> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = (message: string, type: string) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationContextProvider;
