import React, { useState } from "react";
import {
  BiBitcoin,
  BiExit,
  BiSolidCrown,
  BiSolidUser,
  BiSolidUserCircle,
  BiSolidWallet,
} from "react-icons/bi";
import { FaEthereum, FaUserCircle } from "react-icons/fa";
import { RiMenu4Fill, RiMenuFill } from "react-icons/ri";
import Modal from "../../Modal";
import Login from "./Login";
import { useAuth } from "../../../contexts/AuthContext";
import Deposit from "./Deposit";

interface TopNav {
  showSideNav: boolean;
  setShowSideNav: Function;
}

const TopNav: React.FC<TopNav> = ({ showSideNav, setShowSideNav }) => {
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
      <div className="fixed top-[6px] z-50 left-[0px] w-full flex items-center justify-center">
        <div className="rounded-[12px] w-full h-[60px] mx-[20px] bg-[#1f1d2b] border-[1px] border-[#353345] text-white flex flex-row justify-between items-center px-[12px]">
          <div className="flex flex-row items-center gap-[24px]">
            <button
              onClick={() => setShowSideNav((oldValue: boolean) => !oldValue)}
              className="flex items-center justify-center relative w-[40px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[1px] border-[#353345]"
            >
              <RiMenu4Fill
                className="absolute inset-0 text-[#efefef] text-[16px] duration-500"
                style={{ width: showSideNav ? 16 : 0 }}
              />
              <RiMenuFill
                className="absolute inset-0  text-[#efefef]  text-[16px] duration-500"
                style={{ width: showSideNav ? 0 : 16 }}
              />
            </button>
            <img
              src="/casino-assessment-logo.webp"
              alt="Casino Assessment"
              className="h-[40px] object-contain"
            />
          </div>

          {user == null ? (
            <div className="lg:flex hidden flex-row items-center gap-[6px]">
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center justify-center relative px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer"
              >
                <BiSolidWallet className="text-[16px]" />
                Log In
              </button>
              <button className="flex items-center justify-center relative px-[20px] h-[40px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer">
                <BiSolidCrown className="group-hover:text-[#fff] text-[#110c17] text-[16px] duration-500" />
                <p className="group-hover:text-[#fff] text-[#110c17] duration-500">
                  Sign Up
                </p>
              </button>
            </div>
          ) : (
            <div className="md:flex hidden flex-row items-center gap-[6px]">
              <button className="flex items-center justify-center relative px-[20px] h-[40px] rounded-[8px] bg-[#302e3f]/50 hover:bg-[#302e3f] duration-500 border-[1px] border-[#353345] gap-[6px]">
                Welcome back!{" "}
                <span className="mr-[20px] flex items-center gap-[6px] font-bold">
                  {user.username}
                </span>
                <BiSolidWallet className="text-[16px]" />
                {shortenAddress(user.wallet)}
              </button>
              <button
                onClick={() => setShowDepositModal(true)}
                className="flex items-center justify-center relative px-[20px] h-[40px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer"
              >
                <FaEthereum className="group-hover:text-[#fff] text-[#110c17] text-[18px] duration-500" />
                <p className="group-hover:text-[#fff] text-[#110c17] duration-500 font-orbitron tracking-[2px] max-w-[120px] truncate">
                  {user.balance.toFixed(5)}
                </p>
              </button>
              <button
                onClick={() => logout()}
                className="flex items-center justify-center relative px-[20px] h-[40px] rounded-[8px] bg-[#f94449] hover:bg-[#f94449]/50 group duration-500 border-[1px] border-[#353345] gap-[6px] cursor-pointer"
              >
                <BiExit className="text-[#fff] text-[16px] duration-500" />
                <p className="text-[#fff] duration-500">Logout</p>
              </button>
            </div>
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

export default TopNav;
