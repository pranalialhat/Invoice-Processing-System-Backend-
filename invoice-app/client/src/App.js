import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
   const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedInUser") !== null);

  const handleLogin = (email) => {
    localStorage.setItem("loggedInUser", email);
    setLoggedIn(true);
  };

   const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedIn(false);
  };



  return (

<Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={() => window.location.href = "/login"} />} />
      </Routes>
    </Router>

  );
}

export default App;
