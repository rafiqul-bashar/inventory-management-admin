import useAuthStore from "../store/authStore";

const BACKEND_URL = import.meta.env.VITE_SERVER_LINK;

const fetchProducts = async () => {
  const response = await fetch(`${BACKEND_URL}/api/products`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Products. Status: ${response.status}`);
  }
  return await response.json();
};

const fetchSingleProduct = async (id) => {
  const response = await fetch(`${BACKEND_URL}/api/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Products. Status: ${response.status}`);
  }
  return await response.json();
};

const addProduct = async (product) => {
  const response = await fetch(`${BACKEND_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAuthStore.getState().TOKEN}`,
    },
    body: JSON.stringify(product),
  });
  return response.json();
};
const updateProduct = async (product) => {
  const response = await fetch(`${BACKEND_URL}/api/products/${product._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAuthStore.getState().TOKEN}`,
    },
    body: JSON.stringify(product),
  });
  return response.json();
};
const deleteProduct = async (id) => {
  const response = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAuthStore.getState().TOKEN}`,
    },
  });
  return response.json();
};

export {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  fetchSingleProduct,
};
