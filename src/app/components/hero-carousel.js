import { useState, useRef } from "react";
import BricklehurstImg from "@/app/assets/bricklehurst-manor.jpg";
import BurgessImg from "@/app/assets/burgess-hill-2.jpeg";
import FarnboroughImg from "@/app/assets/farnborough.jpeg";
import StoneygateImg from "@/app/assets/stoneygate-leicester.jpg";
import Image from "next/image";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      image: BricklehurstImg,
      title: "BRICKLEHURST MANOR, WADHURST",
      link: "#bricklehurst",
    },
    {
      image: BurgessImg,
      title: "HAMBROOK SCHOOL, BURGESS HILL",
      link: "#hambrook",
    },
    {
      image: FarnboroughImg,
      title: "NAPIER SCHOOL, FARNBOROUGH",
      link: "#napier",
    },
    {
      image: StoneygateImg,
      title: "STONEYGATE SCHOOL, LEICESTER",
      link: "#stoneygate",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Touch events for mobile swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // Swipe left → next slide
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide(); // Swipe right → previous slide
    }
  };

  return (
    <div
      id="case-study-carousel"
      className="relative flex h-full items-center pl-2 md:pl-12 w-full max-w-4xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Text Section */}
      <div className="w-55 pr-2 md:pr-12">
        <h2 className="text-xl mb-2 font-semibold">
          {slides[currentIndex].title}
        </h2>
        <a
          href={slides[currentIndex].link}
          className="text-[18px] font-extralight"
        >
          See Case Study
        </a>
      </div>

      {/* Carousel Section */}
      <div className="relative w-50 flex items-center">
        <div className="relative overflow-hidden">
          <Image
            src={slides[currentIndex].image.src}
            width="200"
            height="60"
            className="block w-full transition-opacity duration-500"
            alt="Property"
          />
        </div>

        {/* Navigation Buttons (Visible Only on Desktop) */}
        <button
          type="button"
          className="hidden lg:flex absolute right-0 bottom lg:-right-20 lg:top-34 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <svg
            className="w-5 h-5 text-gray-700"
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
        <button
          type="button"
          className="hidden lg:flex absolute -right-30 top-34 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <svg
            className="w-5 h-5 text-gray-700"
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
    </div>
  );
}
