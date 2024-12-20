"use client";
import { useState, useEffect } from "react";

type Customer = {
  name: string;
  comment: string;
};

type CustomerCardProps = {
  customers: Customer[];
};

const CustomerCard2: React.FC<CustomerCardProps> = ({ customers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default for mobile

  // Effect to update itemsPerPage based on window size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // Large screens
        setItemsPerPage(3);
      } else if (width >= 768) {
        // Tablet screens
        setItemsPerPage(2);
      } else {
        // Small screens
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage(); // Initial call
    window.addEventListener("resize", updateItemsPerPage); // Update on resize

    return () => {
      window.removeEventListener("resize", updateItemsPerPage); // Cleanup listener
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < customers.length ? prevIndex + itemsPerPage : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0
        ? prevIndex - itemsPerPage
        : Math.max(0, customers.length - itemsPerPage)
    );
  };

  return (
    <div className="bg-white w-full md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex justify-center h-[140px]">
      <div className="flex items-center w-full">
        {/* Previous button */}
        <button
          onClick={handlePrev}
          aria-label="Previous customer"
          className="flex items-center justify-center w-10 h-10 "
        >
          <svg width="17" height="17" viewBox="0 0 24 24">
            <polygon points="24,0 24,24 0,12" fill="currentColor" />
          </svg>{" "}
          {/* Left triangle */}
        </button>

        {/* Display customers in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 mx-4">
          {customers
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((customer, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-4 rounded-lg min-h-[160px]  text-center md:text-left transition-transform duration-300 flex-grow"
              >
                <span className="text-xl font-bold text-yellow-400">★★★★★</span>
                <p className="text-[15px] text-[#2c2937]  lg:text-lg font-semibold italic lg:leading-4">
                  {customer.comment}
                </p>
                <h2 className="font-semibold text-gray-600">{customer.name}</h2>
              </div>
            ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          aria-label="Next customer"
          className="flex items-center justify-center w-10 h-10 "
        >
          <svg width="17" height="17" viewBox="0 0 24 24">
            <polygon points="0,0 24,12 0,24" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomerCard2;
