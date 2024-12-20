"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import SignUpButton2 from "../components/SignUpButton2";
import Logindugme2 from "../components/Logindugme2";
import { Logo2 } from "./Logo2";

// Definišemo interfejs za Country
interface Country {
  code: string;
  label: string;
  href: string;
}

const Navbar22: React.FC = () => {
  const menuItems = [
    {
      title: "Accounts",
      href: "/accounts",
    },
    {
      title: "Trading",
      items: [
        { title: "Platform", href: "/trading-platform" },
        { title: "AI Support", href: "/ai-support" },
        { title: "Accounts", href: "/accounts" },
      ],
    },
    {
      title: "Market & Tools",
      items: [
        { title: "Tools", href: "/trading-platform" },
        { title: "News", href: "/news" },
      ],
    },
    {
      title: "Knowledge",
      items: [
        { title: "Education", href: "/education" },
        { title: "E Books", href: "/ebooks" },
        { title: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "Contact Us", href: "/contact-us" },
        { title: "About Us", href: "/about-us" },
      ],
    },
  ];

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const countries: Country[] = [
    { code: "/united-kingdom.png", label: "English", href: "/" },
    { code: "/india.png", label: "हिंदी", href: "/hi" },
    { code: "/united-states-of-america.png", label: "USA", href: "/" },
    { code: "/italy.png", label: "Italy", href: "/" },
    { code: "/brazil-flag.png", label: "Brazil", href: "/" },
    { code: "/australia.png", label: "Australia", href: "/" },
    { code: "/canada.png", label: "Canada", href: "/" },
    { code: "/france.png", label: "France", href: "/" },
    { code: "/sweden.png", label: "Sweden", href: "/" },
    { code: "/spain.png", label: "Spain", href: "/" },
    { code: "/south-africa.png", label: "South Africa", href: "/" },
    { code: "/germany.png", label: "Germany", href: "/" },
  ];

  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: "",
    label: "",
    href: "",
  });

  useEffect(() => {
    // Retrieve the selected language from local storage

    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage) {
      const country = countries.find((c) => c.label === savedLanguage);

      if (country) {
        setSelectedCountry(country);
      } else {
        setSelectedCountry(countries[0]); // Default to the first country if not found
      }
    } else {
      setSelectedCountry(countries[0]); // Default to the first country if nothing is saved
    }
  }, []);

  const handleLanguageChange = (country: Country) => {
    setSelectedCountry(country);

    localStorage.setItem("selectedLanguage", country.label); // Save the selected language

    window.location.href = country.href; // Redirect to the appropriate link
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Logo2 title="LincoCapital" className="text-black" />

        {/* Desktop Menu */}
        <div className="flex items-center gap-2">
          <div className="menu-desktop">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="menu-item text-[14px] hover:text-[#b22028] underline-animation"
              >
                {menu.href ? (
                  <Link href={menu.href}>{menu.title}</Link>
                ) : (
                  <div className="dropdown">
                    <span>{menu.title}</span>
                    <div className="dropdown-menu">
                      {menu.items?.map((item, subIndex) => (
                        <Link key={subIndex} href={item.href}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="auth-buttons flex justify-center items-center lg:pl-2">
            <Logindugme2>Login</Logindugme2>
            <SignUpButton2>Sign Up</SignUpButton2>
          </div>

          {/* Language Selector */}
          <div className="language-selector relative">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center"
            >
              <Image
                src={selectedCountry.code || "/united-kingdom.png"}
                alt={selectedCountry.label}
                width={23}
                height={23}
                loading="eager"
                priority
                className={`object-cover ${
                  languageMenuOpen
                    ? "border-2 border-gray-800 rounded-full"
                    : ""
                }`}
              />
            </button>
            {languageMenuOpen && (
              <div className="language-dropdown open absolute bg-white shadow-lg rounded mt-2 p-2 md:ml-[600px] lg:ml-[150px] xl:ml-0">
                <div className="language-grid grid grid-cols-2 gap-2">
                  {countries.map((country, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageChange(country)}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                    >
                      <Image
                        src={country.code}
                        alt={country.label}
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                      <span className="nazivdr">{country.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <button
            className="p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
          {isMobileMenuOpen && (
            <div className="mobile-dropdown absolute left-0 right-0 mt-2 bg-white shadow-lg rounded">
              {menuItems.map((menu, index) => (
                <div key={index} className="border-b last:border-b-0">
                  {menu.href ? (
                    <Link
                      href={menu.href}
                      className="block p-4 text-gray-800 hover:bg-gray-100"
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex justify-between items-center w-full p-4 text-gray-800 hover:bg-gray-100 focus:outline-none"
                        onClick={() => {
                          const subMenu = document.getElementById(
                            `submenu-${index}`
                          );
                          if (subMenu) {
                            subMenu.classList.toggle("hidden");
                          }
                        }}
                      >
                        <span>{menu.title}</span>
                      </button>
                      <div id={`submenu-${index}`} className="hidden pl-4">
                        {menu.items?.map((item, subIndex) => (
                          <Link
                            key={subIndex}
                            href={item.href}
                            className="block p-2 text-gray-700 hover:bg-gray-200"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className=" ">
                <Logindugme2>Login</Logindugme2>
                <SignUpButton2>Sign Up</SignUpButton2>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar22;
