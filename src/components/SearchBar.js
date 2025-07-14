import { FaSearch } from 'react-icons/fa';

/**
 * SearchBar Component
 * Input field with search button, supports 'Enter' key and onClick search.
 *
 * Props:
 * - value: current input value
 * - onChange: function to update value
 * - onSearch: function to trigger search action
 */
export default function SearchBar({ value, onChange, onSearch }) {
  
  // Handle "Enter" key to trigger search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm max-w-lg w-full">
      
      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Nhập khóa học cần tìm…"
        className="flex-1 px-5 py-2 bg-transparent outline-none text-gray-700"
        aria-label="Search courses"
      />

      {/* Search Button */}
      <button
        className="px-4 py-2 hover:bg-gray-100 transition"
        onClick={onSearch}
        aria-label="Search"
      >
        <FaSearch className="text-gray-500" />
      </button>
    </div>
  );
}
