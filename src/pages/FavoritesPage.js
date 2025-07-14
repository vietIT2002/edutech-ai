import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa"; 

import { useFavorites } from "../contexts/FavoritesContext";
import { useCart } from "../contexts/CartContext";

import products from "../data/products";

import UserLayout from "../layouts/UserLayout";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // List of product IDs marked as favorites
  const { addToCart } = useCart();      // Function to add product to cart

  const [selectedProduct, setSelectedProduct] = useState(null); // Product selected for detail modal

  // Filter all products to get only those marked as favorites
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  // Open product detail modal
  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  // Add selected product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <UserLayout>
      {/* Page title */}
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Khóa học yêu thích</h2>

      {/* List of favorite products */}
      {favoriteProducts.length > 0 ? (
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={handleViewDetail}
            />
          ))}
        </div>
      ) : (
        // Empty state when no favorites
        <div className="text-center text-gray-500 mt-16 flex flex-col items-center">
          <FaRegHeart className="text-6xl text-gray-300 mb-4" />
          <p className="text-lg">Bạn chưa thêm khoá học nào vào yêu thích.</p>
          <p className="text-sm text-gray-400 mt-1">
            Hãy khám phá và nhấn để lưu lại nhé!
          </p>
        </div>
      )}

      {/* Product detail modal (conditionally rendered) */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </UserLayout>
  );
};

export default FavoritesPage;
