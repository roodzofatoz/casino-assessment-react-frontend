import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [redirectURL, setRedirectURL] = useState<string>("");
  const [downloadMetaMask, setDownloadMetaMask] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const isMetaMaskInstalled = () =>
      typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;

    if (!isMetaMaskInstalled()) {
      setDownloadMetaMask(true);
      const ua = navigator.userAgent;
      const isMobile = /android|iphone|ipad|ipod/i.test(ua);
      const isChrome = /chrome/i.test(ua) && !/edge/i.test(ua);
      const isFirefox = /firefox/i.test(ua);

      const redirectUrl = isMobile
        ? "https://metamask.app.link/dapp/virtualeconomyforum.com/claim" // Replace with your domain
        : isChrome
          ? "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
          : isFirefox
            ? "https://addons.mozilla.org/firefox/addon/ether-metamask/"
            : "https://metamask.io/download/";

      setRedirectURL(redirectUrl);
    }
  }, [window]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current?.checkValidity()) {
      login(username);
      toast.success("Logged in successfully!");
    } else {
      formRef.current?.reportValidity();
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-[0px]">
      <h1 className="tracking-[6px] font-orbitron">LOGIN</h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-center gap-[24px] w-[96%]"
      >
        <div className="flex flex-col w-full">
          <p className="mb-[4px] ml-[6px]">Username</p>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(/\s/g, ""))}
            className="text-center rounded-[6px] bg-[#302e3f]/50 hover:bg-[#302e3f] focus:bg-[#302e3f] h-[40px] w-full border-[1px] caret-[#00cccc] duration-300 border-[#302e3f] focus:border-[#00cccc] outline-none"
          />
        </div>

        {downloadMetaMask ? (
          <a
            href={redirectURL}
            target="_blank"
            className="flex w-full items-center justify-center relative no-underline h-[50px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[10px] cursor-pointer"
          >
            <img
              src="/metamask-logo.svg"
              alt="Metamask"
              className="w-[30px] object-contain"
            />
            <p className="group-hover:text-[#fff] text-[#110c17] duration-500 no-underline">
              DOWNLOAD METAMASK
            </p>
          </a>
        ) : (
          <button
            type="submit"
            className="flex w-full items-center justify-center relative h-[50px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[10px] cursor-pointer"
          >
            <img
              src="/metamask-logo.svg"
              alt="Metamask"
              className="w-[30px] object-contain"
            />
            <p className="group-hover:text-[#fff] text-[#110c17] duration-500">
              LOGIN WITH METAMASK
            </p>
          </button>
        )}

        <a
          href="#"
          className="text-[#00cccc] mb-[20px] hover:tracking-[2px] duration-500 decoration-none hover:text-[#fff]"
        >
          Need help?
        </a>
      </form>
    </div>
  );
};

export default Login;
