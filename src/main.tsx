import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import posthog from "posthog-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

posthog.init("phc_Ror2WH8FNwqfRrwx7eyWLoKHEddTz4HJHjNEb83Qw7J", {
  api_host: "https://app.posthog.com",
  autocapture: false,
});

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
