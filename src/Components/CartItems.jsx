import React from "react";
import { BsTrash3 } from "react-icons/bs";

export const CartItems = () => {
  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "BEA-ESS-ESS-001",
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 3,
          comment: "Would not recommend!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Eleanor Collins",
          reviewerEmail: "eleanor.collins@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Lucas Gordon",
          reviewerEmail: "lucas.gordon@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Eleanor Collins",
          reviewerEmail: "eleanor.collins@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 48,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "5784719087687",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 18.19,
      rating: 2.86,
      stock: 34,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "BEA-GLA-EYE-002",
      weight: 9,
      dimensions: {
        width: 9.26,
        height: 22.47,
        depth: 27.67,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Savannah Gomez",
          reviewerEmail: "savannah.gomez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Awesome product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Christian Perez",
          reviewerEmail: "christian.perez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Nicholas Bailey",
          reviewerEmail: "nicholas.bailey@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 20,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9170275171413",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
    {
      id: 24,
      title: "Fish Steak",
      description:
        "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      category: "groceries",
      price: 14.99,
      discountPercentage: 4.23,
      rating: 3.78,
      stock: 74,
      tags: ["seafood"],
      sku: "GRO-BRD-FIS-024",
      weight: 6,
      dimensions: {
        width: 14.95,
        height: 26.31,
        depth: 11.27,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Would not buy again!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Caleb Perkins",
          reviewerEmail: "caleb.perkins@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Isabella Jackson",
          reviewerEmail: "isabella.jackson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Nathan Dixon",
          reviewerEmail: "nathan.dixon@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 50,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9595036192098",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold pb-3">
          {products.length > 0
            ? "Your Cart Items"
            : "Your cart is empty right now please go a head and add some items"}
        </h2>

        {products.map((product) => (
          <div className="flex flex-start space-y-9">
            <img
              className=" w-24 h-24 rounded-lg "
              src={product.thumbnail}
              alt={product.title}
            />

            <div className="flex flex-col">
              <h2 className="font-semibold text-base">{product.title}</h2>
              <div className="text-sm text-gray-600">{product.description}</div>
              <div className="flex items-center justify-between">
                <div className="space-x-2">
                  <span className="text-pink-600 font-semibold">
                    ${product.price.toFixed()}
                  </span>
                  <span className="font-semibold">Quantity</span>
                  <input className="border w-15 rounded" type="number" />
                </div>
                <div className="text-red-700 cursor-pointer">
                  <BsTrash3 />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* cart peyments */}
      <div className="border lg:w-1/3">hello</div>
    </div>
  );
};
