import axios from "axios";
import { useEffect, useState } from "react";
import ProductRow from "src/components/Inventory_page/ProductRow";
import { PRODUCT_LINK } from "src/utils/constants";

export default function InventoryPage() {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function load() {
      const { data } = await axios.get(PRODUCT_LINK);
      setProducts(data);
    }
    load();
  }, []);
  return (
    <section className="container mx-auto p-6 ">
      <h1 className="text-3xl mb-4">Mange All product</h1>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map((product) => (
                <ProductRow key={product?.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
