import React, { useState, useEffect } from "react";
import axios from "axios";

// Create context
export const ProductContext = React.createContext();

export function ProductContextProvider({ children }) {
  // Store product infos fetched in state
  const [products, setProducts] = useState([]);

  // Fetching data from fakestoreapi.com
  function fetchData() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
