"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/kalro-logo.png";
import HeroCarousel from "./components/hero-carousel";
import LondonCity from "@/app/assets/city-london.jpeg";
import CheckMark from "@/app/assets/icon-check.png";
import CaseStudies from "./components/case-studies";
import SuccessStory from "./components/case-highlight";
import ContactBanner from "./components/contact-form";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative bg-[url('./assets/hero-image.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
        <div className="absolute top-6 left-6 md:top-10 md:left-16 z-20">
          <Image src={logo} alt="Kalro Education Logo" width={220} />
        </div>
        <section className="h-screen flex flex-col justify-center px-6 md:px-20 relative z-20">
          <h1 className="text-3xl md:text-5xl lg:text-[65px] text-white font-extralight w-full md:w-[80%] lg:w-[65%]">
            Helping Schools Build a <br /> Brighter Educational Future.
          </h1>
        </section>
        <nav className="absolute bottom-30  lg:bottom-10 left-6 md:left-30 z-20 text-white font-light md:text-[18px] flex gap-6 md:gap-12">
          <Link href="#about-us">About Us</Link>
          <Link href="#case-study">Case Studies</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="absolute md:w-[500px] lg:w-[620px] h-[190px] bg-white bottom-0 right-0 z-20">
          <HeroCarousel className="z-10" />
        </div>
      </div>

      <section className="px-6 md:px-30 py-16">
        <p className="text-lg md:text-xl font-light">
          Kalro Education is a specialist UK-based education consultancy that
          works closely with Local Authorities, Dioceses and Education Providers
          to help them increase their education provision in areas where it is
          needed the most.
        </p>
        <Link
          href="#contact"
          className="inline-block mt-6 font-semibold text-[#001C5A]"
        >
          PARTNER WITH US
          <hr className="mt-1 w-[200px]" />
        </Link>
      </section>

      <section id="about-us" className="px-6 md:px-30 py-16">
        <h2 className="text-3xl text-[#001C5A] font-semibold mb-10">
          ABOUT US
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={LondonCity}
            alt="City Skyscraper"
            className="rounded-lg w-full md:w-1/2"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[#001C5A] mb-4">
              WHO WE ARE
            </h3>
            <p className="text-lg font-light">
              Kalro Education is a specialist consultancy focused exclusively on
              the UK education sector.
              <br />
              <br />
              We partner with Local Authorities, Mainstream and SEND school
              operators, and nurseries to acquire, develop, and repurpose
              properties into high-quality learning environments.
              <br />
              <br />
              We also work closely with property owners looking to repurpose
              underutilised sites for education.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#001C5A] px-6 md:px-30 py-40 text-white bg-[url('./assets/KALRO-black-bg.png')] bg-cover my-20">
        <h2 className="text-2xl font-semibold mb-8">OUR EXPERIENCE</h2>
        <p className="text-lg font-light">
          The UK is home to a world-class education system, with institutions
          that are globally recognised and internationally acclaimed. In today’s
          ever-changing global economy, the need for robust mainstream and
          specialist education provision is now more important than ever.
          <br />
          <br />
          At Kalro Education, we have a proven track record of working closely
          with leading education providers to help them with expansion. This
          involves services from recruitment and staff provision to sourcing and
          delivering purpose-built educational spaces.
        </p>
      </section>

      <section className="px-6 md:px-30 py-16">
        <h2 className="text-2xl font-semibold text-[#001C5A] mb-8">
          WHY CHOOSE US
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Specialist Focus",
            "Seamless Process",
            "Proven Track Record",
            "Long-Term Partnerships",
          ].map((title, idx) => (
            <div key={idx}>
              <hr />
              <div className="flex items-center gap-4 py-4">
                <Image src={CheckMark} alt="check mark" width={30} />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="font-light text-lg">
                We collaborate with education operators, ensuring sustainable
                site use and smooth processes.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FBFBFB] pt-20 pl-[20px] lg:pl-[160px]">
        <h2 className=" font-semibold pb-20  mt-20 text-[#001C5A] text-[22px]">
          OUR SERVICES
        </h2>
        <div className=" pr-[20px]  text-left flex flex-col md:flex-row  items-center gap-8 pb-[100px]">
          <div className="w-[360px] h-[400px] md:h-[430px] lg:h-[440px] flex flex-col justify-between text-white rounded-xl bg-[#001C5A] py-6 px-12">
            <div>
              <h3 className="font-semibold pb-2 text-[22px] my-4">
                Site Sourcing & Acquisition
              </h3>
              <p className="font-extralight">
                Identifying underutilised properties for educational use
              </p>
              <hr className="my-2" />
              <p className="font-extralight">
                Negotiating acquisitions with sellers
              </p>
              <hr className="my-2" />
              <p className="font-extralight">
                Ensuring smooth, hassle-free transactions
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[400px] md:h-[450px] lg:h-[440px] flex flex-col justify-between text-white rounded-xl bg-[#001C5A] py-6 px-12">
            <div>
              <h3 className="font-semibold pb-2 text-[22px] my-4">
                Development & Conversion
              </h3>
              <p className="font-extralight">
                Refurbishing and repurposing spaces for SEND and mainstream
                education
              </p>
              <hr className="my-2" />
              <p className="font-extralight">
                Working with education operators to ensure fit-for-purpose
                facilities
              </p>
              <hr className="my-2" />
              <p className="font-extralight">
                Managing planning applications and compliance
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[400px] md:h-[430px] lg:h-[440px] flex flex-col justify-between text-white rounded-xl bg-[#001C5A] py-6 px-12">
            <div>
              <h3 className="font-semibold pb-2 text-[22px] my-4">
                Strategic Partnerships & Long-Term Value
              </h3>
              <p className="font-extralight">
                Working closely with education operators to ensure demand for
                new sites
              </p>
              <hr className="my-2" />
              <p className="font-extralight">
                Enhancing property value by transforming spaces into thriving
                educational facilities
              </p>
              <hr className="my-2" />
              <p className="font-extralight">
                Supporting sellers looking for a reliable buyer who understands
                the education sector
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" pr-[20px] md:pr-[80px] lg:w-[60%] h-full w-[90%] pt-20 md:pt-32 pb-32 md:pb-10">
        <div>
          <h2 className=" pl-[20px] lg:pl-[160px] text-[32px] text-[#001C5A] font-bold">
            Think Your Property Could be Suited to Education Use? Here’s Why You
            Should Talk to Us...
          </h2>
          <div className="mt-20">
            <div className="flex items-center gap-10">
              <hr className="w-20 md:w-40 border-[#001C5A]" />
              <h3 className="text-[22px] font-semibold">
                Expertise in Education Real Estate
              </h3>
            </div>
            <p className="pl-[90px] lg:pl-[200px] font-light text-[18px]">
              The UK’s education sector is one of the strongest in the world,
              and we understand what education providers need to operate
              successfully. We help education providers in the SEND sector grow
              their provision so they can continue to make a positive impact.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-10">
              <hr className="w-20 md:w-40 border-[#001C5A]" />
              <h3 className="text-[22px] font-semibold">
                Fast & Reliable Transactions
              </h3>
            </div>
            <p className="pl-[90px] lg:pl-[200px] font-light text-[18px]">
              With capital and experience, we efficiently acquire and repurpose
              sites, providing property owners with a hassle-free exit strategy.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-10">
              <hr className="w-20 md:w-40 border-[#001C5A]" />
              <h3 className="text-[22px] font-semibold">
                Sustainable & Community-Focused Developments
              </h3>
            </div>
            <p className="pl-[90px] lg:pl-[200px] font-light text-[18px]">
              Our projects create meaningful impact by supporting students,
              communities, and long-term education growth.
            </p>
          </div>
        </div>
      </section>
      <section
        id="case-study"
        className=" pr-[30px]  md:pr-[80px]  h-full pt-32 pb-32 md:pb-10"
      >
        <CaseStudies />
      </section>
      <section className="pt-20 pl-[20px] pr-[20px] lg:pl-[160px]">
        <SuccessStory />
      </section>
      <section className=" bg-[#001C5A]  mt-20">
        <div className=" px-10 md:pl-[160px] pb-20 pt-20  lg:pr-[150px] md:pr-[40px]">
          <h2 className="font-semibold text-center text-white pb-12 text-[22px]">
            THE KALRO EDUCATION DIFFERENCE
          </h2>
          <p className=" font-extralight text-center text-[18px] text-white ">
            We move quickly and efficiently, ensuring sellers benefit
            <br /> from a smooth transaction.
          </p>
          <div className="flex py-5 justify-center">
            <div className="w-px h-10 bg-white"></div>
          </div>
          <p className=" font-extralight text-center text-[18px] text-white ">
            We work exclusively in education real estate,
            <br /> maximizing property potential for schools, councils, and
            communities.
          </p>
          <div className="flex py-5 justify-center">
            <div className="w-px h-10 bg-white"></div>
          </div>
          <p className=" font-extralight text-[18px] text-white text-center">
            We partner with trusted education operators, ensuring long-term{" "}
            <br /> site sustainability and ongoing value for local authorities.
          </p>
        </div>
      </section>
      <section className="bg-[#FBFBFB] px-10 py-20 flex justify-center">
        <h2 className="text-center text-[28px] w-[600px] text-[#001C5A] font-light">
          Thinking of selling a property that could be repurposed for education?
          <br />
          <br />
          Partner with Kalro Education and transform your site into a thriving
          school.
        </h2>
      </section>
      <section id="contact" className="pt-20  lg:pl-[140px]">
        <ContactBanner />
      </section>
      <Footer />
    </main>
  );
}
