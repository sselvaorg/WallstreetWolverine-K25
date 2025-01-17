import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/instructions" element={<Home />} />
        <Route path="/rules" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </Router>
  );
}
