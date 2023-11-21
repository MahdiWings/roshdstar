import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
import App from "../src/App";
import { MyContextProvider } from "./components/MyContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
    <MyContextProvider>
      <App />
    </MyContextProvider>
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);
