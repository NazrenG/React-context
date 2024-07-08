import { useNotification } from "../context/NotificationContext";

type Props = {
  notification: {
    id: number;
    message: string;
    type: string;
  };
};

export const NotificationItem: React.FC<Props> = ({ notification }) => {
  const { removeNotification } = useNotification();
  return (
    <div>
      <p>
        {notification.message}--{notification.type}
        <button onClick={() => removeNotification(notification.id)}>
          remove
        </button>
      </p>
    </div>
  );
};
