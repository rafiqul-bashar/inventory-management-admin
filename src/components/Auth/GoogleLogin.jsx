import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/firebase.config";
import LoadingSpinner from "../Common/LoadingSpinner";

export default function GoogleLogin() {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <button
      onClick={() => signInWithGoogle()}
      aria-label="Login with Google"
      type="button"
      className="flex items-center justify-center w-full p-3 space-x-4 border-2 rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 my-8 hover:bg-gray-100 hover:border-blue-400  transition-all duration-300"
    >
      <img
        src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
        alt="google_icon"
        className="h-6 w-6"
      />
      <p>Login with Google</p>
    </button>
  );
}
