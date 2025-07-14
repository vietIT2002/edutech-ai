import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import ViewedPage from "./pages/ViewedPage"; 
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ViewedProvider } from "./contexts/ViewedContext";
import { CartProvider } from "./contexts/CartContext"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
  <FavoritesProvider>
    <ViewedProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/history" element={<ViewedPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      {/* Add Footer here */}
      <Footer />
    </ViewedProvider>
  </FavoritesProvider>
  </CartProvider>
</BrowserRouter>
  );
}

export default App;

