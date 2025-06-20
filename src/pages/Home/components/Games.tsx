import React from "react";

const Games: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen snap-center gap-[20px]">
      <h1 className="w-[90%] text-center text-[40px] font-orbitron">Games</h1>
      <p className="mt-[-50px]">Play our Crypto games and win prizes</p>

      <div className="flex flex-wrap items-center justify-center gap-[20px] w-full">
        <div className="flex relative max-w-[400px] w-[96%] h-[200px] rounded-[12px] border-[2px] border-[#fff]/30 bg-[url(/game-bg-roulette.png)] group hover:bg-size-[130%] overflow-hidden hover:border-[#fff] bg-size-[100%] bg-no-repeat bg-top duration-500">
          <div className="flex z-20 absolute top-[10px] right-[12px] items-center justify-center h-[20px] px-[8px] rounded-[4px] bg-[#00cccc]">
            <p className="text-[12px] text-[#110c17] font-poppins font-weight">
              NEW
            </p>
          </div>
          <div className="z-10 group-hover:opacity-100 opacity-0 duration-500 flex flex-col items-center justify-center px-[20px] gap-[4px] w-full h-full bg-[#000]/80 backdrop-blur-[4px]">
            <h2 className="font-orbitron mb-[-4px]">CRYPTO ROULETTE</h2>
            <p className="text-center">
              Play Crypto Roulette and get a chance to win!
            </p>
            <button className="cursor-pointer rounded-full flex items-center justify-center text-[#00cccc] hover:text-[#000] tracking-[2px] hover:bg-[#00cccc] duration-500 h-[30px] px-[18px] bg-transparent border-[1px] hpver:border-[#00cccc]/0 border-[#00cccc]">
              {" "}
              PLAY NOW{" "}
            </button>
          </div>
        </div>
        <div className="flex relative max-w-[400px] w-[96%] h-[200px] rounded-[12px] border-[2px] border-[#fff]/30 bg-[url(/game-bg-baccarat.png)] group hover:bg-size-[130%] overflow-hidden hover:border-[#fff] bg-size-[100%] bg-no-repeat bg-center duration-500">
          <div className="z-10 group-hover:opacity-100 opacity-0 duration-500 flex flex-col items-center justify-center px-[20px] gap-[4px] w-full h-full bg-[#000]/80 backdrop-blur-[4px]">
            <h2 className="font-orbitron mb-[-4px]">CRYPTO BACCARAT</h2>
            <p className="text-center">
              Play Crypto Baccarat and get a chance to win!
            </p>
            <button className="cursor-pointer rounded-full flex items-center justify-center text-[#00cccc] hover:text-[#000] tracking-[2px] hover:bg-[#00cccc] duration-500 h-[30px] px-[18px] bg-transparent border-[1px] hpver:border-[#00cccc]/0 border-[#00cccc]">
              {" "}
              PLAY NOW{" "}
            </button>
          </div>
        </div>
        <div className="flex relative max-w-[400px] w-[96%] h-[200px] rounded-[12px] border-[2px] border-[#fff]/30 bg-[url(/game-bg-blackjack.png)] group hover:bg-size-[130%] overflow-hidden hover:border-[#fff] bg-size-[100%] bg-no-repeat bg-center duration-500">
          <div className="z-10 group-hover:opacity-100 opacity-0 duration-500 flex flex-col items-center justify-center px-[20px] gap-[4px] w-full h-full bg-[#000]/80 backdrop-blur-[4px]">
            <h2 className="font-orbitron mb-[-4px]">CRYPTO BLACKJACK</h2>
            <p className="text-center">
              Play Crypto Blackjack and get a chance to win!
            </p>
            <button className="cursor-pointer rounded-full flex items-center justify-center text-[#00cccc] hover:text-[#000] tracking-[2px] hover:bg-[#00cccc] duration-500 h-[30px] px-[18px] bg-transparent border-[1px] hpver:border-[#00cccc]/0 border-[#00cccc]">
              {" "}
              PLAY NOW{" "}
            </button>
          </div>
        </div>
      </div>

      <button className="h-[50px] rounded-[12px] bg-[#00cccc] w-[300px] border-[0px] text-[#000] font-poppins tracking-[2px] cursor-pointer">
        SEE MORE GAMES
      </button>
    </div>
  );
};

export default Games;
