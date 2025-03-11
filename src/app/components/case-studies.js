"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import FarnboroughImg from "@/app/assets/farnborough.jpeg";
import StoneygateImg from "@/app/assets/stoneygate-leicester.jpg";
import BurgessImg from "@/app/assets/burgess-hill-2.jpeg";
import BricklehurstImg from "@/app/assets/bricklehurst-manor.jpg";
import BurgessImg1 from "@/app/assets/bricklehurst-1.jpeg";
import BurgessImg2 from "@/app/assets/bricklehurst-2.jpeg";
import BurgessImg3 from "@/app/assets/bricklehurst-3.jpeg";
import Napier1 from "@/app/assets/farnborough2.jpeg";
import Napier2 from "@/app/assets/farnborough3.jpeg";
import Hambrooke2 from "@/app/assets/hambrook2.jpeg";
import Hambrooke4 from "@/app/assets/hambrook4.jpeg";
import Napier3 from "@/app/assets/farnborough1.jpeg";

const caseStudies = [
  {
    id: "bricklehurst",
    number: "1",
    title: "Bricklehurst School, Wadhurst",
    description:
      "This former prep school was sourced by Kalro in May 2023 on behalf of a national SEND education provider. The building is listed and therefore listed building consent was required for the upgrading and refurbishment works. This was finally obtained in Jan 2024, and works were completed in July 2024.",
    images: [BricklehurstImg, BurgessImg1, BurgessImg2, BurgessImg3],
  },
  {
    id: "hambrook",
    number: "2",
    title: "Hambrook School, Burgess Hill",
    description:
      "We worked very closely with West Sussex County Council to repurpose this former adult education facility into a high quality SEND school. The Property was then acquired from the Council, who benefited from the significant sale proceeds which were then re-invested elsewhere in the Borough.",
    images: [BurgessImg, Hambrooke2, Hambrooke4],
  },
  {
    id: "napier",
    number: "3",
    title: "Napier School, Farnborough",
    description:
      "This former office was acquired in 2020 and Kalro oversaw a complicated planning process for change of use to a SEND school. The new facility opened in 2023 and now provides high quality and much needed education provision to over 50 children with autism and other learning difficulties.",
    images: [FarnboroughImg, Napier1, Napier2, Napier3],
  },
  {
    id: "stoneygate",
    number: "4",
    title: "Stoneygate School, Leicester",
    description:
      "This former Montessori school had been vacant for 5 years, and was significantly dilapidated. The owner had considered residential conversion but hadn’t had any success. They got in touch with Kalro Education after a number of aborted sales, and we successfully acquired the site on behalf of an education operator. It is currently undergoing comprehensive refurbishment.",
    images: [StoneygateImg],
  },
];

const CaseStudyCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full flex items-center justify-center"
    >
      {/* Left Arrow (Desktop Only) */}
      <button
        onClick={prevSlide}
        className="absolute -left-20 hidden lg:block z-10"
      >
        <svg
          className="w-8 h-8 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      {/* Image Slide */}
      <div className="relative w-full">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto rounded-lg shadow-md transition-opacity duration-500"
        />
        <div className="absolute -bottom-8 -left-3 md:-bottom-4 md:-left-5 bg-blue-900 text-white px-4 py-4 rounded-full text-[16px] font-semibold">
          {title}
        </div>
      </div>

      {/* Right Arrow (Desktop Only) */}
      <button
        onClick={nextSlide}
        className="absolute -right-20 hidden lg:block z-10"
      >
        <svg
          className="w-8 h-8 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="font-semibold mb-6 text-[#001C5A] text-[22px]">
        CASE STUDIES
      </h2>
      <div className="space-y-12">
        {caseStudies.map((study) => (
          <div
            id={study.id}
            key={study.number}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            <span className="text-8xl font-extralight text-gray-300">
              {study.number}
            </span>
            <div className="flex-1">
              <CaseStudyCarousel images={study.images} title={study.title} />
              <p className="mt-10 text-gray-600 text-[18px] font-light">
                {study.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
