import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Navbar from "./page/Header/Navbar.jsx";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer";

export const ProductContext = React.createContext();
export default function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res));
  }, []);

  return (
    <Box minW="100vw" maxW="100vw" overflow="hidden">
      <Navbar />
      <ProductContext.Provider value={products}>
        <Home />
      </ProductContext.Provider>
      <Footer />
    </Box>
  );
}
