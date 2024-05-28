import React from "react";
import { Link } from "react-router-dom";

export default function ProductRow({ product }) {
  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border">
        <div className="flex items-center text-sm">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full "
              src={product?.image}
              alt={product?.title}
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold text-black">{product?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">
        {product?.price}
      </td>
      <td className="px-4 py-3 text-xs border">
        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm capitalize">
          {product?.category}
        </span>
      </td>
      <td className="px-4 py-3 text-sm border">
        <div className="flex items-center gap-2 font-medium">
          <button className="bg-gray-100 px-3 py-1">
            <Link to={`/dashboard/edit-product/${product?.id}`}>Edit</Link>
          </button>
          <button className="bg-red-500 text-white px-3 py-1">Delete</button>
        </div>
      </td>
    </tr>
  );
}
