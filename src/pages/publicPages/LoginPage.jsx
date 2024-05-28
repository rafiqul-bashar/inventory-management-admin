import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "src/components/Auth/GoogleLogin";
import LoadingSpinner from "src/components/Common/LoadingSpinner";
import { auth } from "src/firebase/firebase.config";

export default function LoginPage() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, loading, navigate]);

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(email, password);
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center gap-3 mx-auto w-fit">
          <img src="/logo.png" alt="app_logo" className="w-10 h-10" />
          <h3 className="text-lg tracking-wide font-medium text-gray-700">
            Ecomgrove
          </h3>
        </div>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500 text-sm md:text-base">
          Log in here to manage all your inventory in one place.
        </p>

        <form
          onSubmit={handleEmailPasswordLogin}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
          {error?.message && (
            <p className="text-center text-red-500">{error?.message}</p>
          )}
          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:brightness-90 transition-all duration-200"
          >
            Sign in
          </button>

          <>
            <GoogleLogin />
          </>

          <button
            onClick={() =>
              signInWithEmailAndPassword("test@mail.com", "test1234")
            }
            className="block w-full border rounded-lg border-indigo-600 px-5 py-3 text-sm font-medium  hover:bg-indigo-100 transition-all duration-150"
          >
            Demo Login
          </button>

          <p className="text-center text-gray-500">
            Don&apos;t have any account ?{" "}
            <Link to={"/register"} className="text-orange-500 underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
