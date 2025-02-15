import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loader from "./components/Loader/Loader";
import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home/Home"));
const Market = lazy(() => import("./pages/Market/Market"));
const StockPage = lazy(() => import("./pages/Market/components/StockPage"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Instructions = lazy(() => import("./pages/Instructions/Instructions"));
const History = lazy(() => import("./pages/History/History"));
const Rules = lazy(() => import("./pages/Rules/Rules"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Login/Register"));

const getAuthStatus = () => !!localStorage.getItem("token");

const ProtectedRoute = ({ element }) => {
  return getAuthStatus() ? element : <Navigate to="/login" replace />;
};

export default function App() {
  const [, setForceRender] = useState(false);

  useEffect(() => {
    const handleAuthChange = () => setForceRender((prev) => !prev);

    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Toaster
          position="top-center"
          toastOptions={{
            className: "z-[99999] mt-5",
          }}
          reverseOrder={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/stock/:id" element={<StockPage />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/rules" element={<Rules />} />
          <Route
            path="/history"
            element={<ProtectedRoute element={<History />} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={!getAuthStatus() ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              getAuthStatus() ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
