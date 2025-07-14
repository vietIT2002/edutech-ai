import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { MdArrowBack } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

// Navigation menu items
const menuItems = [
  { label: "Yêu thích", path: "/favorites" },
  { label: "Lịch sử đã xem", path: "/history" },
  { label: "Khóa học của tôi", path: "" },
  { label: "Khóa học đã hoàn thành", path: "" },
  { label: "Công cụ học tập", path: "" },
];

export default function UserLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global header */}
      <Header />

      {/* Top section with background and user info */}
      <div className="bg-blue-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">

          {/* Back to homepage button */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1 bg-white text-blue-900 font-medium px-3 py-1.5 text-sm rounded hover:bg-gray-100 transition"
            >
              <MdArrowBack className="text-base" />
              Trang chủ
            </Link>
          </div>

          {/* Student name & icon */}
          <div className="mt-4 flex items-center gap-3">
            <FaUserGraduate className="text-xl sm:text-2xl text-white/90" />
            <h1 className="text-lg sm:text-2xl font-semibold leading-tight">
              Học viên: Tạ Quốc Việt
            </h1>
          </div>

          {/* Navigation menu */}
          <nav className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm sm:text-base">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path || index}
                  to={item.path}
                  className={`block w-full sm:w-auto text-center pb-2 border-b-2 sm:border-b-0 transition ${
                    isActive
                      ? "border-white font-semibold"
                      : "border-transparent hover:border-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content area */}
      <div className="bg-gray-50 px-4 sm:px-6 py-10 flex-grow max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
