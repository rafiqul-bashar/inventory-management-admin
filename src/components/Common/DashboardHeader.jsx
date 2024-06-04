import useAuthStore from "src/store/authStore";
import { AVATAR_PIC } from "src/utils/constants";

export const DashboardHeader = () => {
  const { userData } = useAuthStore((state) => state);
  return (
    <header className="flex items-center h-20 px-6 sm:px-24 bg-gray-50">
      <div className="flex flex-shrink-0 items-center ml-auto">
        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
          <span className="font-semibold">{userData?.name}</span>
          <span className="text-sm text-gray-600">Admin</span>
        </div>
        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
          <img
            src={userData?.displayPicture || AVATAR_PIC}
            alt="user profile photo"
            className="h-full w-full object-cover"
          />
        </span>
      </div>
    </header>
  );
};
