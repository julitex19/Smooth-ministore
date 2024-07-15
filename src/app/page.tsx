"use client";
import React from "react";
import { Carousel, Dropdown, Menu } from "antd";
import Image from "next/image";
import fendi from "../../public/fendi.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import FlashSales from "@/Components/FlashSales";
// import NewArrival from "@/Components/NewArrival";
// import Delivery from "@/Components/Delivery";
// import ProductCard from "@/Components/ProductCard";
// import Categories from "@/Components/Categories";
// import BestSelling from "@/Components/BestSelling";
// import OurProducts from "@/Components/OurProducts";
// import BrouseCategory from "@/Components/BrouseCategory";




const carouselImages = [
  { src: "/bag.svg", alt: "Image 1", width: 250, height: 120 },
  { src: "/bag2.svg", alt: "Image 2", width: 250, height: 120 },
  { src: "/blackiphone.jpeg", alt: "Image 3", width: 250, height: 120 },
  { src: "/iphone14pro.jpeg", alt: "Image 4", width: 250, height: 120 },
];

const menu = (
  <Menu>
    <Menu.Item key="1">clothings</Menu.Item>
    <Menu.Item key="2">Handbags</Menu.Item>
    <Menu.Item key="3">Perfumes</Menu.Item>
    <Menu.Item key="3">footwears</Menu.Item>
    <Menu.Item key="3">Jeweries</Menu.Item>
    <Menu.Item key="3">accessories</Menu.Item>
    <Menu.Item key="3">Perfumes</Menu.Item>
  </Menu>
);

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 mt-[4.6rem] md:mt-[7.6rem]">
        <div className="py-4">
        <div className="flex flex-col-reverse md:flex-row gap-20">
          <div className="md:border-r py-4  pr-2">
            <Dropdown overlay={menu} trigger={["hover"]}>
              <p className="flex items-center gap-10">
                men&apos;s fashion
                <span className="ml-16 cursor-pointer">
                  <IoIosArrowForward />
                </span>
              </p>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["hover"]}>
              <p className="flex items-center gap-4">
                Women&apos;s fashion
                <span className="ml-16 cursor-pointer">
                  <IoIosArrowForward />
                </span>
              </p>
            </Dropdown>

            <p>men fashion</p>
            <p>men fashion</p>
            <p>men fashion</p>
            <p>men fashion</p>
            <p>men fashion</p>
            <p>men fashion</p>
            <p>men fashion</p>
          </div>
          <div className="bg-black md:w-[50rem] md:h-[20rem] mt-6 flex flex-col-reverse md:flex-row justify-center items-center text-white">
            <div className="pb-10">
              <div className="flex gap-2 items-center">
                <Image src={fendi} alt="fendi" width={20} />
                <p className="text-white text-xs">FENDI YEARLY SERIES</p>
              </div>
              <h3 className="text-[48px] w-[19rem] font-semibold">
                Up to 10% off Voucher
              </h3>
              <p className="flex items-center text-sm">
                shop now <IoIosArrowRoundForward size={20} />
              </p>
            </div>
            <div className="w-[350px]">
              <Carousel autoplay>
                {carouselImages.map((image, index) => (
                  <div key={index} className="ml-12 md:ml-16 py-6">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
