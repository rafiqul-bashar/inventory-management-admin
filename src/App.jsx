import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import MainLayout from "./components/Common/MainLayout";
import LandingPage from "./pages/publicPages/LandingPage";
import PricingPage from "./pages/publicPages/PricingPage";
import AboutUsPage from "./pages/publicPages/AboutUsPage";
import FAQPage from "./pages/publicPages/FAQPage";
import LoginPage from "./pages/publicPages/LoginPage";
import RegisterPage from "./pages/publicPages/RegisterPage";
import NotFoundPage from "./pages/publicPages/NotFoundPage";
import PrivateRoute from "./routes/PrivateRoute";
import DashboardLayout from "./components/DashboardLayout";
import { DashboardHomePage } from "./pages/dashboardPages/DashboardHomePage";
import InventoryPage from "./pages/dashboardPages/InventoryPage";
import AddProductPage from "./pages/dashboardPages/AddProductPage";
import EditProductPage from "./pages/dashboardPages/EditProductPage";
import SettingsPage from "./pages/dashboardPages/SettingsPage";
import ProfilePage from "./pages/dashboardPages/ProfilePage";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <MainLayout />
          </PublicRoute>
        }
      >
        <Route
          index
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path="pricing"
          element={
            <PublicRoute>
              <PricingPage />
            </PublicRoute>
          }
        />
        <Route
          path="about-us"
          element={
            <PublicRoute>
              <AboutUsPage />
            </PublicRoute>
          }
        />
        <Route
          path="faq"
          element={
            <PublicRoute>
              <FAQPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Private Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardHomePage />} />
        <Route path="all-products" element={<InventoryPage />} />
        <Route path="add-products" element={<AddProductPage />} />
        <Route path="edit-product/:id" element={<EditProductPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
