import React from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";

/**
 * PriceFilter Component
 * Dropdown filter for selecting a price range.
 *
 * Props:
 * - selectedPriceRange: current selected value
 * - onChange: handler for selection change
 */
const PriceFilter = ({ selectedPriceRange, onChange }) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      {/* Dropdown Container */}
      <div className="relative w-56">
        
        {/* Left Icon: Filter */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaFilter className="text-blue-500" />
        </div>

        {/* Right Icon: Chevron */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FaChevronDown className="text-gray-500 text-sm" />
        </div>

        {/* Select Input */}
        <select
          aria-label="Lọc theo mức giá" // Accessibility
          className="w-full border border-gray-300 rounded-lg pl-10 pr-8 py-2 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
          value={selectedPriceRange}
          onChange={onChange}
        >
          <option value="">Tất cả mức giá</option>
          <option value="lt500">Dưới 500.000 đ</option>
          <option value="500-1000">500.000 - 1.000.000 đ</option>
          <option value="gt1000">Trên 1.000.000 đ</option>
        </select>
      </div>
    </div>
  );
};

export default PriceFilter;
