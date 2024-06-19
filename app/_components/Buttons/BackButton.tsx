import React from "react";
import { arrowLeft } from "@/assets/asset";
import Image from "next/image";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-6 lg:px-[4.5rem] flex items-center gap-1.5 text-white justify-center mb-4 lg:mb-10 text-xs font-bold"
    >
      <Image src={arrowLeft} alt="Left arrow" />
      Back
    </button>
  );
};

export default BackButton;
