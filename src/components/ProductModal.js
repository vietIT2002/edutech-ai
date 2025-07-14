import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import PropTypes from "prop-types";

const ProductModal = ({ product, onClose, onAddToCart }) => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  if (!product) return null;
  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 animate-fadeIn">
      <div className="relative bg-white rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl max-h-[85vh] overflow-hidden shadow-xl animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h2 className="text-base font-semibold text-gray-900 truncate pr-4">
            Chi tiết sản phẩm
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(85vh-60px)]">
          {/* Product Image */}
          <div className="w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 md:p-6 space-y-4">
              {/* Product Name */}
              <div>
                <h1 className="text-xl md:text-2xl font-medium text-gray-900 leading-tight mb-2">
                  {product.name}
                </h1>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating}
                </span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  {product.review} đánh giá
                </span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-600">
                   {product.student.toLocaleString('vi-VN')} Học viên
                </span>
              </div>

              {/* Price */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl md:text-3xl font-medium text-red-600">
                    ₫{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ₫{(product.Originalprice).toLocaleString()}
                  </span>
                  {product.Originalprice > product.price && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-medium">
                      -{Math.round(((product.Originalprice - product.price) / product.Originalprice) * 100)}%
                    </span>
                  )}

                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Còn hàng</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  Mô tả sản phẩm
                </h3>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.description}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex gap-3">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded transition-colors duration-200 text-sm"
                  >
                    <FaShoppingCart className="text-xs" />
                    Thêm vào giỏ hàng
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded transition-colors duration-200 text-sm">
                    Mua ngay
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductModal;