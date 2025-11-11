import axios from "axios";
import React, { useEffect, useState } from "react";

import { ProductItems } from "./ProductItems";
import ProductLoadingSkeleton from "./ProductSkeleton";

export default function ProductsList() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");

        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <ProductLoadingSkeleton/>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 p-4 rounded ">
      {products?.map((product) => (
        <ProductItems key={[product.id]} product={product} />
      ))}
    </div>
  );
}
