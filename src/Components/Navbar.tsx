// "use client";
// import React, { useContext, useMemo, useState } from "react";
// import Link from "next/link";
// import { CiHeart, CiMenuFries } from "react-icons/ci";
// import { PiShoppingCartSimpleThin } from "react-icons/pi";
// import { IoIosAdd } from "react-icons/io";
// import { LiaTimesSolid } from "react-icons/lia";
// import Advert from "./Advert";
// import { StoreProvider } from "@/Providers/Context";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {
//     state: { cart },
//   } = useContext(StoreProvider);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const totalQuantity = useMemo(() => {
//     return cart.reduce((total: any, el: { qty: any; }) => total + el.qty, 0);
//   }, [cart]);

//   console.log(totalQuantity);

//   return (
//     <div className="fixed top-0 w-full z-50 shadow">
//       <Advert />
//       <nav className="bg-white ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 py-2">
//           <div className="flex items-center justify-between h-16 ">
//             <div className="flex items-center gap-20">
//               <div className="flex-shrink-0">
//                 <h1 className="text-black text-xl font-bold">Juliet</h1>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <Link
//                     href="/"
//                     className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     href="/about"
//                     className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     About
//                   </Link>
//                   <Link
//                     href="/contact"
//                     className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Contact
//                   </Link>
//                   <Link
//                     href="/signup"
//                     className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Signup
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:flex md:items-center md:space-x-8">
//               <input
//                 type="text"
//                 className="px-3 py-2 rounded-md text-sm bg-gray-100 text-black focus:outline-none"
//                 placeholder="Search..."
//               />
//               <CiHeart size="32" />
//               <Link href="/cart" className="relative">
//                 <span className="absolute -right-[4px] top-[1px] rounded-full w-4 h-4 text-xs bg-red-600 text-white flex justify-center items-center">
//                   {totalQuantity}
//                 </span>
//                 <PiShoppingCartSimpleThin size="32" />
//               </Link>
//               <IoIosAdd size="32" />
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 type="button"
//                 className=" inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isOpen}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {isOpen ? (
//                   <LiaTimesSolid size="32" />
//                 ) : (
//                   <CiMenuFries size="32" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div
//           className={`${isOpen ? "block" : "hidden"} md:hidden`}
//           id="mobile-menu"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               href="/"
//               className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/signup"
//               className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Signup
//             </Link>
//             <input
//               type="text"
//               className="px-3 py-2 rounded-md text-sm bg-gray-100 text-black w-full focus:outline-none"
//               placeholder="Search..."
//             />
//             <div className="flex justify-around py-2">
//               <CiHeart size="32" />
//               <div className="relative">
//                 <span className="absolute -right-[4px] top-[1px] rounded-full w-4 h-4 text-xs bg-red-600 text-white flex justify-center items-center">
//                   1
//                 </span>
//                 <PiShoppingCartSimpleThin size="32" />
//               </div>
//               <IoIosAdd size="32" />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



"use client";
import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { CiHeart, CiMenuFries } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { IoIosAdd } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import Advert from "./Advert";
import { StoreProvider } from "@/Providers/Context";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    state: { cart },
  } = useContext(StoreProvider);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const totalQuantity = useMemo(() => {
    return cart.reduce((total, el) => total + el.qty, 0);
  }, [cart]);

  return (
    <div className="fixed top-0 w-full z-50 shadow">
      <Advert />
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 py-2">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center gap-20">
              <div className="flex-shrink-0">
                <h1 className="text-black text-xl font-bold">Juliet</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/signup"
                    className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <input
                type="text"
                className="px-3 py-2 rounded-md text-sm bg-gray-100 text-black focus:outline-none"
                placeholder="Search..."
              />
              <CiHeart size="32" />
              <Link href="/cart" className="relative">
                <span className="absolute -right-[4px] top-[1px] rounded-full w-4 h-4 text-xs bg-red-600 text-white flex justify-center items-center">
                  {totalQuantity}
                </span>
                <PiShoppingCartSimpleThin size="32" />
              </Link>
              <IoIosAdd size="32" />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <LiaTimesSolid size="32" />
                ) : (
                  <CiMenuFries size="32" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              href="/signup"
              className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Signup
            </Link>
            <input
              type="text"
              className="px-3 py-2 rounded-md text-sm bg-gray-100 text-black w-full focus:outline-none"
              placeholder="Search..."
            />
            <div className="flex justify-around py-2">
              <CiHeart size="32" />
              <div className="relative">
                <span className="absolute -right-[4px] top-[1px] rounded-full w-4 h-4 text-xs bg-red-600 text-white flex justify-center items-center">
                  1
                </span>
                <PiShoppingCartSimpleThin size="32" />
              </div>
              <IoIosAdd size="32" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

