import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/firebase.config";
import LoadingSpinner from "../Common/LoadingSpinner";

export default function GoogleLogin() {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className=" px-5 py-3 w-full rounded-lg border border-gray-600"
      >
        <div className="flex items-center gap-3 justify-center">
          <img
            src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
            alt="google_icon"
            className="h-6 w-6"
          />
          <h5>Google Login</h5>
        </div>
      </button>
    </div>
  );
}
