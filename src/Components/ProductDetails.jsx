import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./productItemsSkeleton";

export const ProductDetails = () => {
  const [product, setProducts] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProducts(data);
        setCurrentImage(data.thumbnail);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    };
    getProduct();
  }, [id]);
 
  if(loading) return <ProductDetailsSkeleton/>

  return (
    <div className=" w-4xl mx-auto">
      <div className="mt-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-pink-600 text-white p-3 rounded-xl cursor-pointer hover:bg-pink-800 transation-colors "
        >
          ← Go Back
        </button>
        <h2 className="text-2xl font-bold mt-4">{product?.title}</h2>
        <div className="md:flex">
          <div className="md:w-1/2 object-cover">
            {/* imagge and gellery */}
            <div>
              <img
                className=" w-full h-96 object-cover shadow rounded-xl mb-4 mt-6"
                src={currentImage}
                alt=""
              />
            </div>
            <div className="flex space-x-4  overflow-x-hidden">
              {product?.images?.map((imgs, index) => (
                <img
                  onClick={() => setCurrentImage(imgs)}
                  className="w-30 h-30 p-2 object-cover shadow cursor-pointer rounded-xl mb-3"
                  key={index}
                  src={imgs}
                  alt={product.images}
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/2 pl-6">
            <span className="text-gray-600">{product?.description}</span>

            <div className="flex justify-between mt-5 ">
              <span className="text-xl text-pink-600 font-semibold">
                ${product?.price.toFixed()}
              </span>
              <span className="text-gray-700">
                {product?.stock > 0
                  ? `${product?.stock} In stock`
                  : "out stock"}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.round(product?.rating))}
              </span>
              <span className="text-gray-300">
                {"★".repeat(Math.round(5 - product?.rating))}
              </span>
            </div>

            <button className="bg-pink-600 p-3 text-white rounded-xl cursor-pointer hover:bg-pink-700">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
