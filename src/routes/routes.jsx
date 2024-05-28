import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import LoginPage from "src/pages/publicPages/LoginPage";
import RegisterPage from "src/pages/publicPages/RegisterPage";
import LandingPage from "src/pages/publicPages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "src/components/DashboardLayout";
import { DashboardHomePage } from "src/pages/dashboardPages/DashboardHomePage";
import InventoryPage from "src/pages/dashboardPages/InventoryPage";
import AddProductPage from "src/pages/dashboardPages/AddProductPage";
import EditProductPage from "src/pages/dashboardPages/EditProductPage";
import SettingsPage from "src/pages/dashboardPages/SettingsPage";
import NotFoundPage from "src/pages/publicPages/NotFoundPage";
import PricingPage from "src/pages/publicPages/PricingPage";
import ContactPage from "src/pages/publicPages/ContactPage";
import MainLayout from "src/components/Common/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <MainLayout />
      </PublicRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: (
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        ),
      },
      {
        path: "/pricing",
        element: (
          <PublicRoute>
            <PricingPage />
          </PublicRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PublicRoute>
            <ContactPage />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
      {
        path: "all-products",
        element: <InventoryPage />,
      },
      {
        path: "add-products",
        element: <AddProductPage />,
      },
      {
        path: "edit-product/:id",
        element: <EditProductPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
