import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { GeneralContextProvider } from "./contexts/GeneralContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeneralContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GeneralContextProvider>
  </StrictMode>
);
