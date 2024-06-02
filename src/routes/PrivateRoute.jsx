import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "src/components/Common/LoadingSpinner";
import { auth } from "src/firebase/firebase.config";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
