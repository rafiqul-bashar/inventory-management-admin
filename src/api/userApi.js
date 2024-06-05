import useAuthStore from "src/store/authStore";

const BACKEND_URL = import.meta.env.VITE_SERVER_LINK;

const loginUserFromDB = async (credentials) => {
  const response = await fetch(`${BACKEND_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};
const updateUser = async (data) => {
  const response = await fetch(`${BACKEND_URL}/api/user/${data.email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAuthStore.getState().TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
const registerUserToDB = async (credentials) => {
  const response = await fetch(`${BACKEND_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};
export { loginUserFromDB, registerUserToDB, updateUser };
