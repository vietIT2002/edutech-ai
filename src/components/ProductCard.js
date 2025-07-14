import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../contexts/FavoritesContext';
import { toast } from 'react-toastify';
import '../styles/ProductCard.css'; // Custom CSS for image

const ProductCard = ({ product, onViewDetail }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);

    isFavorite
      ? toast.info(`Đã xóa khóa học ${product.name} khỏi yêu thích`)
      : toast.success(`Đã thêm khóa ${product.name} vào yêu thích`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full relative group transition hover:shadow-lg">
      
      {/* Heart Icon - Show on hover */}
      <div
        className="absolute top-8 right-5 p-2 rounded-full bg-white shadow cursor-pointer hover:text-red-500 transition hidden group-hover:block"
        onClick={handleToggleFavorite}
        aria-label="Toggle Favorite"
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-400" />
        )}
      </div>

      {/* Product Content */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="udemy-card-img rounded-md"
        />

        <div className="mt-3 space-y-1">
          <h2 className="font-semibold text-base line-clamp-2">
            {product.name}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="text-sm">
            <span className="inline-block text-blue-600 rounded-full px-2 py-0.5 text-xs font-medium">
              {product.student.toLocaleString('vi-VN')} học viên
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-orange-600 font-bold text-base">
              {product.price.toLocaleString()} đ
            </span>
            {product.Originalprice > product.price && (
              <>
                <span className="text-sm line-through text-gray-400">
                  {product.Originalprice.toLocaleString()} đ
                </span>
                <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-medium">
                  -{Math.round(((product.Originalprice - product.price) / product.Originalprice) * 100)}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Detail Button */}
      <div className="mt-4">
        <button
          onClick={() => onViewDetail(product)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
