import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "src/components/Common/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, fetchProducts } from "src/api/productApi";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const queryClient = useQueryClient();
  // get categories
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const categories = Array.from(
    new Set(products?.map((product) => product.category))
  );
  const validationSchema = yup.object({
    name: yup.string().required("Product Title cannot be empty"),
    price: yup
      .number("You must put a number")
      .required("Product Title cannot be empty")
      .positive("price cannot be negative value"),
    description: yup
      .string()
      .required("Product description cannot be empty")
      .min(20, "Does not looks right. Add some more details"),
    category: yup
      .string()
      .required("Please choose a Category")
      .oneOf(categories),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category: "",
    },
  });
  //  addProduct

  const {
    mutate,
    isPending,
    isError: isPostError,
  } = useMutation({
    mutationFn: addProduct,
    retry: 3,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      reset();
      toast.success("Added New Product Successfully!");
    },
  });

  const onSubmit = (data) => {
    const productData = {
      title: data?.name,
      price: data?.price,
      description: data?.description,
      category: data?.category,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMYAIp4_hZTW17-XIawvaKdtdXhRxXACaew&s",
    };
    mutate(productData);
  };

  return (
    <div className=" flex flex-col gap-8 lg:w-1/2 px-4">
      <Toaster />
      <div className="border-b border-stroke py-4 px-7">
        <h3 className="font-medium text-black">Add New Product</h3>
      </div>
      {/* add product form */}
      <div className="col-span-5 xl:col-span-3 pb-10 lg:ml-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMYAIp4_hZTW17-XIawvaKdtdXhRxXACaew&s"
          alt="shoe-img"
          className="h-24 mx-auto"
        />
        <p className="my-2 text-gray-600">
          * This is default pic for all new products. I will add the
          funcionality later
        </p>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Input label="name" register={register} error={errors?.name} />
            <Input
              label="price"
              register={register}
              error={errors?.price}
              type="number"
            />
            <Input
              label="description"
              register={register}
              type="textarea"
              error={errors?.description}
            />
            <div className="space-y-2">
              <label className=" text-gray-700 capitalize">
                Select Category
              </label>
              <select
                {...register("category")}
                className="w-full p-2 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50"
              >
                {categories?.map((category, index) => (
                  <option key={index} value={category}>
                    <span className="capitalize">{category}</span>
                  </option>
                ))}
              </select>
            </div>

            <button
              disabled={isPending}
              type="submit"
              className={`w-full block ${
                isPending ? "bg-slate-400" : "bg-black"
              } text-white p-2 rounded hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 text-center`}
            >
              {isPending ? "wait...." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
