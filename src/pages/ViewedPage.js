import React, { useState } from "react";
import { useViewed } from "../contexts/ViewedContext";
import { useCart } from "../contexts/CartContext";

import products from "../data/products";

import UserLayout from "../layouts/UserLayout";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const ViewedPage = () => {
  const { viewed } = useViewed(); // List of recently viewed products (with viewedAt timestamp)
  const { addToCart } = useCart(); // Add product to cart

  const [selectedProduct, setSelectedProduct] = useState(null); // Product currently selected for detail view

  // Sort viewed list by most recent
  const sortedViewed = [...viewed].sort(
    (a, b) => new Date(b.viewedAt) - new Date(a.viewedAt)
  );

  // Get full product info from static product list
  const viewedProducts = sortedViewed
    .map((v) => products.find((p) => p.id === v.id))
    .filter(Boolean); // Remove null/undefined if product not found

  // Handle opening product modal
  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  // Add product to cart and notify user
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <UserLayout>
      {/* Page title */}
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Lịch sử đã xem</h2>

      {/* Viewed product list */}
      {viewedProducts.length > 0 ? (
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {viewedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={handleViewDetail}
            />
          ))}
        </div>
      ) : (
        // If no viewed products, show empty state
        <div className="text-center text-gray-500 mt-16">
          {/* Optionally add image here */}
          <p className="text-lg">Bạn chưa xem khoá học nào.</p>
          <p className="text-sm text-gray-400 mt-1">
            Hãy bắt đầu khám phá và chọn khóa học bạn thích!
          </p>
        </div>
      )}

      {/* Product detail modal */}
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

export default ViewedPage;
