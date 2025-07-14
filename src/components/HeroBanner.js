import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Banner image paths
const banners = [
  "/assets/banner1.png",
  "/assets/banner2.png",
  "/assets/banner3.png",
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  // Auto slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer); // Cleanup
  }, [total]);

  // Navigate manually
  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 mt-4">
      <div className="relative w-full overflow-hidden shadow-md">

        {/* Banner Image (responsive height) */}
        <img
          src={banners[current]}
          alt={`banner-${current + 1}`}
          className="w-full h-auto object-contain transition duration-700"
        />

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-10"
          aria-label="Previous banner"
        >
          <FaChevronLeft className="text-gray-800 text-xl" />
        </button>

        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-10"
          aria-label="Next banner"
        >
          <FaChevronRight className="text-gray-800 text-xl" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-red-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
