import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import GoogleLogin from "src/components/Auth/GoogleLogin";
import LoadingSpinner from "src/components/Common/LoadingSpinner";
import useAuthStore from "src/store/authStore";
import axiosConf from "src/utils/axiosConf";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "src/components/Common/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loginUserFromDB } from "src/api/userApi";
import { auth } from "src/firebase/firebase.config";

export default function LoginPage() {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { setToken, saveUserData } = useAuthStore((state) => state);

  const {
    mutate,
    isPending,
    isError: isPostError,
  } = useMutation({
    mutationFn: loginUserFromDB,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleDemoLogin = async () => {
    signInWithEmailAndPassword("test.admin@mail.com", "admin1234").then(
      async (data) => {
        if (data?.user?.email) {
          const res = await axiosConf.post("/login", {
            email: data?.user?.email,
            name: data?.user?.displayName,
            uid: data?.user?.uid,
            displayPicture: data?.user?.photoURL,
          });
          await setToken(res?.data?.token);
          await saveUserData(res?.data?.user);
        }
      }
    );
  };

  const validationSchema = yup.object({
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

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password).then(async (data) => {
      console.log(data);
    });
    // mutate();
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="w-full max-w-md p-4 rounded shadow sm:p-8 mx-auto ">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
      <p className="text-center text-gray-600">
        Dont have account?
        <Link
          to="/register"
          className="focus:underline hover:underline hover:text-orange-500 ml-2"
        >
          Sign up here
        </Link>
      </p>

      <GoogleLogin page="login" />

      <div className="flex items-center w-full my-4">
        <hr className="w-full  text-gray-600" />
        <p className="px-3  text-gray-600">OR</p>
        <hr className="w-full  text-gray-600" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          // disabled={isPending}
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
        >
          Sign in
        </button>

        <button
          onClick={handleDemoLogin}
          // disabled={isPending}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors duration-300"
        >
          Demo Login
        </button>
      </form>
    </div>
  );
}
