import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { GeneralContextProvider } from "./contexts/GeneralContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "*", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeneralContextProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </GeneralContextProvider>
  </StrictMode>
);
