import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Login from "../../../components/Navigation/components/Login";

const Hero: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen snap-start">
        <div className="relative max-w-[1000px] w-[90%] bg-[#fff]/30 rounded-[12px] md:min-h-[500px] min-h-[600px] bg-[url(/hero-bg.png)] overflow-hidden bg-cover bg-no-repeat bg-center">
          <div className="absolute md:w-[80%] w-full h-full right-[0px] top-[0px] md:bg-gradient-to-l bg-gradient-to-b from-[#000000] md:to-[#000000]/0 to-[#000000]/50 flex flex-col md:items-end items-center justify-center md:pr-[20px]">
            <h1 className="tracking-[2px] md:w-[50%] w-full md:text-right text-center md:text-[40px] text-[30px]">
              The{" "}
              <span className="font-orbitron font-bold text-[#00cccc]">
                FUTURE
              </span>{" "}
              of Gambling is Here — Fast, Fair, and on the Blockchain.
            </h1>
            <p>Deposit now to earn 200% bonus!</p>

            <button
              onClick={() => setShowLoginModal(true)}
              className="flex items-center justify-center relative px-[40px] h-[60px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer drop-shadow-[0_15px_15px_rgba(0,204,204,0.25)]"
            >
              <p className="group-hover:text-[#fff] font-orbitron tracking-[8px] text-[#110c17] text-[24px] duration-500">
                JOIN & WIN
              </p>
            </button>
          </div>

          <img
            src="/casino-assessment-logo.webp"
            alt="logo"
            className="w-[200px] object-contain absolute bottom-[20px] left-[34px]"
          />
        </div>
      </div>
      <Modal
        show={showLoginModal}
        setShow={setShowLoginModal}
        children={<Login />}
      />
    </>
  );
};

export default Hero;
