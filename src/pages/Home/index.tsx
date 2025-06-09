import React from "react";
import { useGeneralContext } from "../../contexts/GeneralContext";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Security from "./components/Security";
import Games from "./components/Games";
import WinnersCarousel from "./components/WinnersCarousel";

const Home: React.FC = () => {
  const { navOpenIndicator } = useGeneralContext();
  return (
    <div
      className="block flex-col w-full h-screen text-white justify-start items-center overflow-hidden overflow-y-scroll duration-500 snap-y snap-proximity"
      style={{
        paddingLeft: navOpenIndicator ? 200 : 0,
      }}
    >
      <Hero />
      <Welcome />
      <Games />
      <Security />
      <WinnersCarousel />
      <Footer />
    </div>
  );
};

export default Home;
