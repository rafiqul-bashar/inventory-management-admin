import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "src/api/productApi";
import AlertDialog from "src/components/Common/AlertDialog";

import ProductRow from "src/components/Inventory_page/ProductRow";

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleCancel = () => {
    setShowAlert(false);
  };
  const handleConfirm = () => {
    setShowAlert(false);
  };
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const handleSearch = (e) => {
    e.preventDefault();
  };
  // const filterProducts = () => {
  //   if (products.length !== 0) {
  //     let filteredProducts = [...products];
  //     // filter by search
  //     if (searchTerm) {
  //       filteredProducts = filteredProducts.filter((product) =>
  //         product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     }

  //     return filteredProducts;
  //   }
  //   return products;
  // };

  return (
    <section className="container mx-auto p-6 bg-gray-100 ">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h1 className="font-bold text-base">Products</h1>
        <div className="w-full p-4 bg-gray-100">
          <form onSubmit={handleSearch}>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-2 pl-10 pr-4 border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
            />
            <Link
              to="/dashboard/add-products"
              className="w-full bg-black text-white p-3 ml-6 rounded hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Add New Product
            </Link>
          </form>
        </div>
        <div className="mt-4">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex cursor-pointer">
                            <span className="mr-2">PRODUCT</span>
                          </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex cursor-pointer">
                            <span className="mr-2">PRICE</span>
                          </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex cursor-pointer">
                            <span className="mr-2">CATEGORY</span>
                          </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex cursor-pointer">
                            <span className="mr-2">ACTION</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products
                        ?.filter((product) =>
                          product.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                        ?.map((product) => (
                          <ProductRow
                            key={product?._id}
                            product={product}
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert && (
        <AlertDialog
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          label="Are you sure to delete the product ?"
        />
      )}
    </section>
  );
}
