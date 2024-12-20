"use client";
import React, { useState } from "react";

const ContactFormHi: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToPrivacyPolicy: false,
    bproverab: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToPrivacyPolicy) {
      alert("You must agree to our privacy policy.");
      return;
    }

    if (formData.bproverab) {
      alert("Spam detected.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agreeToPrivacyPolicy: false,
          bproverab: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-4 space-y-4 max-w-lg sm:max-w-2xl"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              पहला नाम:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="अपना पहला नाम दर्ज करें"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="text-black placeholder-gray mt-1 block w-full h-14 rounded-md border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              अंतिम नाम:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="अपना अंतिम नाम दर्ज करें"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-2 text-black placeholder-gray mt-1 block w-full h-14 rounded-md border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="sm:flex-row sm:space-x-4">
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              ईमेल:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-2 text-black placeholder-gray mt-1 block w-full h-14 rounded-md border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            फोन नंबर:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-2 text-black placeholder-gray mt-1 block w-full h-14 rounded-md border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            संदेश:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="हमें एक संदेश छोड़ें..."
            value={formData.message}
            onChange={handleChange}
            required
            className="px-2 pt-2 text-black placeholder-gray mt-1 block w-full h-64 rounded-md border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeToPrivacyPolicy"
            name="agreeToPrivacyPolicy"
            checked={formData.agreeToPrivacyPolicy}
            onChange={handleChange}
            required
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label
            htmlFor="agreeToPrivacyPolicy"
            className="ml-2 block text-sm text-gray-700"
          >
            आप हमारी गोपनीयता नीति से सहमत हैं।
          </label>
        </div>

        <div className="hidden">
          <label
            htmlFor="bproverab"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="text"
            id="bproverab"
            name="bproverab"
            value={formData.bproverab}
            onChange={handleChange}
            className="mt-1 block w-full h-0 opacity-0"
          />
        </div>

        <button
          type="submit"
          className="px-12 py-1 rounded-md text-white bg-[#00dbfe] hover:bg-[#308390] transition-colors duration-300 w-full sm:w-auto "
        >
          संदेश भेजें
        </button>
      </div>
    </form>
  );
};

export default ContactFormHi;
