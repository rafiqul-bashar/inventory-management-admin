import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_CATEGORIES_LINK, PRODUCT_LINK } from "src/utils/constants";

export default function EditProductPage() {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(PRODUCT_CATEGORIES_LINK);

      setCategories(categoriesData?.data);

      const productData = await axios.get(`${PRODUCT_LINK}/${id}`);
      setProductDetails(productData?.data);
    }

    load();
  }, [id]);

  return (
    <div>
      EditProductPage
      <div className="p-4 bg-green-200 flex flex-col gap-4">
        <img
          src={productDetails?.image}
          alt={productDetails?.title}
          className="w-12 h-12"
        />
        <h2>{productDetails?.title}</h2>
        <p>{productDetails?.description}</p>
        <h2>{productDetails?.categories}</h2>
        <h2>{productDetails?.price}</h2>
        <br />
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select
            name="category"
            id=""
            className="w-full py-3 px-5 border text-violet-500"
          >
            {categories?.map((category, i) => (
              <option
                key={i}
                defaultValue={category === productDetails?.category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
