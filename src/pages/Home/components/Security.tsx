import React, { useEffect, useState } from "react";
import { BiCaretLeft, BiCaretRight, BiSolidInfoCircle } from "react-icons/bi";
interface Card {
  id: number;
  title: string;
  image: string;
  contents: string[];
}

const Security: React.FC = () => {
  // Generate a larger pool of cards to simulate infinity
  const initialCards: Card[] = [
    {
      id: 1,
      title: "Licensing & Compliance",
      image: "/gaming-authority-badge.png",
      contents: [
        "Licensed by the Curarao Gaming Authority",
        "Compliant with international AML & KYC standards",
        "18+ Only - Responsible Gaming",
      ],
    },
    {
      id: 2,
      title: "Fair Play",
      image: "/fair-gaming-badge.png",
      contents: [
        "Provably Fair Gaming",
        "Game outcomes verified by independent RNG auditors",
      ],
    },
    {
      id: 3,
      title: "Security",
      image: "/audited-smart-contracts-badge.png",
      contents: [
        "256-bit SSL Encryption",
        "Crypto Wallet Security - No custody of funds",
        "Audited Smart Contracts",
      ],
    },
  ];

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [selectedIndex, setSelectedIndex] = useState(3); // Start with center card
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Handle infinite scroll effect
  useEffect(() => {
    if (selectedIndex <= 2) {
      // When reaching near the start, add more cards to the beginning
      setTransitionEnabled(false);
      setCards((prev) => [
        ...initialCards.map((card) => ({
          ...card,
          id: card.id - initialCards.length * 1000,
        })),
        ...prev,
      ]);
      setSelectedIndex((prev) => prev + initialCards.length);
      setTimeout(() => setTransitionEnabled(true), 50);
    } else if (selectedIndex >= cards.length - 3) {
      // When reaching near the end, add more cards to the end
      setTransitionEnabled(false);
      setCards((prev) => [
        ...prev,
        ...initialCards.map((card) => ({
          ...card,
          id: card.id + initialCards.length * 1000,
        })),
      ]);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [selectedIndex]);

  const calculateCardStyle = (index: number) => {
    const distance = index - selectedIndex;
    const absDistance = Math.abs(distance);

    // Base styles for all cards
    const baseStyles =
      " shadow-lg bg-[#000] p-[12px] w-[200px] h-[340px] py-[20px] cursor-pointer rounded-[12px]";

    // Center card (selected)
    if (distance === 0) {
      return `${baseStyles} scale-110 opacity-100 z-10 border-[2px] border-[#00cccc] drop-shadow-[0_15px_15px_rgba(0,204,204,0.25)]`;
    }

    // Nearby cards
    if (absDistance === 1) {
      return `${baseStyles} scale-90 opacity-50 z-5 blur-[2px] border-[2px] border-[#00cccc]/0`;
    }

    // Further cards
    if (absDistance === 2) {
      return `${baseStyles} scale-60 opacity-10 z-0 blur-[8px] border-[2px] border-[#00cccc]/0`;
    }

    // Distant cards
    return `${baseStyles} scale-30 opacity-0 z-0`;
  };

  const calculateTransform = (index: number) => {
    const distance = index - selectedIndex;
    return `translateX(${distance * 300}px)`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-orbitron text-center">
        Trust and Security
      </h1>
      <p className="mt-[-30px] text-center">
        You can trust us, security is our priority
      </p>

      <div className="relative max-w-[900px] w-full h-[620px] overflow-hidden mb-[-60px]">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-full">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute flex flex-col items-center justify-center gap-[1px] ${calculateCardStyle(index)} ${
                transitionEnabled
                  ? "transition-all duration-500 ease-in-out"
                  : ""
              } `}
              style={{
                transform: calculateTransform(index),
              }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={card.image}
                alt="Card Image"
                className="absolute top-[-120px] w-[200px] object-contain"
              />
              <h2 className="text-xl font-semibold mb-[12px] text-center w-[90%]">
                {card.title}
              </h2>
              {card.contents.map((content) => {
                if (content == "Provably Fair Gaming") {
                  return (
                    <div className="flex items-center justify-center w-[96%] mb-[-4px] relative">
                      <p className="text-center w-full ">{content}</p>
                      <div className="absolute top-[16px] right-[-12px] group flex items-center justify-center">
                        <BiSolidInfoCircle className="text-[18px] text-[#fff]/50 group-hover:text-[#fff] duration-300" />

                        <div className="bg-[#fff]/80 backdrop-blur-[8px] rounded-[12px] flex items-center justify-center absolute left-[24px] w-[0px] duration-300 overflow-hidden group-hover:w-[200px] h-[60px]">
                          <p className=" text-center w-[190px] text-[12px] text-[#000] opacity-0 group-hover:opacity-100 duration-700">
                            This is a sample tooltip for Provably Fair Gaming
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                } else
                  return (
                    <p className="text-center w-[96%] mb-[-4px]">{content}</p>
                  );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex justify-center mt-[10px] gap-[6px] z-20">
        <button
          onClick={() => setSelectedIndex((prev) => prev - 1)}
          className=" text-white rounded-md border-[0px] bg-transparent transition-colors p-[10px]"
        >
          <BiCaretLeft className="text-[30px]" />
        </button>
        <button
          onClick={() => setSelectedIndex((prev) => prev + 1)}
          className="text-white rounded-md border-[0px] bg-transparent transition-colors p-[10px]"
        >
          <BiCaretRight className="text-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default Security;
