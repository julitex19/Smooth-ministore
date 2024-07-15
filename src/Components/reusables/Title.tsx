// ./src/components/Title.tsx
import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
   <div className='flex items-center gap-4'>
    <button className=" w-5 min-h-[40px] text-base font-semibold font-poppins bg-[#db4444] rounded-md mt-8"></button>
     <h1 className={`text-sm font-bold mt-8 ${className}`}>
      {text}
    </h1>
   </div>
  );
};

export default Title;
