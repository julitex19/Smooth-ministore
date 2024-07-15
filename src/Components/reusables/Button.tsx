import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-[#db4444] text-white font-normal py-3 px-6 rounded hover:bg-red-600 transition-colors duration-800 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
