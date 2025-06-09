import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

interface Modal {
  show: boolean;
  setShow: Function;
  children: React.ReactNode;
}

const Modal: React.FC<Modal> = ({ show, setShow, children }) => {
  const { closeModal } = useAuth();
  const [viewModal, setViewModal] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setViewModal(show);
    }, 100);
  }, [show]);

  useEffect(() => {
    if (!viewModal || closeModal) {
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }, [viewModal, closeModal]);

  return (
    show && (
      <div
        className="fixed inset-[0px] z-[60] w-full h-screen flex items-center justify-center duration-500"
        style={{
          opacity: viewModal ? 1 : 0,
        }}
      >
        <div
          onClick={() => setViewModal(false)}
          className="absolute inset-[0px] w-full h-full bg-[#000]/60 backdrop-blur-[4px] z-10"
        />

        <div
          className={`max-w-[400px] w-full mx-[20px] border-[1px] border-[#353345] bg-[#110c17] py-[14px] px-[20px] rounded-[12px] z-20 ${viewModal ? "drop-shadow-[0_35px_35px_rgba(0,204,204,0.5)]" : "drop-shadow-[0_35px_35px_rgba(0,204,204,0)]"} duration-[1000ms] drop-shadow-lg`}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
