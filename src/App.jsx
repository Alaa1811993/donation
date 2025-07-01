import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleSwitch = () => setIsLogin((prev) => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <SignIn onSwitch={handleSwitch} />
              ) : (
                <SignUp onSwitch={handleSwitch} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
