import React from "react";
import { Routes, Route } from "react-router-dom";
import WaitlistPage from "@/components/pages/WaitlistPage";

function App() {
  return (
    <div className="min-h-screen bg-warm-beige relative">
      <Routes>
        <Route path="/" element={<WaitlistPage />} />
      </Routes>
    </div>
  );
}

export default App;