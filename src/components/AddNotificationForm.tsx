import React, { useState } from "react";
import { useNotification } from "../context/NotificationContext";

export const AddNotificationForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const { addNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNotification(message, type);
    setMessage("");
    setType("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="type..."
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
