import React from "react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import glogo from "../images/CapRev logo LBH.png";
import Image from "next/image";

export const FooterHomeHi: React.FC = () => {
  return (
    <div className="bg-gray-700">
      <div className="max-w-screen-xl mx-auto text-white py-8">
        <div className="hidden md:block">
          <div className="lg:flex justify-between items-center border-b-[1px] border-gray-400 pb-6 mb-6 px-10">
            <div className="text-center lg:text-left lg:flex-col lg:items-center md:mb-5 lg:mb-0">
              <div className="flex flex-col md:flex md:items-center lg:items-start lg:justify-start">
                <Link href={"/hi"}>
                  <Image
                    src={glogo}
                    alt="slika"
                    className=" object-contain w-[200px] "
                    priority
                  />
                </Link>
              </div>

              <p className="text-sm mt-4 lg:mt-0">
                अपनी ट्रेडिंग यात्रा को CapitalRevo के साथ सशक्त बनाएं
              </p>
              <div className="social-icons flex justify-center lg:justify-start gap-4 mt-4 lg:mt-28 ">
                <a
                  className="hover:bg-tirkizna rounded-full transition duration-300"
                  href="https://www.instagram.com/capital_revo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  className="hover:bg-tirkizna rounded-full transition duration-300"
                  href="https://www.youtube.com/@Capital_Revo/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-3xl" />
                </a>

                <a
                  className="hover:bg-tirkizna rounded-full transition duration-300"
                  href="https://www.facebook.com/people/Capital-Revo/61552517622119/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="lg:text-left flex justify-center space-x-12 lg:space-y-0 lg:space-x-12">
              <ul className="space-y-2 text-sm">
                <li className="font-bold mb-2">त्वरित लिंक</li>
                <li>
                  <Link href="/hi">होम</Link>
                </li>
                <li>
                  <Link href="/hi/accounts">खाता</Link>
                </li>
                <li>
                  <Link href="/hi/trading-platform">ट्रेडिंग प्लेटफॉर्म</Link>
                </li>
                <li>
                  <Link href="/hi/education">शिक्षा</Link>
                </li>
                <li>
                  <Link href="/hi/news">समाचार</Link>
                </li>
                <li>
                  <Link href="/hi/blog">ब्लॉग</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="font-bold mb-2">कंपनी</li>
                <li>
                  <Link href="/hi/about-us">हमारे बारे में</Link>
                </li>
                <li>
                  <Link href="/hi/contact-us">संपर्क करें</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-center lg:text-left lg:mx-10">
              © 2009 - 2024 CapitalRevo
            </p>
            <div className="flex space-x-4 text-sm md:pr-10">
              <Link href="/privacy-policy">गोपनीयता नीति</Link>
              <Link href="/terms-conditions">सेवा की शर्तें</Link>
              <Link href="/risk-disclaimer">जोखिम अस्वीकरण</Link>
            </div>
          </div>
          <div className="text-center px-10 py-8">
            <p className="text-gray-400 text-justify pb-5 text-xs leading-6">
              <u>CapitalRevo:</u> <br />
              CapitalRevo का संचालन CapitalRevo Ltd द्वारा किया जाता है, जिसका
              पंजीकृत पता Ground Floor, The Sotheby Building, Rodney Village,
              Rodney Bay, Gros-Islet St Lucia है और पंजीकरण संख्या 202400363 है।{" "}
              <br />
              इस वेबसाइट पर दी गई जानकारी किसी को भी लुभाने, प्रस्ताव देने या
              प्रोत्साहित करने के लिए नहीं है और यह किसी ऐसे व्यक्ति के लिए नहीं
              है जो किसी देश या क्षेत्र में ऐसा वितरण या उपयोग कर रहा हो, जो
              स्थानीय कानून या नियमों के खिलाफ हो। 
              इस वेबसाइट की सामग्री यूरोपीय संघ, यूरोपीय आर्थिक क्षेत्र, या
              यूनाइटेड किंगडम के नागरिकों या निवासियों के लिए नहीं है। हम ऊपर
              बताए गए क्षेत्रों में रहने वाले ग्राहकों को लुभाते नहीं हैं और
              केवल उन्हीं ग्राहकों को स्वीकार करते हैं जो अपनी पहल पर पंजीकरण
              करते हैं।  कुछ देशों में CapitalRevo की सेवाओं का उपयोग
              प्रतिबंधित हो सकता है और यह कुछ अधिकार क्षेत्रों से ग्राहकों को
              स्वीकार नहीं करता है, जिनमें अमेरिका (US रिपोर्टेबल व्यक्ति), ईरान
              और उत्तर कोरिया शामिल हैं।
            </p>
            <p className="text-gray-400 text-justify pb-5 text-xs leading-6">
              <u>जोखिम चेतावनी:</u>
              <br />
              वर्चुअल उपकरण, जिनमें CFDs शामिल हैं, जटिल वित्तीय उत्पाद होते हैं
              और उच्च जोखिम के साथ आते हैं जिससे आप तेजी से पैसा खो सकते हैं।
              73% से अधिक व्यापार खाते लेवरेज्ड उत्पादों का उपयोग करते हुए निवेश
              खो देते हैं। आपको यह विचार करना चाहिए कि क्या आप समझते हैं कि CFDs
              कैसे काम करते हैं और क्या आप पैसे खोने के उच्च जोखिम को उठाने का
              वहन कर सकते हैं। पिछले प्रदर्शन से भविष्य के परिणामों का अनुमान
              नहीं लगाया जा सकता है। भविष्यवाणी से भविष्य के प्रदर्शन का अनुमान
              नहीं लगाया जा सकता है। ट्रेडिंग करने का निर्णय लेने से पहले, आपको
              अपनी निवेश लक्ष्य, अनुभव स्तर और जोखिम सहनशीलता पर सावधानी से
              विचार करना चाहिए। आपको उस राशि से अधिक जमा नहीं करनी चाहिए जिसे आप
              खोने के लिए तैयार हैं। कृपया सुनिश्चित करें कि आप उत्पाद से जुड़े
              जोखिम को पूरी तरह समझें और यदि आवश्यक हो तो स्वतंत्र सलाह प्राप्त
              करें। CapitalRevo सलाह, सिफारिशें या राय नहीं देता है किसी वित्तीय
              उत्पाद को प्राप्त करने, रखने या नष्ट करने के संबंध में।
              CapitalRevo लिमिटेड एक वित्तीय सलाहकार नहीं है और सभी सेवाएं केवल
              निष्पादन आधार पर प्रदान की जाती हैं। <br />
              इस वेबसाइट के साथ जुड़ने और इसके माध्यम से उपलब्ध सेवाओं का उपयोग
              करने से पहले, आपको सभी संबंधित शर्तों और स्थितियों, नीतियों और
              संलग्न दस्तावेजों को पढ़ना चाहिए, जो CapitalRevo के सभी उत्पादों
              और सेवाओं के उपयोग की शर्तों को शासित करते हैं। CapitalRevo की
              सेवाओं का उपयोग करके, आप शर्तों और स्थितियों से सहमति व्यक्त करते
              हैं।
            </p>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="border-b-[1px] border-gray-700 px-5 pb-6 lg:mx-20">
            <div className="lg:text-left lg:flex-col lg:items-center lg:space-x-6">
              <Link href={"/hi"}>
                <Image
                  src={glogo}
                  alt="slika"
                  className=" object-contain w-[200px] "
                  priority
                />
              </Link>
              <p className="text-sm mt-4 lg:mt-0 lg:mx-10">
                अपनी ट्रेडिंग यात्रा को CapitalRevo के साथ सशक्त बनाएं
              </p>
              <div className="text-left mt-8 flex ">
                <ul className="space-y-2 text-sm">
                  <li className="font-bold mb-2">त्वरित लिंक</li>
                  <li>
                    <Link href="/hi">होम</Link>
                  </li>
                  <li>
                    <Link href="/hi/accounts">खाता</Link>
                  </li>
                  <li>
                    <Link href="/hi/trading-platform">ट्रेडिंग प्लेटफॉर्म</Link>
                  </li>
                  <li>
                    <Link href="/hi/education">शिक्षा</Link>
                  </li>
                  <li>
                    <Link href="/hi/news">समाचार</Link>
                  </li>
                  <li>
                    <Link href="/hi/blog">ब्लॉग</Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm pl-10">
                  <li className="font-bold mb-2">कंपनी</li>
                  <li>
                    <Link href="/hi/about-us">हमारे बारे में</Link>
                  </li>
                  <li>
                    <Link href="/hi/contact-us">संपर्क करें</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-icons flex lg:justify-start gap-4 mx-3 lg:mt-20 ">
            <a
              className="hover:bg-tirkizna p-1 rounded-full transition duration-300"
              href="https://www.instagram.com/capital_revo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              className="hover:bg-tirkizna p-1 rounded-full transition duration-300"
              href="https://www.youtube.com/@Capital_Revo/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl" />
            </a>

            <a
              className="hover:bg-tirkizna p-1 rounded-full transition duration-300"
              href="https://www.facebook.com/people/Capital-Revo/61552517622119/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
