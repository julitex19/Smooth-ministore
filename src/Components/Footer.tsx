import Link from 'next/link';
import Image from 'next/image';
import qrcode from '../../public/qr.svg';
import playstore from '../../public/googleplay.svg';
import appstore from '../../public/AppStore.svg';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuLinkedin } from 'react-icons/lu';
import { VscSend } from "react-icons/vsc";


const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/julitex19" },
    { icon: <FaXTwitter />, url: "http://linkedin.com/in/julietobi" },
    { icon: <LuLinkedin />, url: "http://linkedin.com/in/julietobi" },
    { icon: <FaInstagram />, url: "http://linkedin.com/in/julietobi" },
  ];

  return (
    <footer className="bg-black mt-24">
      <div className="container mx-auto px-4 py-8 flex flex-wrap md:justify-around gap-8 text-white">

        {/* Exclusive Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-normal">Exclusive</h3>
          <ul className="text-sm">
            <li className="py-2"><a href="/">Subscribe</a></li>
            <li className="py-2"><a href="/">Get 10% off your first order</a></li>
          </ul>
          <div className="relative mt-4">
            <input
              type="email"
              className="p-3 border border-white rounded-md w-56 bg-transparent text-white text-sm"
              placeholder="Enter Your Email?"
            />
            <button className="absolute top-3 right-3 bg-black cursor-pointer">
              <VscSend size={26}/>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="">
          <h4 className="text-xl font-normal">Support</h4>
          <p className="text-base font-light py-2 ">120, Off Cresent way Alagbaka,<br /> Akure, Ondo State, NIgeria.</p>
          <a href="/" className="text-base font-light">exclusive@gmail.com</a>
          <p className="text-base font-light py-2">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="text-white">
          <h4 className="text-xl font-normal">Account</h4>
          <ul className="mt-2 text-sm">
            <li className="py-2">
              <Link href="/account" legacyBehavior>
                <a>My Account</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/login" legacyBehavior>
                <a>Login / Register</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/cart" legacyBehavior>
                <a>Cart</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/wishlist" legacyBehavior>
                <a>Wishlist</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/shop" legacyBehavior>
                <a>Shop</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="text-white">
          <h4 className="text-xl font-normal">Quick link</h4>
          <ul className="mt-2 text-sm">
            <li className="py-2"><a href="/">Privacy Policy</a></li>
            <li className="py-2"><a href="/">Terms Of Use</a></li>
            <li className="py-2"><a href="/">FAQ</a></li>
            <li className="py-2"><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="text-white">
          <h3 className="text-xl font-normal">Download App</h3>
          <span className="text-gray-400 text-sm font-light block mt-2">Save $3 with App New User Only</span>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-18 h-18">
              <Image src={qrcode} alt="Qrcode" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={playstore} alt={"Google Play"} width={115} height={40} />
              <Image src={appstore} alt={"App store"} width={118} height={40} />
            </div>
          </div>

          <div className="pt-3">
            <div className="flex items-center gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[1.2rem] text-brandSecondary dark:text-brandGray2 dark:hover:text-darkPrimary hover:text-brandPrimary cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-100"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
           
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 py-4 border-t border-gray-800">
        <p className="text-gray-400 text-sm font-light">Copyright Juliet HNG ©2024 All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
