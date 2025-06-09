import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import { useGeneralContext } from "../../contexts/GeneralContext";

const Navigation: React.FC = () => {
  const { setNavOpenIndicator } = useGeneralContext();
  const [showSideNav, setShowSideNav] = useState<boolean>(true);

  useEffect(() => {
    setNavOpenIndicator(showSideNav);
  }, [showSideNav]);

  return (
    <>
      <TopNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <SideNav show={showSideNav} />
    </>
  );
};

export default Navigation;
