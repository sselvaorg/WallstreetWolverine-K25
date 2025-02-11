import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";
import Profile from "./pages/Profile/Profile";
import Instructions from "./pages/Instructions/Instructions";
import History from "./pages/History/History";
import Rules from "./pages/Rules/Rules";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import StockPage from "./pages/Market/components/StockPage";
import Register from "./pages/Login/Register";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stock/:id" element={<StockPage />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}
