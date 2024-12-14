import { Route, Routes } from "react-router-dom";
import NotFound from "./ui/NotFound";
import Home from "./pages/Home";
import { ProductProvider } from "./context/ProductContext";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { Toaster } from "react-hot-toast";
import CartProvider from "./context/CartContext";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Toaster />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <AppLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
