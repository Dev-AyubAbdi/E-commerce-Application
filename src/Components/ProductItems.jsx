import React from 'react'
import { Link } from 'react-router-dom'

export const ProductItems = ({product}) => {
  return (
    <Link to={`/product-details/${product.id}`}>
      
          <div
            key={[product.id]}
            className="bg-white shadow mt-5 overflow-hidden p-5"
          >
            {
              <img
                className="object-cover p-4"
                src={product.thumbnail}
                alt=""
              />
            }
            <div>
              <h2 className=" font-semibold text-xl mb-2 ">{product.title}</h2>
              <p className="truncate text-center text-gray-600 mb-2">
                {product.description}
              </p>
            </div>
            <div className="flex justify-between text-center">
              <span className="text-blue-600 font-semibold mb-2">
                ${product.price.toFixed()}
              </span>
              {product.stock > 0 ? `${product.stock} In stock` : "out stock"}
            </div>
            <div>
              <span className="text-yellow-500">
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className="text-gray-300">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>
          </div>
    
    </Link>

  )
}
