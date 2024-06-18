import { useEffect, useContext } from "react";

import { getAllProducts } from "../services/getAlllProdcuts";
import { ProductContext } from "../context/productContext";
export function useProducts() {
  const { product, setProduct } = useContext(ProductContext);

  useEffect(() => {
    getAllProducts().then((products) => setProduct(products));
  }, []);
  const productList = product.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    };
  });

  function getProduct(search) {
    if (search) {
      setProduct(productList);
    } else {
      setProduct(product);
    }
  }

  return { productList: product, getProduct };
}
