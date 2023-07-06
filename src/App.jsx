import React from "react";
import { Box } from "@chakra-ui/react";

// Import Components
import Navbar from "./components/Header/Navbar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer";

//Import Pages
import Home from "./page/Home/Home.jsx";
import Men from "./page/Men/index.jsx";
import Women from "./page/Women/index.jsx";
import Combo from "./page/Combo/Combo.jsx";
import ProductView from "./page/ProductView/index.jsx";

import { Route, Routes } from "react-router-dom";
import { ProductContextProvider } from "./page/ProductContext.jsx";

// Create context for product api
export default function App() {
  return (
    <Box minW="100vw" maxW="100vw" overflow="hidden">
      <Navbar />
      <ProductContextProvider>
        <Routes>
          {/* Route to Home */}
          <Route path="/" element={<Home />} />

          {/* Route to Men product page */}
          <Route path="/men" element={<Men />} />

          {/* Route to Women product page */}
          <Route path="/women" element={<Women />} />

          {/* Route to ProductView page */}
          <Route path="/ProductView/:id" element={<ProductView />} />

          {/* Route to Combo page */}
          <Route path="/Combo" element={<Combo />} />

          {/* Route to not found page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ProductContextProvider>
      <Footer />
    </Box>
  );
}
