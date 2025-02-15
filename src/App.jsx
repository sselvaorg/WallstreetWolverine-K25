import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingScreen from "./components/Loader/LoadingScreen";
import Loader from "./components/Loader/Loader";

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

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/stock/:id" element={<StockPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
