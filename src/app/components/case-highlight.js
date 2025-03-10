import React from "react";
import Image from "next/image";

const images = [
  "/images/napier-1.jpg",
  "/images/napier-2.jpg",
  "/images/napier-3.jpg",
];

const SuccessStory = () => {
  return (
    <div className="max-w-6xl  py-10">
      <h2 className="text-[30px] text-[#001C5A] font-extralight text-right mb-20">
        A KALRO EDUCATION <br />
        <span className="font-semibold">SUCCESS STORY</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <h3 className="text-[22px] font-semibold text-[#001C5A] mb-4">
            Napier School
          </h3>
          <p className="font-light text-[18px] mb-4">
            Kalro Education identified and acquired a strategic site in
            Farnborough, repurposing it into Napier School, a specialist SEND
            facility in partnership with Outcomes First Group.
          </p>
          <p className="font-light text-[18px] mb-4">
            The project is a prime example of how we unlock the potential of
            underutilized properties, creating long-term value for both property
            owners and the education sector.
          </p>
        </div>

        {/* Right Section - Image Grid */}
        <div className="grid grid-cols-2 gap-2">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Napier School ${index + 1}`}
              width={300}
              height={200}
              className={`rounded-lg shadow-md ${
                index === 2 ? "col-span-2" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* How We Added Value */}
      <div className="mt-12">
        <h3 className="text-[22px] font-semibold text-[#001C5A] mt-20 mb-8">
          How We Added Value
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <hr className="mb-4" />
            <h4 className="font-semibold text-[#001C5A] text-[18px]">
              Strategic Site Selection
            </h4>
            <p className="font-light text-[18px]">
              Kalro identified an underutilized property in a high-demand area
              for SEND education.
            </p>
          </div>
          <div>
            <hr className="mb-4" />
            <h4 className="font-semibold text-[#001C5A] text-[18px]">
              Efficient Acquisition Process
            </h4>
            <p className="font-light text-[18px]">
              Our streamlined approach ensured a quick and hassle-free purchase
              for the seller.
            </p>
          </div>
          <div>
            <hr className="mb-4" />
            <h4 className="font-semibold text-[#001C5A] text-[18px]">
              Comprehensive Redevelopment
            </h4>
            <p className="font-light text-[18px]">
              We carried out extensive refurbishment works, transforming the
              site into a state-of-the-art educational facility.
            </p>
          </div>
          <div>
            <hr className="mb-4" />
            <h4 className="font-semibold text-[#001C5A]  text-[18px] ">
              Sustainable Use & Long-Term Value
            </h4>
            <p className="text-[18px] font-light">
              The site now operates as a high-impact school, addressing the
              shortage of specialist SEND places while securing long-term
              stability under an established operator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
