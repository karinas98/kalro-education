import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/kalro-black-logo.png";
const Footer = () => {
  return (
    <footer className="w-full  bg-[#FBFBFB] py-20  px-4 md:px-12 flex-col md:flex-row flex justify-between md:items-end">
      {/* Left Side - Logo and Contact Info */}

      <div className="flex pl-[20px] flex-col lg:pl-[80px] space-x-4">
        <Image src={Logo} alt="Kalro Education Logo" width={250} />
        <p className="text-[16px] font-light">
          <a href="mailto:Krish@kalrocapital.com" className="hover:underline">
            Krish@kalrocapital.com
          </a>
        </p>
        <p className="text-[16px] font-semibold ">
          <a href="tel:+447789687056" className="hover:underline">
            +44 (0)77 8968 7056
          </a>
        </p>
      </div>

      <div className="text-left md:text-right pr-[80px] text-[16px]">
        <p>51 Harley Street, London, W1G 8QQ</p>
      </div>
    </footer>
  );
};

export default Footer;
