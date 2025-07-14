// src/components/Header.jsx
import React, { useCallback, } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import { FiHeart, FiShoppingCart} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import { useCart } from "../contexts/CartContext";

export default function Header({
  inputValue,
  setInputValue,
  handleSearch,
  selectedPriceRange,
  onPriceChange,
}) {
  const { favorites } = useFavorites();
  const { cartItems } = useCart();

  const handleInputChange = useCallback(
    (e) => setInputValue(e.target.value),
    [setInputValue]
  );

  return (
    <header className="bg-blue-200 shadow-md border-b border-blue-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 min-h-[96px]">
        {/* Left side (Logo + Menu button) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src="/assets/Logo.png" alt="logo" className="h-12 md:h-14" />
            </Link>
          </div>
        </div>

        {/* SearchBar */}
        <div className="w-full md:w-[400px]">
          <SearchBar
            value={inputValue}
            onChange={handleInputChange}
            onSearch={handleSearch}
          />
        </div>

        {/* Right side icons */}
        <div className="flex items-center justify-end gap-3 md:gap-5">
          <span className="hidden md:inline text-blue-700 font-medium hover:text-blue-900 transition cursor-pointer">
            Học ngay
          </span>

          {/* Favorites */}
          <Link to="/favorites" className="relative">
            <div className="p-2 hover:bg-blue-100 rounded-full transition relative">
              <FiHeart className="text-xl text-blue-700" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <div className="p-2 hover:bg-blue-100 rounded-full transition cursor-pointer relative">
              <FiShoppingCart className="text-xl text-blue-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>

          {/* Avatar */}
          <div className="p-1 rounded-full ring-1 ring-blue-200 hover:ring-blue-400 transition cursor-pointer">
            <img
              src="/assets/avatar.jpg"
              alt="avatar"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      
    </header>
  );
}

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  selectedPriceRange: PropTypes.string,
  onPriceChange: PropTypes.func,
};
