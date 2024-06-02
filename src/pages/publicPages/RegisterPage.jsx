import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "src/components/Auth/GoogleLogin";
import LoadingSpinner from "src/components/Common/LoadingSpinner";
import { auth } from "src/firebase/firebase.config";
import useAuthStore from "src/store/authStore";
import axiosConf from "src/utils/axiosConf";

export default function RegisterPage() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const { setToken, saveUserData } = useAuthStore((state) => state);
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      // navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  const handleRegisterWithEmailPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password doesn't match");
    } else {
      createUserWithEmailAndPassword(email, password).then(async (data) => {
        if (data?.user?.email) {
          const res = await axiosConf.post("/register", {
            email: data?.user?.email,
            name,
            uid: data?.user?.uid,
            displayPicture: data?.user?.photoURL,
          });
          await setToken(res?.data?.token);
          await saveUserData(res?.data?.user);
        }
      });
    }
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <section>
      <Toaster position="bottom-right" />

      {/* <!-- Right Pane --> */}
      <div className="w-full mx-auto  lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
          <h1 className="text-sm text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <GoogleLogin page="register" />
          <div className="flex items-center w-full my-4">
            <hr className="w-full  text-gray-600" />
            <p className="px-3  text-gray-600">OR</p>
            <hr className="w-full  text-gray-600" />
          </div>
          <form
            onSubmit={handleRegisterWithEmailPassword}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50"
                placeholder="Enter email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                className="w-full p-3 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50"
                placeholder="*******"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full p-3 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50"
                placeholder="*******"
              />
            </div>
            {error?.message && (
              <p className="text-center text-red-500">{error?.message}</p>
            )}

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
