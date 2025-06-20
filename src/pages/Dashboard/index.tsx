import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Toaster } from "react-hot-toast";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black text-white justify-center identify-center">
      <Navigation />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Dashboard;
