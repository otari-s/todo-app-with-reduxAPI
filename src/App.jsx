import { Outlet } from "react-router-dom";
import "./App.css";
import TodoHead from "./components/TodoHead";
function App() {
  return (
    <main className="mainContainer">
      <TodoHead />
      <Outlet />
    </main>
  );
}

export default App;
