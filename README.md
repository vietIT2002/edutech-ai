# Edutech AI - AI-powered Educational E-commerce Platform

## Project Description

Edutech AI is a mock educational e-commerce platform where users can explore, search for, and favorite educational products such as online courses, textbooks, and materials. The system features an **AI-based suggestion engine** to recommend the most relevant content based on user interaction.

Developed using **ReactJS** and **TailwindCSS**, it emphasizes responsive design and smooth user experience across all devices.

---

## Features

* Display a list of educational products/courses
* Search by product name
* ilter by price range (`<500K`, `500K–1M`, `>1M`)
* Sort by number of students (most ↕ least enrolled)
* dd/remove favorites and manage favorite list
* View detailed course information in a modal
* Track and view history of previously viewed products
* Add/remove products from cart
* Smart AI-based product suggestion
* Basic chatbot (mocked) to recommend based on user input keywords
* Display error and loading skeleton when fetching AI suggestions
* Fully responsive layout for all devices

---

## How AI Suggestion Works

When the user clicks on **"Suggest Suitable Products"**, the system calls the mocked API `/api/suggestions?userId=xxx`.

It then:

1. Retrieves the list of **viewed** and **favorited** products.
2. Determines the most frequently interacted **categories**.
3. Suggests products from these categories that the user hasn't viewed or liked yet.
4. Filters suggestions further based on the **current price filter**.
5. If no suggestions are found, an error message is displayed.

---

## Technologies Used

* ReactJS + TailwindCSS
* React Router
* useState, useEffect, Context API (Favorites, Cart, Viewed)
* Axios (mock API)
* React Toastify (notifications)
* ChatGPT, Claude (code assistance)

---

## Folder Structure

```
src/
├── components/       # Reusable UI components (ProductCard, Modal, Header...)
├── contexts/         # Contexts for managing cart, favorites, viewed history
├── data/             # Mock data (products)
├── layouts/          # Layouts (UserLayout)
├── pages/            # Pages: Home, Cart, Favorites, History
├── styles/           # Custom CSS/Tailwind files
├── App.js            # Main router
├── index.js          # Entry point
```

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/edutech-ai.git
cd edutech-ai
```
2. **Install dependencies**

```bash
npm install
```
3. **Run the development server**

```bash
npm start
```
The app will run at `http://localhost:3000`

---

# 🇻🇳 Edutech AI - Sàn thương mại điện tử giáo dục tích hợp AI

## Mô tả dự án

Edutech AI là nền tảng mô phỏng sàn thương mại điện tử các sản phẩm giáo dục (khóa học, giáo trình, tài liệu...) có tích hợp gợi ý thông minh AI. Người dùng có thể tìm kiếm, khám phá và quản lý danh sách yêu thích một cách dễ dàng.

Dự án được xây dựng bằng **ReactJS** và **TailwindCSS**, đảm bảo giao diện hiện đại, tương thích mọi thiết bị.

---

## Chức năng

* Hiển thị danh sách khóa học
* Tìm kiếm khóa học theo tên
* Lọc theo khoảng giá (`<500K`, `500K–1 triệu`, `>1 triệu`)
* Sắp xếp theo số học viên (nhiều nhất ↕ ít nhất)
* Yêu thích và quản lý danh sách yêu thích
* Hiển thị chi tiết sản phẩm qua modal
* Lịch sử xem sản phẩm
* Thêm / xóa sản phẩm khỏi giỏ hàng
* Gợi ý thông minh AI dựa trên hành vi
* Chatbot tư vấn (mock logic – dựa trên từ khóa)
* Thông báo lỗi và loading skeleton khi gọi gợi ý
* Giao diện responsive mọi thiết bị

---

## Cách hoạt động của Gợi ý AI

Khi người dùng nhấn nút **“Gợi ý sản phẩm phù hợp”**, hệ thống sẽ gọi API giả lập `/api/suggestions?userId=xxx`.

Quy trình:

1. Lấy danh sách **đã xem** và **đã yêu thích** của người dùng
2. Xác định các **danh mục** được quan tâm nhiều nhất
3. Gợi ý sản phẩm khác **cùng danh mục**, **chưa từng xem hoặc yêu thích**
4. Lọc kết quả theo **bộ lọc giá hiện tại** (nếu có)
5. Nếu không có gợi ý phù hợp, hiển thị **thông báo lỗi**

---

## Công nghệ sử dụng

* ReactJS + TailwindCSS
* React Router
* useState, useEffect, Context API (Favorites, Cart, Viewed)
* Axios (mock API)
* React Toastify (hiển thị toast)
* ChatGPT, Claude (hỗ trợ viết và tối ưu code)

---

## Cấu trúc thư mục

```
src/
├── components/       # Component giao diện tái sử dụng (ProductCard, Modal...)
├── contexts/         # Context quản lý giỏ hàng, yêu thích, lịch sử
├── data/             # Dữ liệu mock (sản phẩm)
├── layouts/          # Layout tổng thể (UserLayout)
├── pages/            # Các trang: Trang chủ, Giỏ hàng, Yêu thích, Lịch sử
├── styles/           # CSS tùy chỉnh / Tailwind
├── App.js            # File định tuyến chính
├── index.js          # Điểm khởi tạo ứng dụng
```

---

## Hướng dẫn chạy local

1. **Clone dự án**

```bash
git clone https://github.com/your-username/edutech-ai.git
cd edutech-ai
```

2. **Cài đặt thư viện phụ thuộc**

```bash
npm install
```

3. **Khởi chạy ứng dụng**

```bash
npm start
```

Ứng dụng chạy tại `http://localhost:3000`

---

Chúc bạn trải nghiệm hệ thống thành công!
