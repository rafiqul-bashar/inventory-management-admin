import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      TOKEN: null,
      setToken: (token) => set({ TOKEN: token }),
      saveUserData: (user) => set({ userData: user }),
      logOutFromState: () => set({ user: null }),
    }),
    {
      name: "user-info",
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useAuthStore;
