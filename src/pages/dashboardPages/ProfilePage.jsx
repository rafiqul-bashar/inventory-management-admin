import { useUpdatePassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { auth } from "src/firebase/firebase.config";
import useAuthStore from "src/store/authStore";

export default function ProfilePage() {
  const { userData } = useAuthStore((state) => state);
  const [updatePassword, updating, error] = useUpdatePassword(auth);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const form = e.target;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      updatePassword(password).then(() => {
        toast.success("Changed Password Successfully!");
      });
    }
  };
  return (
    <div className="grid grid-cols-5 gap-8 bg-gray-50">
      <Toaster />
      <div className="col-span-5 xl:col-span-3 px-4 pb-6 lg:px-16">
        <div className="border-b border-stroke py-4 px-7 ">
          <h3 className="font-medium">Personal Information</h3>
        </div>
        <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-20 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
          <div className="relative drop-shadow-2">
            <img src={userData?.displayPicture} alt="profile" />
          </div>
        </div>
        <div className="mt-4 text-gray-600 space-y-4">
          <h3 className="font-medium">
            Name:{" "}
            <span className="text-gray-800 text-lg">{userData?.name}</span>
          </h3>
          <h3 className="font-medium">
            Email:{" "}
            <span className="text-gray-800 text-lg">{userData?.email}</span>
          </h3>
          <h3 className="font-medium">
            UserId:{" "}
            <span className="text-gray-800 text-lg">{userData?.uid}</span>
          </h3>
          <Link
            to="/dashboard/settings"
            className="w-full block bg-black text-white p-2 rounded hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 text-center"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="col-span-5 xl:col-span-2 px-4 pb-6 lg:px-12">
        <div className="border-b border-stroke py-4 px-7 ">
          <h3 className="font-medium">Change Password</h3>
        </div>
        <form
          onSubmit={handlePasswordChange}
          className="space-y-4 py-8 lg:py-20"
        >
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700">
              New Password
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
              Confirm New Password
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
            disabled={updating}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
          >
            {updating ? "Updating Password" : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
