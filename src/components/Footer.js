import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-16 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid columns layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-blue-800 pb-10">

          {/* Column 1: Brand description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-3">EDUTECH AI</h2>
            <p className="text-white/80 leading-relaxed">
              Nền tảng thương mại điện tử giáo dục thông minh – giúp bạn học tập và phát triển kỹ năng mọi lúc mọi nơi.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Khám phá</h3>
            <ul className="space-y-2 text-white/80">
              <li><button className="hover:text-white">Khóa học nổi bật</button></li>
              <li><button className="hover:text-white">Giáo trình chất lượng</button></li>
              <li><button className="hover:text-white">Tài liệu miễn phí</button></li>
              <li><button className="hover:text-white">Công cụ AI</button></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-white/80">
              <li><button className="hover:text-white">Trung tâm trợ giúp</button></li>
              <li><button className="hover:text-white">Hướng dẫn thanh toán</button></li>
              <li><button className="hover:text-white">Câu hỏi thường gặp</button></li>
              <li><button className="hover:text-white">Liên hệ chúng tôi</button></li>
            </ul>
          </div>

          {/* Column 4: Partner */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Đối tác</h3>
            <ul className="space-y-2 text-white/80">
              <li><button className="hover:text-white">Trở thành giảng viên</button></li>
              <li><button className="hover:text-white">Hợp tác doanh nghiệp</button></li>
              <li><button className="hover:text-white">Tuyển dụng</button></li>
              <li><button className="hover:text-white">Blog chuyên môn</button></li>
            </ul>
          </div>

          {/* Column 5: App & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tải ứng dụng</h3>
            <div className="flex flex-col space-y-2 mb-5">
              <button className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded hover:bg-gray-100 transition">
                <FaApple /> <span>Tải trên App Store</span>
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded hover:bg-gray-100 transition">
                <FaGooglePlay /> <span>Google Play</span>
              </button>
            </div>

            <h3 className="text-lg font-semibold mb-2">Kết nối</h3>
            <div className="flex space-x-4">
              <button className="text-white/80 hover:text-white" aria-label="Facebook">
                <FaFacebookF />
              </button>
              <button className="text-white/80 hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </button>
              <button className="text-white/80 hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn />
              </button>
              <button className="text-white/80 hover:text-white" aria-label="Twitter">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="mt-6 pt-4 border-t border-blue-800 text-center text-white/60 text-xs">
          © {new Date().getFullYear()} Edutech AI. Thiết kế bởi Tạ Quốc Việt – Nền tảng giáo dục trực tuyến hàng đầu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
