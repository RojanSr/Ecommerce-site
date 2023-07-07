import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

// Create context
export const ProductContext = React.createContext();

export function ProductContextProvider({ children }) {
  // Store product infos fetched in state
  const [products, setProducts] = useState(null);

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

  // Show loader if api is not fetched yet
  if (!products) {
    return (
      <VStack>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </VStack>
    );
  }
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
