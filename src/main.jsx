import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoComplete from "./components/TodoComplete.jsx";
import Todobody from "./components/Todobody.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// rotes ****************************************
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Todobody />,
      },
      {
        path: "/complete",
        element: <TodoComplete />,
      },
    ],
  },
]);
// ***********************************************

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
