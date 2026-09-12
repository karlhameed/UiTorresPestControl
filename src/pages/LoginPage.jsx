// Sign-in route. The form itself is components/auth/Login.

import { Navigate, useLocation } from "react-router-dom";
import Login from "../components/auth/Login";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const location = useLocation();

  // Already signed in? Go where they were headed, or the dashboard.
  if (isAuthenticated) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return (
    <div
      className="login-page"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(29, 7, 7, 0.52), rgba(29, 7, 7, 0.32)), url('/ImageLoginBackground.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="login-form-panel">
        <Login onLogin={login} />
      </main>
    </div>
  );
}

export default LoginPage;
