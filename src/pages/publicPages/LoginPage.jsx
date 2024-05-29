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
      <GoogleLogin />

      <div className="flex items-center w-full my-4">
        <hr className="w-full  text-gray-600" />
        <p className="px-3  text-gray-600">OR</p>
        <hr className="w-full  text-gray-600" />
      </div>
      <form onSubmit={handleEmailPasswordLogin} className="space-y-4">
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
        {error?.message && (
          <p className="text-center text-red-500">{error?.message}</p>
        )}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
        >
          Sign in
        </button>

        <button
          onClick={() =>
            signInWithEmailAndPassword("test@mail.com", "test1234")
          }
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors duration-300"
        >
          Demo Login
        </button>
      </form>
    </div>
  );
}
