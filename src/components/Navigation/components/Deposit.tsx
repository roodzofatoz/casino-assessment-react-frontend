import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import toast from "react-hot-toast";

const Deposit: React.FC = () => {
  const { setBalance } = useAuth();
  const [depositAmount, setDepositAmount] = useState<number>(0);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current?.checkValidity()) {
      const amount = depositAmount + depositAmount * 2;
      setBalance(amount);
      toast.success("Deposit Successful");
    } else {
      formRef.current?.reportValidity();
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-[0px]">
      <h1 className="tracking-[6px] font-orbitron">DEPOSIT</h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-center gap-[24px] w-[96%]"
      >
        <div className="flex flex-col w-full">
          <p className="mb-[4px] ml-[6px]">Deposit amount</p>
          <input
            type="number"
            required
            value={depositAmount}
            onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
            className="text-center rounded-[6px] bg-[#302e3f]/50 hover:bg-[#302e3f] focus:bg-[#302e3f] h-[40px] w-full border-[1px] caret-[#00cccc] duration-300 border-[#302e3f] focus:border-[#00cccc] outline-none"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center relative h-[50px] rounded-[8px] bg-[#00cccc] hover:bg-[#00cccc]/50 group duration-500 border-[1px] border-[#353345] gap-[10px] cursor-pointer"
        >
          <p className="group-hover:text-[#fff] font-bold text-[#110c17] duration-500">
            DEPOSIT
          </p>
        </button>

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

export default Deposit;
