import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "src/components/Auth/GoogleLogin";
import Input from "src/components/Common/Input";
import LoadingSpinner from "src/components/Common/LoadingSpinner";
import { auth } from "src/firebase/firebase.config";
import useAuthStore from "src/store/authStore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUserToDB } from "src/api/userApi";
import { useMutation } from "@tanstack/react-query";

export default function RegisterPage() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { setToken, saveUserData } = useAuthStore((state) => state);
  const {
    mutate,

    isError: isPostError,
  } = useMutation({
    mutationFn: registerUserToDB,
    onSuccess: (data) => {
      saveUserData(data?.user);
      setToken(data?.token);
    },
  });

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name cannot be empty")
      .min(5, "Doesn't looks like a good name"),
    email: yup
      .string()
      .required("Email cannot be empty")
      .email("Email looks like invalid"),
    password: yup
      .string()
      .required("Password cannot be empty")
      .min(8, "Password should be 8 characters minimum."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    createUserWithEmailAndPassword(email, password).then(async (data) => {
      if (data?.user) {
        mutate({
          email: data?.user?.email,
          name,
          uid: data?.user?.uid,
          displayPicture:
            data?.user?.photoURL ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD41FVYIkCGUt1NV9V6FZ1vZx3NdcCK0QQPA&s",
        });
      }
    });
    // mutate();
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <section>
      <Toaster />

      {/* <!-- Right Pane --> */}
      <div className="w-full mx-auto  lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
          <h1 className="text-sm text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <GoogleLogin />
          <div className="flex items-center w-full my-4">
            <hr className="w-full  text-gray-600" />
            <p className="px-3  text-gray-600">OR</p>
            <hr className="w-full  text-gray-600" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input label="name" register={register} error={errors?.name} />
            <Input
              label="email"
              register={register}
              error={errors?.email}
              type="email"
            />
            <Input
              label="password"
              register={register}
              error={errors?.password}
              type="password"
            />
            {error && <span className="text-red-500">{error?.message}</span>}

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-black hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
