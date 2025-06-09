import React, { useState } from "react";
import {
  BiExit,
  BiSolidCoin,
  BiSolidCrown,
  BiSolidHome,
  BiSolidJoystick,
  BiSolidTrophy,
  BiSolidWallet,
} from "react-icons/bi";
import { useAuth } from "../../../contexts/AuthContext";
import Modal from "../../Modal";
import Login from "./Login";
import Deposit from "./Deposit";
import { FaEthereum } from "react-icons/fa";

interface SideNav {
  show: boolean;
}

const SideNav: React.FC<SideNav> = ({ show }) => {
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showDepositModal, setShowDepositModal] = useState<boolean>(false);

  const shortenAddress = (
    address: string,
    startLength = 6,
    endLength = 4
  ): string => {
    if (!address) return "";
    if (address.length <= startLength + endLength) return address;
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
  };

  return (
    <>
      <div
        className="fixed z-40 top-[70px] w-[300px] h-screen duration-500 px-[20px] py-[10px] ease-out"
        style={{ left: show ? 0 : -350 }}
      >
        <div className="flex flex-col bg-[#1f1d2b] w-full h-full rounded-[12px] border-[1px] border-[#353345] p-[10px] gap-[10px]">
          {user != null ? (
            <>
              <button className="md:hidden flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[1px] border-[#353345] gap-[6px]">
                Welcome back!{" "}
                <span className="mr-[20px] flex items-center gap-[6px] font-bold">
                  {user.username}
                </span>
                <BiSolidWallet className="text-[16px]" />
                {shortenAddress(user.wallet)}
              </button>
              <button
                onClick={() => setShowDepositModal(true)}
                className="md:hidden flex items-center justify-start relative px-[20px] w-full h-[40px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer"
              >
                <FaEthereum className="group-hover:text-[#fff] text-[#110c17] text-[18px] duration-500" />
                <p className="group-hover:text-[#fff] text-[#110c17] duration-500 font-orbitron tracking-[2px] max-w-[120px] truncate">
                  {user.balance.toFixed(5)}
                </p>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowLoginModal(true)}
                className="md:hidden flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[1px] border-[#353345] gap-[10px] cursor-pointer"
              >
                <BiSolidWallet className="text-[16px]" />
                Log In
              </button>
              <button className="md:hidden flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[10px] cursor-pointer">
                <BiSolidCrown className="group-hover:text-[#fff] text-[#110c17] text-[16px] duration-500" />
                <p className="group-hover:text-[#fff] text-[#110c17] duration-500">
                  Sign Up
                </p>
              </button>
            </>
          )}

          <button className="flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[0px] gap-[12px] cursor-pointer text-[14px] group">
            <BiSolidHome className="group-hover:text-[#fff] text-[#0f747b] duration-500 text-[16px]" />
            Home
          </button>
          <button className="flex relative items-center justify-start w-full px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[0px] gap-[12px] cursor-pointer text-[14px] group">
            <BiSolidJoystick className="group-hover:text-[#fff] text-[#0f747b] duration-500 text-[16px]" />
            Games
            <div className="flex absolute right-[20px] items-center justify-center h-[20px] px-[8px] rounded-[4px] bg-[#00cccc]">
              <p className="text-[10px] text-[#110c17]">NEW</p>
            </div>
          </button>
          {user != null && (
            <>
              <button
                // onClick={() => toDashboard()}
                className="flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[0px] gap-[12px] cursor-pointer text-[14px] group"
              >
                <BiSolidTrophy className="group-hover:text-[#fff] text-[#0f747b] duration-500 text-[16px]" />
                Dashboard
              </button>
              <button
                onClick={() => setShowDepositModal(true)}
                className="flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[0px] gap-[12px] cursor-pointer text-[14px] group"
              >
                <BiSolidCoin className="group-hover:text-[#fff] text-[#0f747b] duration-500 text-[16px]" />
                Deposit
              </button>
              <button
                onClick={() => logout()}
                className="flex items-center justify-start relative w-full px-[20px] h-[40px] rounded-[8px] bg-[#f94449] hover:bg-[#f94449]/50 group duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer"
              >
                <BiExit className="text-[#fff] text-[16px] duration-500" />
                <p className="text-[#fff] duration-500">Logout</p>
              </button>
            </>
          )}
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

export default SideNav;
