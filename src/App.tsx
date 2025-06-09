import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Navigation/Navigation";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "*", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default App;
