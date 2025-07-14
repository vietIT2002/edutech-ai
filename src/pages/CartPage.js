import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import UserLayout from "../layouts/UserLayout";
import { 
  FiTrash2, 
  FiShoppingCart, 
  FiCreditCard, 
  FiX, 
  FiCheck,
  FiShoppingBag 
} from "react-icons/fi";

// Reusable ConfirmDialog Component
const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600">{message}</p>
        </div>
        
        {/* Actions */}
        <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <FiTrash2 className="w-4 h-4" />
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Toast Component
const Toast = ({ isVisible, message, type = "success", onClose }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";
  const icon = type === "success" ? <FiCheck className="w-5 h-5" /> : <FiX className="w-5 h-5" />;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2 duration-300">
      <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3`}>
        {icon}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

// CartItem Component
const CartItem = ({ item, onDelete, isSelected, onSelect }) => {
  return (
    <div className={`bg-white rounded-lg border p-4 hover:shadow-md transition-all duration-200 ${
      isSelected ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
    }`}>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Checkbox */}
        <div className="flex-shrink-0 flex items-center">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(item.id)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
        </div>

        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full sm:w-24 h-24 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {item.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">
              {item.price.toLocaleString()} đ
            </span>
            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
              Course
            </span>
          </div>
        </div>

        {/* Delete Button */}
        <div className="flex-shrink-0 flex items-start">
          <button
            onClick={() => onDelete(item.id, item.name)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors group"
            title="Remove from cart"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Empty Cart Component
const EmptyCart = () => (
  <div className="text-center py-16">
    <div className="mb-6">
      <FiShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-600 mb-2">
        Giỏ hàng của bạn trống
      </h3>
      <p className="text-gray-500">
        Khám phá các khóa học tuyệt vời và bắt đầu hành trình học tập của bạn.
      </p>
    </div>
    <button 
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      onClick={() => window.history.back()}
    >
      <FiShoppingCart className="w-5 h-5" />
      Tiếp tục chọn khóa học
    </button>
  </div>
);

// Order Summary Component
const OrderSummary = ({ cartItems, total }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Tóm tắt đơn hàng
    </h3>
    
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Khóa học ({cartItems.length})</span>
        <span className="text-gray-900">{total.toLocaleString()} đ</span>
      </div>
      
      <div className="border-t pt-3">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Tổng cộng</span>
          <span className="text-xl font-bold text-blue-600">
            {total.toLocaleString()} đ
          </span>
        </div>
      </div>
    </div>

    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg mt-6 transition-colors flex items-center justify-center gap-2">
      <FiCreditCard className="w-5 h-5" />
      Tiến hành thanh toán
    </button>

    <div className="mt-4 text-center">
      <p className="text-xs text-gray-500">
        Thanh toán an toàn và bảo mật
      </p>
    </div>
  </div>
);

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    itemId: null,
    itemName: "",
    type: "single"
  });
  const [toastState, setToastState] = useState({
    isVisible: false,
    message: "",
    type: "success"
  });

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleItemSelect = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
  };

  const handleDeleteClick = (itemId, itemName) => {
    setConfirmDialog({
      isOpen: true,
      itemId,
      itemName,
      type: "single"
    });
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length === 0) return;
    
    setConfirmDialog({
      isOpen: true,
      itemId: null,
      itemName: "",
      type: "selected"
    });
  };

  const handleClearCart = () => {
    setConfirmDialog({
      isOpen: true,
      itemId: null,
      itemName: "",
      type: "all"
    });
  };

  const handleDeleteConfirm = () => {
    if (confirmDialog.type === "single") {
      removeFromCart(confirmDialog.itemId);
      setToastState({
        isVisible: true,
        message: "Đã xóa sản phẩm khỏi giỏ hàng",
        type: "success"
      });
    } else if (confirmDialog.type === "selected") {
      selectedItems.forEach(itemId => removeFromCart(itemId));
      setSelectedItems([]);
      setToastState({
        isVisible: true,
        message: `Đã xóa ${selectedItems.length} sản phẩm khỏi giỏ hàng`,
        type: "success"
      });
    } else if (confirmDialog.type === "all") {
      cartItems.forEach(item => removeFromCart(item.id));
      setSelectedItems([]);
      setToastState({
        isVisible: true,
        message: "Đã xóa toàn bộ sản phẩm khỏi giỏ hàng",
        type: "success"
      });
    }
    
    setConfirmDialog({ isOpen: false, itemId: null, itemName: "", type: "single" });
  };

  const handleDeleteCancel = () => {
    setConfirmDialog({ isOpen: false, itemId: null, itemName: "", type: "single" });
  };

  const handleToastClose = () => {
    setToastState({ isVisible: false, message: "", type: "success" });
  };

  return (
    <UserLayout>
      <div className="min-h-screen bg-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">Giỏ hàng</h1>
            <p className="text-gray-600">
              {cartItems.length > 0 
                ? `${cartItems.length} sản phẩm${cartItems.length > 1 ? 's' : ''} trong giỏ hàng của bạn`
                : 'Bắt đầu xây dựng bộ sưu tập khóa học của bạn'
              }
            </p>
          </div>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {/* Bulk Actions */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {selectedItems.length === cartItems.length && cartItems.length > 0
                          ? "Bỏ chọn tất cả"
                          : `Chọn tất cả (${cartItems.length})`
                        }
                      </span>
                      {selectedItems.length > 0 && (
                        <span className="text-sm text-blue-600 font-medium">
                          {selectedItems.length} được chọn
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={handleDeleteSelected}
                      disabled={selectedItems.length === 0}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                        selectedItems.length === 0
                          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                          : "text-red-600 bg-red-50 hover:bg-red-100"
                      }`}
                    >
                      <FiTrash2 className="w-4 h-4" />
                      Xóa đã chọn
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onDelete={handleDeleteClick}
                      isSelected={selectedItems.includes(item.id)}
                      onSelect={handleItemSelect}
                    />
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary 
                  cartItems={cartItems} 
                  total={total} 
                  onClearCart={handleClearCart}
                />
              </div>
            </div>
          )}

          {/* Confirm Dialog */}
          <ConfirmDialog
            isOpen={confirmDialog.isOpen}
            onClose={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
            title="Xóa khóa học"
            message={`Bạn có chắc muốn xóa khóa học không?`}
          />

          {/* Toast Notification */}
          <Toast
            isVisible={toastState.isVisible}
            message={toastState.message}
            type={toastState.type}
            onClose={handleToastClose}
          />
        </div>
      </div>
    </UserLayout>
  );
};

export default CartPage;