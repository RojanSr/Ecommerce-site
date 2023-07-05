import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Header/Navbar.jsx";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage.jsx";

import { Route, Routes } from "react-router-dom";
import ProductView from "./page/ProductView/index.jsx";
import Combo from "./page/Combo/Combo.jsx";

export const ProductContext = React.createContext();
export default function App() {
  const [products, setProducts] = useState([]);

  // Fetching data from fakestoreapi.com
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Error while fetch");
        }
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
        return null;
      }
    }

    fetchData();
  }, []);

  return (
    <Box minW="100vw" maxW="100vw" overflow="hidden">
      <Navbar />
      <Routes>
        {/* Route to Home */}
        <Route
          path="/"
          element={
            <ProductContext.Provider value={products ? products : []}>
              <Home />
            </ProductContext.Provider>
          }
        />

        {/* Route to ProductView */}
        <Route
          path="/ProductView/:id"
          element={
            <ProductContext.Provider value={products ? products : []}>
              <ProductView />
            </ProductContext.Provider>
          }
        />

        {/* Route to Combo */}
        <Route
          path="/Combo"
          element={
            <ProductContext.Provider value={products ? products : []}>
              <Combo />
            </ProductContext.Provider>
          }
        />

        {/* For Not found route path */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}
