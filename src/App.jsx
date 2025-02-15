import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loader from "./components/Loader/Loader";
import PropTypes from "prop-types";

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

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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

          {
            <Route
              path="/login"
              element={!isAuthenticated() ? <Login /> : <Home />}
            />
          }
          <Route
            path="/register"
            element={!isAuthenticated() ? <Register /> : <Home />}
          />

          <Route
            path="*"
            element={
              isAuthenticated() ? <Navigate to="/" /> : <Navigate to="/login" />
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
