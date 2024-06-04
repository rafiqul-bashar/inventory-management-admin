import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProductStore = create(
  persist(
    (set) => ({
      products: [],
      updateProduct: (user) => set({ userData: user }),
      createProduct: () => set({ user: null }),
    }),
    {
      name: "products",
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useProductStore;
