import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* Placeholder route for login */}
        <Route
          path="/login"
          element={
            <div className="p-8">
              <h1 className="text-4xl font-bold text-center">Login Page</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
