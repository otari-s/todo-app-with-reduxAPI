import { Outlet } from "react-router-dom";
import "./App.css";
import { Notification } from "./components/Notification";
import TodoHead from "./components/TodoHead";
function App() {
  return (
    <main className="mainContainer">
      <Notification />
      <TodoHead />
      <Outlet />
    </main>
  );
}

export default App;
