// src/components/Header.jsx
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = useCallback(
    (e) => setInputValue(e.target.value),
    [setInputValue]
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Badge = ({ count, className = "" }) => (
    <span className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium ${className}`}>
      {count > 99 ? '99+' : count}
    </span>
  );

  return (
    <header className="bg-blue-200 shadow-md border-b border-blue-100 relative z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Top Row - Logo and Actions */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/Logo.png" 
                alt="logo" 
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <SearchBar
              value={inputValue}
              onChange={handleInputChange}
              onSearch={handleSearch}
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Learn Now Link */}
            <span className="hidden lg:inline text-blue-700 font-medium hover:text-blue-900 transition cursor-pointer whitespace-nowrap">
              Học ngay
            </span>

            {/* Favorites */}
            <Link to="/favorites" className="relative group">
              <div className="p-2 hover:bg-blue-100 rounded-full transition-colors">
                <FiHeart className="text-xl text-blue-700 group-hover:text-blue-900" />
                {favorites.length > 0 && <Badge count={favorites.length} />}
              </div>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative group">
              <div className="p-2 hover:bg-blue-100 rounded-full transition-colors">
                <FiShoppingCart className="text-xl text-blue-700 group-hover:text-blue-900" />
                {cartItems.length > 0 && <Badge count={cartItems.length} />}
              </div>
            </Link>

            {/* Avatar */}
            <div className="p-1 rounded-full ring-1 ring-blue-200 hover:ring-blue-400 transition-all cursor-pointer">
              <img
                src="/assets/avatar.jpg"
                alt="avatar"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button & Actions */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Cart & Favorites */}
            <Link to="/favorites" className="relative group">
              <div className="p-2 hover:bg-blue-100 rounded-full transition-colors">
                <FiHeart className="text-lg text-blue-700 group-hover:text-blue-900" />
                {favorites.length > 0 && <Badge count={favorites.length} />}
              </div>
            </Link>

            <Link to="/cart" className="relative group">
              <div className="p-2 hover:bg-blue-100 rounded-full transition-colors">
                <FiShoppingCart className="text-lg text-blue-700 group-hover:text-blue-900" />
                {cartItems.length > 0 && <Badge count={cartItems.length} />}
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-blue-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-xl text-blue-700" />
              ) : (
                <FiMenu className="text-xl text-blue-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <SearchBar
            value={inputValue}
            onChange={handleInputChange}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-200 border-t border-blue-300 shadow-lg z-40">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
            <div className="flex flex-col space-y-4">
              {/* Learn Now Link */}
              <span className="text-blue-700 font-medium hover:text-blue-900 transition cursor-pointer py-2">
                Học ngay
              </span>

              {/* Avatar Section */}
              <div className="flex items-center space-x-3 py-2">
                <div className="p-1 rounded-full ring-1 ring-blue-200">
                  <img
                    src="/assets/avatar.jpg"
                    alt="avatar"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>
                <span className="text-blue-700 font-medium">Tài khoản</span>
              </div>
            </div>
          </div>
        </div>
      )}
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