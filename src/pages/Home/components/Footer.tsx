import React from "react";
import { useGeneralContext } from "../../../contexts/GeneralContext";

const Footer: React.FC = () => {
  const { navOpenIndicator } = useGeneralContext();
  return (
    <div
      className={`flex items-center ${!navOpenIndicator ? "justify-between" : "justify-center gap-[100px]"} flex-wrap duration-500 w-full py-[20px] bg-[#000]`}
    >
      <div className="flex flex-col gap-[4px] md:ml-[140px] max-w-[300px] w-[90%]">
        <img
          src="/casino-assessment-logo.webp"
          alt="Logo"
          className="w-full object-contain"
        />
        <p className="text-[10px]">
          © Copyright 2025 Casino Assessment All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-[18px] md:mr-[140px]">
        <a href="#" target="_blank" className="no-underline">
          About
        </a>

        <a href="#" target="_blank" className="no-underline">
          Terms of Use
        </a>

        <a href="#" target="_blank" className="no-underline">
          Privacy Policy
        </a>

        <a href="#" target="_blank" className="no-underline">
          Contract
        </a>
      </div>
    </div>
  );
};

export default Footer;
