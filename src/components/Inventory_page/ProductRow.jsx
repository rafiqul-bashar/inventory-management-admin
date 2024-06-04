import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteProduct } from "src/api/productApi";

export default function ProductRow({ product }) {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending,
    isError: isPostError,
  } = useMutation({
    mutationFn: deleteProduct,
    retry: 3,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("Deleted Product!");
    },
  });

  return (
    <tr>
      <Toaster />
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
        <div className="flex items-center gap-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-12 w-12"
          />
          <p className="font-medium">{product?.title}</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
        <p>$ {product?.price}</p>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
        <p className="text-gray-600 capitalize">{product?.category}</p>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
        <div className="flex space-x-4">
          <Link
            to={`/dashboard/edit-product/${product._id}`}
            className="text-blue-500 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <p>Edit</p>
          </Link>
          <button
            onClick={() => mutate(product?._id)}
            className="text-red-500 hover:text-red-600"
          >
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-1 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <p>Delete</p>
            </>
          </button>
        </div>
      </td>
    </tr>
  );
}
