import React, { useState, useEffect, useCallback } from "react";

interface Winner {
  id: number;
  username: string;
  amount: string;
}

const WinnersCarousel: React.FC = () => {
  // Generate random usernames
  const generateUsername = () => {
    const prefixes = [
      "Crypto",
      "Block",
      "Ether",
      "DeFi",
      "Web3",
      "NFT",
      "Meta",
      "Chain",
    ];
    const suffixes = [
      "Master",
      "King",
      "Queen",
      "Whale",
      "Trader",
      "Hunter",
      "Guru",
      "Legend",
    ];
    const randomNumber = Math.floor(Math.random() * 1000);
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${prefix}${suffix}${randomNumber}`;
  };

  // Generate random ETH amount (0.0001 to 10 ETH)
  const generateAmount = () => {
    const amount = Math.random() * 10;
    return amount < 0.0001 ? 0.0001 : parseFloat(amount.toFixed(4));
  };

  // Generate initial winners
  const generateWinners = (count: number): Winner[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      username: generateUsername(),
      amount: generateAmount().toString(),
    }));
  };

  const [winners, setWinners] = useState<Winner[]>(generateWinners(10));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate to next winner
  const rotateWinners = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      // If at the end, generate new winners and reset
      if (prevIndex >= winners.length - 1) {
        // Keep last 5 winners and add 5 new ones
        const newWinners = [...winners.slice(-5), ...generateWinners(5)];
        setWinners(newWinners);
        return 5; // Continue from the first new winner
      }
      return prevIndex + 1;
    });
  }, [winners]);

  // Set up the rotation interval
  useEffect(() => {
    const interval = setInterval(rotateWinners, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [rotateWinners]);

  // Animation styles
  const getItemStyle = (index: number) => {
    const distance = Math.abs(index - currentIndex);

    return {
      transform: `translateX(${(index - currentIndex) * 120}%)`,
      opacity: 1 - distance * 0.3,
      zIndex: 10 - distance,
      transition: "all 0.5s ease-in-out",
    };
  };

  return (
    <div className="flex flex-row items-center justify-center relative h-[40px] overflow-hidden  bg-[#00cccc] py-[1px] w-full">
      {winners.map((winner, index) => (
        <div
          key={`${winner.id}-${index}`}
          className="absolute top-0 left-0 flex items-center justify-center w-[300px] text-white whitespace-nowrap bg-[#1f1d2b]/80 hover:bg-[#1f1d2b] duration-300 rounded-[6px] gap-[4px]"
          style={getItemStyle(index)}
        >
          <span className="font-bold ">{winner.username}</span> won{" "}
          <span className="font-bold ">{winner.amount} ETH</span>
        </div>
      ))}
    </div>
  );
};

export default WinnersCarousel;
