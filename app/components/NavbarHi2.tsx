"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { Logo } from "./Logo";
import SingUpbutton from "../components/SingUpbutton";
import Logindugme from "../components/Logindugme";
import glogo from "../images/CapRev logo LBH.png";
import Image from "next/image";

export const NavbarHi2 = () => {
  const navigation = [
    { title: "हमारे बारे में", href: "/hi/about-us" }, // About Us
    { title: "ट्रेडिंग प्लेटफ़ॉर्म और उपकरण", href: "/hi/trading-platform" }, // Trading Platform & Tools
    { title: "एआई समर्थन", href: "/hi/ai-support" }, // AI Support
    { title: "खाते", href: "/hi/accounts" }, // Accounts
    { title: "शिक्षा", href: "/hi/education" }, // Education
    { title: "समाचार", href: "/hi/news" }, // News
    { title: "ब्लॉग", href: "/hi/blog" }, // Blog
    { title: "संपर्क करें", href: "/hi/contact-us" }, // Contact Us
  ];
  const [showLinks, setShowLinks] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <div className="fixed mx-auto w-full h-12 sm:h-16 z-50 bg-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 md:px-10 lg:px-10 xl:px-10 h-full">
        <Link href={"/hi"}>
          <Image
            src={glogo}
            alt="slika"
            className=" object-contain w-[200px] "
            priority
          />
        </Link>

        <div className="hidden lg:flex lg:items-center gap-10 lg:gap-2 xl:gap-5">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-xs xl:text-sm hover:text-[#00dbfe] text-white text-shadow"
            >
              {item.title}
            </Link>
          ))}

          <div className="flex items-center gap-3 pl-10 ">
            <Logindugme>लॉग इन</Logindugme>
            <SingUpbutton>साइन अप</SingUpbutton>

            {/* Ikonica za izbor jezika */}
            <div className="relative flex justify-center">
              <button onClick={toggleLanguageMenu} className="text-white">
                <FaGlobe size={22} />
              </button>

              {/* Padajući meni jezika */}
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        onClick={() => setLanguageMenuOpen(false)}
                      >
                        English
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hi"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        onClick={() => setLanguageMenuOpen(false)}
                      >
                        हिंदी
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobilni meni */}
        <div className="fixed right-0 px-4 lg:hidden">
          <button
            onClick={toggleLinks}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>

          {showLinks && (
            <div className="fixed top-0 left-0 w-full h-fit bg-gray-600 text-white p-4 shadow-lg transition-transform transform translate-x-0 z-50">
              <div className="flex justify-between">
                <Logo title="Capitalrevo" className="text-black" />
                <button
                  onClick={toggleLinks}
                  className="text-white text-3xl focus:outline-none mb-4"
                >
                  &times;
                </button>
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block mb-4 hover:text-customBlue p-1 text-sm"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))}

              <Logindugme>लॉग इन</Logindugme>
              <SingUpbutton>साइन अप</SingUpbutton>

              {/* Ikonica za izbor jezika u mobilnom meniju */}
              <div className="mt-4 relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="text-white flex items-center"
                >
                  <FaGlobe size={28} />
                  <span className="ml-2">Language</span>
                </button>

                {/* Padajući meni jezika */}
                {languageMenuOpen && (
                  <div className="mt-2 w-32 bg-white rounded shadow-lg z-50">
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                          onClick={() => setLanguageMenuOpen(false)}
                        >
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/hi"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                          onClick={() => setLanguageMenuOpen(false)}
                        >
                          हिंदी
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
