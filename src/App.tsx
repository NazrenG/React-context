import "./App.css";
import { AddNotificationForm } from "./components/AddNotificationForm";
import { NotificationList } from "./components/NotificationList";

function App() {
  return (
    <div>
      <AddNotificationForm />
      <NotificationList></NotificationList>
    </div>
  );
}
export default App;
