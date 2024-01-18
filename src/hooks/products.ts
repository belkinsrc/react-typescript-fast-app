import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product]);
  }

  async function fetchProducts() {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      const data: IProduct[] = response.data;
      setProducts(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setProducts([]);
      setError("Произошла ошибка: " + e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return {
    products,
    loading,
    error,
    addProduct
  };
}