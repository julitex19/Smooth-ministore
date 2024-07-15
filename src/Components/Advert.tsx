import React from 'react';

const Advert = () => {
  return (
    <header className="hidden bg-black h-14 md:flex justify-around items-center w-full">
      <div className="flex justify-center items-center ml-20 gap-2">
        <p className="text-white text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a href="/" className="text-white text-sm font-semibold">
          Shop Now
        </a>
      </div>
      <div>
        <select className="border-none bg-transparent text-white text-base focus:outline-none">
          <option value="">English</option>
          <option value="">Mandarin</option>
          <option value="">Japanese</option>
          <option value="">Russian</option>
        </select>
      </div>
    </header>
  );
};

export default Advert;
