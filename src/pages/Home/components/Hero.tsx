import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import Login from "../../../components/Navigation/components/Login";
import WinnersCarousel from "./WinnersCarousel";

const Hero: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (page == 4) setPage(1);
      else setPage((oldData) => oldData + 1);
    }, 4000);
  }, [page]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen snap-start relative">
        <div className="flex w-full h-full absolute inset-0">
          <video
            src="/casino-chips-with-neon-bg.mp4"
            className="w-full h-full object-cover z-10 blur-[10px] rounded-[12px]"
            muted
            autoPlay
            loop
          ></video>
          <div className="absolute inset-0 w-full h-full bg-[#000]/80 z-20 rounded-[12px]"></div>
        </div>

        <div
          className={`relative max-w-[1300px] w-[90%] bg-[#fff]/30 rounded-[12px] md:min-h-[600px] min-h-[600px] hover:opacity-100 duration-500 overflow-hidden bg-cover bg-no-repeat bg-center z-20`}
        >
          <div className="w-full h-full absolute inset-0">
            <img
              src="/hero-bg-1.webp"
              alt="hero bg 1"
              className="absolute inset-[0px] w-full h-full object-cover duration-300"
              style={{ opacity: page == 1 ? 1 : 0 }}
            />
            <img
              src="/hero-bg-2.webp"
              alt="hero bg 2"
              className="absolute inset-[0px] w-full h-full object-cover duration-300"
              style={{ opacity: page == 2 ? 1 : 0 }}
            />
            <img
              src="/hero-bg-3.webp"
              alt="hero bg 3"
              className="absolute inset-[0px] w-full h-full object-cover duration-300"
              style={{ opacity: page == 3 ? 1 : 0 }}
            />
            <img
              src="/hero-bg-4.webp"
              alt="hero bg 4"
              className="absolute inset-[0px] w-full h-full object-cover duration-300"
              style={{ opacity: page == 4 ? 1 : 0 }}
            />
          </div>
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

          <div className="flex flex-row items-center justify-center w-full absolute bottom-[10px] gap-[10px] h-[20px]">
            <button
              onClick={() => setPage(1)}
              className="rounded-full bg-[#fff] border-[0px] duration-300"
              style={{
                width: page == 1 ? 20 : 10,
                height: page == 1 ? 20 : 10,
              }}
            ></button>
            <button
              onClick={() => setPage(2)}
              className="rounded-full bg-[#fff] border-[0px] duration-300"
              style={{
                width: page == 2 ? 20 : 10,
                height: page == 2 ? 20 : 10,
              }}
            ></button>
            <button
              onClick={() => setPage(3)}
              className="rounded-full bg-[#fff] border-[0px] duration-300"
              style={{
                width: page == 3 ? 20 : 10,
                height: page == 3 ? 20 : 10,
              }}
            ></button>
            <button
              onClick={() => setPage(4)}
              className="rounded-full bg-[#fff] border-[0px] duration-300"
              style={{
                width: page == 4 ? 20 : 10,
                height: page == 4 ? 20 : 10,
              }}
            ></button>
          </div>

          <img
            src="/casino-assessment-logo.webp"
            alt="logo"
            className="w-[200px] object-contain absolute bottom-[20px] left-[34px]"
          />
        </div>
        <div className="w-full absolute bottom-[0px] z-30">
          <WinnersCarousel />
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
