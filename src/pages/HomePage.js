import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import PriceFilter from "../components/PriceFilter";
import ProductModal from "../components/ProductModal";
import { useViewed } from "../contexts/ViewedContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { toast } from "react-toastify";
import HeroBanner from "../components/HeroBanner";
import { useCart } from "../contexts/CartContext";
import ChatBotFloating from "../components/Chatbot/ChatBot";
import SortFilter from "../components/SortFilter";

const HomePage = () => {
  // ================== State declarations ==================
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedSort, setSelectedSort] = useState("");


  // ================== Context usage ==================
  const { addViewed, viewed } = useViewed();
  const { favorites } = useFavorites();
  const { addToCart } = useCart();

  // ================== Category and Price filter options ==================
  const categories = [
    "Tất cả",
    "Lập trình website",
    "AI",
    "Marketing",
    "Design",
    "Business",
    "English",
  ];

  // ================== Handlers ==================

  // Handle product detail view
  const handleViewDetail = (product) => {
    addViewed(product.id); // Add to viewed history
    setSelectedProduct(product); // Show modal
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Đã thêm vào giỏ hàng!");
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(12);

    if (cat === "Tất cả") {
      // Reset filters if "All" is selected
      setInputValue("");
      setSearchValue("");
      setSelectedPriceRange("");
    }
  };

  const handleSearch = () => {
    setSearchValue(inputValue.trim());
    setVisibleCount(12);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // Price filter logic
  const matchesPrice = (product) => {
    if (selectedPriceRange === "lt500") return product.price < 500000;
    if (selectedPriceRange === "500-1000")
      return product.price >= 500000 && product.price <= 1000000;
    if (selectedPriceRange === "gt1000") return product.price > 1000000;
    return true;
  };

  // Filter products based on category, search, and price
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    return matchesCategory && matchesSearch && matchesPrice(product);
  });

  // Sort by selection
  if (selectedSort === "students-desc") {
    filteredProducts.sort((a, b) => b.student - a.student);
  } else if (selectedSort === "students-asc") {
    filteredProducts.sort((a, b) => a.student - b.student);
  } else if (selectedSort === "reviews-desc") {
    filteredProducts.sort((a, b) => b.review - a.review);
  } else if (selectedSort === "reviews-asc") {
    filteredProducts.sort((a, b) => a.review - b.review);
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // ================== AI Suggestion Logic ==================
  const fetchSuggestedProducts = () => {
    setIsLoadingSuggestion(true);

    setTimeout(() => {
      const allLikedIds = new Set([
        ...favorites,
        ...viewed.map((v) => v.id),
      ]);

      const likedProducts = products.filter((p) => allLikedIds.has(p.id));

      // Count category frequency
      const categoryCount = {};
      likedProducts.forEach((p) => {
        categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
      });

      // Sort categories by frequency
      const sortedCategories = Object.entries(categoryCount)
        .sort((a, b) => b[1] - a[1])
        .map(([cat]) => cat);

      // Get products not yet liked but from popular categories
      const suggested = products
        .filter(
          (p) =>
            !allLikedIds.has(p.id) &&
            sortedCategories.includes(p.category)
        )
        .slice(0, 8);

      if (suggested.length > 0) {
        setSuggestedProducts(suggested);
      } else {
        toast.error("Không thể lấy gợi ý lúc này.");
      }

      setIsLoadingSuggestion(false);
    }, 1200);
  };

  // ================== Render ==================
  return (
    <div className="homepage">
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
      />

      {!searchValue && <HeroBanner />}

      <div className="max-w-6xl mx-auto mt-6 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          DANH SÁCH SẢN PHẨM GIÁO DỤC
        </h2>

        {/* Category Selection */}
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <CategoryMenu
            categories={categories}
            selected={selectedCategory}
            onSelect={handleSelectCategory}
          />
        </div>

        {/* Price Filter & Suggestion */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
           <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full md:w-auto">
            <PriceFilter
              selectedPriceRange={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            />
            <SortFilter
              selectedSort={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            />
          </div>
          <button
            onClick={fetchSuggestedProducts}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
          >
            Gợi ý sản phẩm phù hợp
          </button>
        </div>

        {/* Suggested Products Section */}
        {isLoadingSuggestion ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 h-60 rounded-md"
              ></div>
            ))}
          </div>
        ) : (
          (() => {
            const filteredSuggestions = suggestedProducts.filter((p) =>
              matchesPrice(p)
            );
            return filteredSuggestions.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredSuggestions.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onViewDetail={handleViewDetail}
                  />
                ))}
              </div>
            ) : null;
          })()
        )}

        {/* Product List */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Tất cả khóa học
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onViewDetail={handleViewDetail}
                />
              ))
            ) : (
              <div className="col-span-4 text-center text-red-600 font-semibold text-lg">
                Không tìm thấy khóa học phù hợp với yêu cầu của bạn.
              </div>
            )}
          </div>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Xem thêm khóa học
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Chatbot */}
      <ChatBotFloating />
    </div>
  );
};

export default HomePage;
