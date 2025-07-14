import React from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";

const SortFilter = ({ selectedSort, onChange }) => {
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
            value={selectedSort}
            onChange={onChange}
          >
             <option value="">Sắp xếp theo</option>
            <option value="students-desc">Nhiều học viên nhất</option>
            <option value="students-asc">Ít học viên nhất</option>
            <option value="reviews-desc">Nhiều đánh giá nhất</option>
            <option value="reviews-asc">Ít đánh giá nhất</option>
          </select>
        </div>
      </div>
    );
};

export default SortFilter;
