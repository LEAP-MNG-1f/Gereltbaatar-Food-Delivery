import { HeeFooterIcon } from "../svg/HeeFooterIcon";
import * as React from "react";
import { PineconeLogoWhite } from "../svg/PineconeLogoWhite";
import Link from "@mui/material/Link";
import { TwitterIcon } from "../svg/TwitterIcon";
import { InstagramIcon } from "../svg/InstagramIcon";
import { FacebookIcon } from "../svg/FacebookIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="bg-BrandGreen pt-[114px] pb-[109px] flex items-center justify-center relative">
          <HeeFooterIcon />
          <div className="container m-auto max-w-[1200px]">
            <div className="flex flex-col gap-10">
              <div className="flex gap-2 items-center justify-center">
                <div className="p-2">
                  <PineconeLogoWhite />
                </div>
                <p className="font-Poppins font-bold text-xl not-italic text-white">
                  Food Delivery
                </p>
              </div>
              <div className="flex justify-between">
                <Link href="#" color="#fff">
                  <p className="font-Poppins text-base font-semibold not-italic">
                    Нүүр
                  </p>
                </Link>
                <Link href="#" color="#fff">
                  <p className="font-Poppins text-base font-semibold not-italic">
                    Холбоо барих
                  </p>
                </Link>
                <Link href="#" color="#fff">
                  <p className="font-Poppins text-base font-semibold not-italic">
                    Хоолны цэс
                  </p>
                </Link>
                <Link href="#" color="#fff">
                  <p className="font-Poppins text-base font-semibold not-italic">
                    Үйлчилгээний нөхцөл
                  </p>
                </Link>
                <Link href="#" color="#fff">
                  <p className="font-Poppins text-base font-semibold not-italic">
                    Хүргэлтийн бүс
                  </p>
                </Link>
                <Link href="#" color="#fff">
                  <p className="font-Poppins text-base font-semibold not-italic">
                    Нууцлалын бодлого
                  </p>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-[18px] p-[5px]">
                <TwitterIcon />
                <InstagramIcon />
                <FacebookIcon />
              </div>
              <div className="w-full border border-white border-t-0 "></div>
              <div className="flex flex-col gap-2 items-center">
                <p className=" font-Poppins font-normal text-base text-white not-italic">
                  © 2024 Pinecone Foods LLC
                </p>
                <p className=" font-Poppins font-normal text-base text-white not-italic">
                  Зохиогчийн эрх хуулиар хамгаалагдсан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
