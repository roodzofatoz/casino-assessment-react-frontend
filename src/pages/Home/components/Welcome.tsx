import React, { useEffect, useRef, useState } from "react";
import Modal from "../../../components/Modal";
import Login from "../../../components/Navigation/components/Login";
import { useAuth } from "../../../contexts/AuthContext";
import Deposit from "../../../components/Navigation/components/Deposit";

const Welcome: React.FC = () => {
  const duration = 1500;
  const target = 200;

  const { user } = useAuth();

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showDepositModal, setShowDepositModal] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          startCounting();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  const startCounting = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we end exactly at the target
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-[20px] snap-center">
        <h1 ref={ref} className="w-[90%] text-center text-[40px] font-orbitron">
          A Welcome Bonus awaits you!
        </h1>
        <div className="w-full flex flex-col items-center justify-center bg-[#000]/50 pt-[20px] pb-[30px] relative">
          <img
            src="/aura-effect.webp"
            alt="Aura"
            className="z-10 h-full object-contain absolute left-[0px] duration-500"
            style={{
              opacity: hasStarted ? 1 : 0,
            }}
          />
          <img
            src="/aura-effect.webp"
            alt="Aura"
            className="z-10 h-full object-contain rotate-180 absolute right-[0px] duration-500"
            style={{
              opacity: hasStarted ? 1 : 0,
            }}
          />
          <h1 className="md:text-[200px] text-[100px] text-[#00cccc] mb-[10px] mt-[-20px] font-orbitron z-20">
            {count.toLocaleString()}%
          </h1>
          <div className="flex flex-row items-center justify-center w-full">
            <div className="w-full h-[2px] bg-[#00cccc] rounded-full"></div>
            <p className="font-poppins font-light truncate w-[800px] text-center">
              IS MATCHED ON YOUR DEPOSIT
            </p>

            <div className="w-full h-[2px] bg-[#00cccc] rounded-full"></div>
          </div>
          <button
            onClick={() => {
              user == null
                ? setShowLoginModal(true)
                : setShowDepositModal(true);
            }}
            className="z-20 font-bold tracking-[3px] flex text-[20px] text-[#00cccc] items-center justify-center relative px-[30px] h-[50px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer"
          >
            CLAIM NOW
          </button>
        </div>
      </div>
      <Modal
        show={showLoginModal}
        setShow={setShowLoginModal}
        children={<Login />}
      />
      <Modal
        show={showDepositModal}
        setShow={setShowDepositModal}
        children={<Deposit />}
      />
    </>
  );
};

export default Welcome;
