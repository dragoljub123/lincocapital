import Image from "next/image";
import TradingViewWidget from "./components/TradingViewWidget";
import Marketwatch from "@/public/morning.svg";
import MorningStar from "@/public/whitemorningstarlogo.png";
import Buisnisinsider from "@/public/whitebuisnisinsiderlogo.png";
import katman from "@/public/katman.png";
import trustpilotlogo from "@/app/images/trustpilotcrni.svg";
import Link from "next/link";
import TradingViewWidgetNews from "./components/TradingViewWidgetNews";
import TradingViewWidgetNews4 from "./components/TradingViewWidgetNews4";
import TradingViewWidgetNews2 from "./components/TradingViewWidgetNews2";
import TradingViewWidgetNews3 from "./components/TradingViewWidgetNews3";
import ApplePayLogo from "./components/ApplePayLogo";
import { Metadata } from "next";
import { FooterHome2 } from "./components/FooterHome2";
import CurrentDate2 from "./components/CurrentDate2";
import AibanerC2 from "./components/AibanerC2";

import DownladImageApk2 from "./components/DownloadImageApk2";
import Smalcard2 from "./components/Smalcard2";
import Navbar22 from "./components/Navbar22";
import ContactForm2 from "./components/ContactForm2";

import AibanerM2 from "./components/AibanerM2";
import DownladImageApk2M from "./components/DownloadImageApk2M";

export const metadata: Metadata = {
  title: "LincoCapital - Trade Online with a Leading Trading Broker",
  description:
    "Discover the leading online trading platform at LincoCapital. Trade forex, stocks, commodities, and more with a trusted and regulated broker.",
  alternates: {
    canonical: "https://capitalrevo.com",
  },
};

export default async function Home() {
  return (
    <div className=" mx-auto ">
      <Navbar22 />

      <div className=" max-w-screen-xl mx-auto ">
        <div className="pozadinaglavna xl:mx-10">
          <div className=" mx-auto flex flex-col-reverse lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center lg:items-start ">
              <div className="flex flex-col justify-center items-center md:flex md:justify-center md:items-center  lg:justify-start lg:items-start lg:gap-4 pt-0 md:pb-10 md:pt-5 lg:pt-10 lg:p-8 lg:px-5">
                <div className="flex-row justify-center items-center mt-5  md:mt-0 lg:mt-2 ">
                  <Link
                    className="flex justify-center lg:justify-start md:py-1"
                    href="https://www.trustpilot.com/"
                    target="_blank"
                  >
                    <Image
                      src={trustpilotlogo}
                      alt="slika"
                      className="w-[100px] h-auto"
                    />
                  </Link>

                  <Link
                    className="flex justify-center items-center  px-4 py-3 gap-2 w-48 h-12 bg-[#b22028] hover:bg-red-900 text-white rounded shadow-xs font-semibold lg:text-lg mt-5 lg:mt-5 md:mt-0  "
                    href="https://platform.capitalrevo.com/login"
                  >
                    Get Started Now
                  </Link>
                </div>

                <p className=" text-[#2c2937] text-center lg:text-xl lg:text-left font-semibold py-4 px-10 md:px-0 md:py-2 lg:py-0  ">
                  Start trading with as low as $250 and leverage our expert
                  tools and resources.
                </p>
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto flex flex-col justify-between px-5 lg:px-0 lg:pl-5  h-full ">
              <h1 className="glavninaslov pt-10 pb-2 text-center text-3xl text-white font-bold md:text-5xl  lg:text-right lg:px-5">
                <span className="wrapper m-1 ">
                  <span className="strip strip-1"></span>
                  <span className="line line-1  p-0.5  md:p-2">Trading</span>
                </span>
                <br />
                <span className="wrapper m-1">
                  <span className="strip strip-2"></span>
                  <span className="line line-2  p-0.5  md:p-2 ">
                    the Future,Today
                  </span>
                </span>
                <br />
                <span className="wrapper m-1">
                  <span className="strip strip-3"></span>
                  <span className="line line-3  p-0.5 md:p-2  underline-animation2">
                    with LincoCapital
                    <span className="text-[#b22028] md:text-6xl  md:-mt-2">
                      .
                    </span>
                  </span>
                </span>
              </h1>

              <div className="flex flex-col   lg:flex-row lg:justify-end gap-4 lg:gap-10 md:bg-[#2c2937] mt-2 lg:mt-[186px] lg:mb-10   md:px-5 lg:py-2 lg:w-[580px] ">
                <p className="text-white text-[16px]  md:flex justify-center lg:mt-[11px] hidden ">
                  As featured in:
                </p>
                <div className="flex justify-center items-center gap-4  flex-wrap bg-[#2c2937] md:bg-transparent mt-1">
                  <a
                    href="https://www.marketwatch.com/press-release/capital-revo-announces-its-cutting-edge-solutions-to-protect-client-data-92832702"
                    target="_blank"
                  >
                    <Image
                      src={Marketwatch}
                      alt="MarketWatch Logo"
                      className="w-[90px] md:w-[130px ] lg:w-[120px] h-auto"
                    />
                  </a>
                  <a
                    href="https://www.morningstar.com/news/globe-newswire/9236437/capital-revo-announces-its-cutting-edge-solutions-to-protect-client-data"
                    target="_blank"
                  >
                    <Image
                      src={MorningStar}
                      alt="Morning Star Logo"
                      className="w-[65px] md:w-[70px] lg:w-[80px]  h-auto"
                    />
                  </a>
                  <a
                    href="https://markets.businessinsider.com/news/stocks/capital-revo-announces-its-cutting-edge-solutions-to-protect-client-data-1033797567"
                    target="_blank"
                  >
                    <Image
                      src={Buisnisinsider}
                      alt="Business Insider Logo"
                      className="w-[60px] md:w-[70px] lg:w-[76px]  h-auto"
                    />
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/capital-revo-announces-cutting-edge-145400195.html"
                    target="_blank"
                  >
                    <Image
                      src={katman}
                      alt="Yahoo!Finance Logo"
                      className="w-[55px] md:w-[65px]  h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" z-10  md:mb-10 ">
        <TradingViewWidget />
      </div>
      <div className="flex justify-center">
        <div className=" w-[1280px]  md:px-10 md:pb-5">
          <div className="md:flex items-center justify-between p-2 md:p-4 lg:p-8  xl:h-[160px] bg-[#2c2937] md:rounded mt-9 md:mt-5">
            {/* Left Side Heading */}
            <h2 className=" w-full p-2  text-xl xl:text-3xl font-semibold text-white md:w-1/2">
              Trade Forex, Indices, Stocks and more with the world&apos;s No. 1
              broker
            </h2>

            {/* Right Side Button */}
            <Link href="https://platform.capitalrevo.com/login">
              <button className="bg-[#b22028] text-white  font-semibold py-2 px-4 rounded shadow hover:bg-red-900  xl:text-lg transition w-full md:w-38 h-12 xl:w-48 xl:h-12 ">
                Trade Like A Pro
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex items-center justify-center ">
        <div className=" pt-5 " id="TradingPlatform">
          <div className=" lg:flex-row lg:justify-evenly lg:text-left">
            <div className=" md:pl-10 ">
              <h3 className="  text-[#2c2937] text-center text-2xl md:text-4xl  font-semibold md:p-4  lg:text-center ">
                Innovative Trading Platform
              </h3>
              <p className="text-sm md:text-lg leading-snug px-5 md:px-0  mt-2 md:mt-0 mb-5 text-gray-600 text-center">
                Experience the power of integrated trading tools with Real-Time
                data, customizable charts, and lightning fast execution.
              </p>
            </div>
            <div className="flex relative justify-center mb-5">
              <div className="relative ">
                <Link href="https://platform.capitalrevo.com/login ">
                  <h2 className="  absolute top-[0%] left-[45%]  p-4 md:p-6 w-fit h-fit bg-white/50 backdrop-blur-xs  hover:bg-white text-xs  md:text-xl font-semibold text-gray-800 ">
                    Real-Time <br />
                    <span className=" flex justify-center"> Data</span>
                  </h2>
                </Link>
                <Image
                  src="/CR dual display 3.png"
                  alt="trade"
                  width={1200}
                  height={400}
                  style={{ objectFit: "contain" }}
                />
                {/* Kockasti div koji je 30% preko slike */}
                <Link href="https://platform.capitalrevo.com/login">
                  <h2 className="  absolute top-1/2 p-4 md:p-6 w-fit h-fit bg-white/50 backdrop-blur-xs  hover:bg-white text-xs  md:text-xl font-semibold text-gray-800 ">
                    Lightning <br /> Fast Execution
                  </h2>
                </Link>
                <Link href="https://platform.capitalrevo.com/login">
                  <h2 className=" absolute top-1/2 right-0 w-fit h-fit p-4 md:p-6 bg-white/50 backdrop-blur-xs  hover:bg-white text-xs  md:text-xl font-semibold text-gray-800 ">
                    Customizable <br />
                    Charts
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DownladImageApk2 />
      <DownladImageApk2M />

      <div className="flex justify-center mt-10">
        <CurrentDate2 />
      </div>

      <div className=" hidden lg:flex md:justify-center  lg:mt-5  ">
        <AibanerC2 />
      </div>
      <div className="flex lg:hidden justify-center  ">
        <AibanerM2 />
      </div>
      <div className="max-w-screen-xl mx-auto hidden lg:flex  px-10  pt-5 ">
        {/* Leva strana - Tekst */}
        <div className="w-1/2 ">
          <h2 className="text-2xl  text-[#2c2937] font-semibold lg:text-4xl ">
            CapitalRevo Education Center
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg  text-gray-600 pt-10 pb-10  ">
            <li>Embark on a comprehensive learning journey</li>
            <li>Hundreds of lessons catering to all skill levels</li>
            <li>Meticulously organized introductory courses</li>
            <li>eBooks</li>
          </ul>
          <div>
            <Link href="/education">
              <button className=" text-[#2c2937] font-bold px-4 py-3 gap-2 w-48 h-12 border border-gray-600 rounded shadow hover:bg-red-900 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/* Desna strana - Slika */}
        <div className="flex justify-center lg:justify-end w-1/2 ">
          <Link href="/education">
            <Image
              src="/CREdu2.PNG"
              alt="education"
              width={557}
              height={400}
              className=" rounded  object-cover  "
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center lg:hidden">
        <div className="max-w-screen-xl flex flex-col justify-between sm:flex sm:flex-row px-5 md:px-10">
          <div>
            <h2 className=" pt-5 text-2xl text-[#2c2937] text-center font-semibold lg:text-4xl">
              CapitalRevo Education Center
            </h2>
            <p className="mb-1 text-center leading-snug text-gray-700  md:text-lg">
              Access dozens of trading lessons for all levels!
            </p>

            <div className=" flex justify-center items-center my-4 pr-[9px] ">
              <Link href="/education">
                <Image
                  src="/CREdu2.PNG"
                  alt="education"
                  width={400}
                  height={150}
                  className="w-full   rounded"
                />
              </Link>
            </div>

            <h3 className=" text-center font-semibold text-[#2c2937]  text-2xl pt-5">
              Unlimited access to our trading lesson library
            </h3>
            <p className="text-sm text-center text-gray-600 pt-1 ">
              Embark on a comprehensive learning journey with hundreds of
              lessons catering to all skill levels, meticulously organized into
              courses for effortless progress through the material.
            </p>
            <div className="mt-4 mb-5 flex justify-center ">
              <Link href="/education">
                <button className=" font-bold px-4 py-3 gap-2 w-48 h-12 rounded border border-gray-600 shadow hover:bg-red-900 transition text-[#2c2937]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" px-5 lg:px-0  mx-auto lg:mt-10 md:pl-10   max-w-screen-xl"
        id="News"
      >
        <div className="  ">
          <h3 className="text-2xl text-[#2c2937] py-2 text-center font-semibold    lg:text-4xl  ">
            Stay Informed
          </h3>
          <p className=" mb-4  text-sm text-center text-gray-700 lg:text-lg">
            Keep up with the latest market news and updates, integrated directly
            into the platform <br /> for real-time insights.
          </p>
        </div>
        <Link href="/news  " className="flex justify-center">
          <button className="flex justify-center items-center text-[#2c2937] font-bold md:mt-5 px-4 py-3 gap-2 w-48 h-12 border  border-gray-600 hover:bg-red-900 rounded shadow-xs  lg:mr-10">
            Read More News
          </button>
        </Link>
      </div>
      <div className="   mt-10 px-5 lg:px-0 md:flex md:justify-center  lg:mb-5 ">
        <div className="max-w-screen-xl flex">
          <div className=" hidden xl:block ">
            <TradingViewWidgetNews />
          </div>
          <div className=" hidden lg:block xl:hidden">
            <TradingViewWidgetNews4 />
          </div>
          <div className=" hidden  md:block lg:hidden ">
            <TradingViewWidgetNews3 />
          </div>
        </div>
      </div>
      <div className="  pb-10 px-5 flex justify-center  md:hidden ">
        <TradingViewWidgetNews2 />
      </div>

      <div className=" lg:mt-10 lg:pt-5  ">
        <div className=" max-w-screen-xl mx-auto ">
          <div className="lg:flex lg:justify-center ">
            <div className=" flex flex-col justify-center items-center   ">
              <h3 className="text-2xl py-4 text-[#2c2937] font-semibold md:pb-6 pt-5 text-center  lg:text-4xl ">
                Calculate Your <br />
                Potential Earnings
              </h3>
              <p className=" px-5 text-sm md:hidden pb-5 md:p-5 lg:text-lg text-center  text-gray-700 lg:pb-10">
                Use our trading calculator to see your potential profits based
                on your trading activities.
              </p>
              <p className="hidden md:block pb-5 md:p-5 lg:text-lg text-center  text-gray-700 lg:pb-10">
                Use our trading calculator to see <br />
                your potential profits based on your <br /> trading activities.
              </p>
              <Link href="https://platform.capitalrevo.com/register?demo=false">
                <button className="flex justify-center items-center font-bold border text-[#2c2937] border-gray-600 px-4 py-3 gap-2 w-48 h-12  hover:bg-red-900 rounded shadow-xs">
                  Try It Now
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center -mt-10 ">
              <Image
                src="/iphone13mini.png"
                alt="webinars"
                width={425}
                height={425}
                className=" cover "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex-col justify-center  ">
        <h3 className="text-2xl  text-[#2c2937] py-4  md:pb-10 pt-5 md:pt-5 text-center lg:text-4xl lg:mt-10 font-semibold ">
          Secure Payment Options
        </h3>
      </div>
      <div className="">
        <div className="flex justify-center items-center pb-10 lg:pb-5">
          <div className="w-full max-w-[1440px] flex justify-between items-center space-x-8 sm:mx-auto sm:px-20 px-10 lg:px-52">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/visa.png"
                  alt="Visa"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/mastercard.png"
                  alt="Mastercard"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/maestro.png"
                  alt="Maestro"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <ApplePayLogo />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/gpay2.png"
                  alt="Maestro"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" px-5 lg:pl-0 lg:px-0  md:pt-10 lg:flex  lg:justify-center "
        id="AboutUs"
      >
        <div className="max-w-screen-xl lg:mt-5">
          <div className=" pb-5">
            <h2 className="text-2xl text-[#2c2937] lg:text-4xl px-4 font-semibold text-center lg:px-0 ">
              About Us
            </h2>
            <p className="p-4 text-sm md:text-base text-gray-700 lg:text-lg text-center lg:p-10">
              With over 15 years in the industry, LincoCapital is dedicated to
              providing traders with the best-in-class tools and support. Our
              mission is to enable access to world-class trading opportunities
              for everyone.
            </p>
            <Link
              href="/about-us"
              className="px-4 lg:pl-4 pt-5 lg:pt-0 flex justify-center"
            >
              <button className="px-4 py-3 gap-2 w-60 h-14 text-[#2c2937] font-bold rounded shadow-xs  md:text-[18px] hover:bg-red-900 border border-gray-600 mb-5">
                Learn More
              </button>
            </Link>
          </div>
          <div className="md:flex lg:justify-between lg:px-10">
            <Smalcard2
              imageSrc1="/oblacici.png"
              title="Our Mission"
              text="To empower traders with cutting-edge tools, unparalleled support,and
            the knowledge to succeed in the competitive world of online trading."
            />

            <Smalcard2
              imageSrc1="/gromicon.png"
              title="Our History"
              text="CapitalRevo has been at the forefront of the trading industry for over 
              15 years,helping thousands of traders achieve their financial goals."
            />
          </div>
        </div>
      </div>
      <div className="md:pt-5 lg:pt-10 " id="ContactUs">
        <h3 className="text-2xl py-4  text-[#2c2937] font-semibold mb-0  text-center lg:text-4xl">
          Get in Touch
        </h3>
      </div>

      <div className="">
        <ContactForm2 />
      </div>
      <div className="flex justify-center">
        <div className="max-w-sirina">
          <div className="text-center mt-10 mb-10 lg:flex lg:justify-evenly lg:items-center lg:gap-10 ">
            <div className="flex flex-col items-center text-center leading-tight">
              <Image src="/coverta.png" alt="mail" width={43} height={43} />
              <h3 className="font-semibold pb-2 pt-5">Email</h3>
              <p>Our friendly team is here to help.</p>
              <p className=" md:pt-2  ">
                <br />
                support@capitalrevo.com
                <br />
              </p>
            </div>
            <div className="flex flex-col items-center text-center leading-tight">
              <Image
                src="/location.png"
                alt="location"
                width={43}
                height={43}
              />
              <h3 className="font-semibold pb-2 pt-5">Office</h3>
              <p>Come say hello at our office HQ.</p>
              <p className=" pt-2 px-5  md:px-0 tracking-tighter">
                London, 18 King William St, EC4N 7BP, United Kingdom <br />
                Rodney Bay, Rodney Village, Gros Islet, 1111, St. Lucia
              </p>
            </div>
            <div className="flex flex-col items-center text-center leading-tight">
              <Image src="/phonecall.png" alt="phone" width={43} height={43} />
              <h3 className="font-semibold pb-2 pt-5">Phone</h3>
              <p>Mon-Fri from 8am to 5pm.</p>
              <p className=" md:pt-2 ">
                <br />
                +447441906409
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterHome2 />
    </div>
  );
}
