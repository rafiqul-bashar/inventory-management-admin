import axios from "axios";
import useAuthStore from "src/store/authStore";

const BACKEND_URL = import.meta.env.VITE_SERVER_LINK;

export default axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${useAuthStore.getState().TOKEN}`,
  },
});
