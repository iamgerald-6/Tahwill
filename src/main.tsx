import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors position="top-center" />
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
