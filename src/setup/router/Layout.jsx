import React from "react";
import AuthModal from "../../common/authModal/AuthModal";
import CartSidebar from "../../common/cartSidebar/CartSidebar";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <CartSidebar />
      <AuthModal />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
