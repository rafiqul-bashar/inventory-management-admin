import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "src/firebase/firebase.config";
import useAuthStore from "src/store/authStore";
import axiosConf from "src/utils/axiosConf";

export default function GoogleLogin() {
  const googleProvider = new GoogleAuthProvider();
  const { setToken, saveUserData } = useAuthStore((state) => state);

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleProvider).then(async (data) => {
      if (data?.user) {
        const res = await axiosConf.post("/login", {
          email: data?.user?.email,
          name: data?.user?.displayName,
          uid: data?.user?.uid,
          displayPicture: data?.user?.photoURL,
          google: true,
        });
        setToken(res?.data?.token);
        saveUserData(res?.data?.user);
      }
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
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
