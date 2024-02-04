import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme } from "@radix-ui/themes";
import * as Toast from "@radix-ui/react-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="inherit" accentColor="purple" radius="large">
      <Toast.Provider duration={18000}>
        <App />
      </Toast.Provider>
    </Theme>
  </React.StrictMode>
);
