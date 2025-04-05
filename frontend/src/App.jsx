import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { authUser } = useContext(AppContext);
  return (
    <main className="p-4 h-screen flex items-center justify-center">
      <ToastContainer />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/login" element={authUser ? <Home /> : <Login />} />
        <Route path="/sign-up" element={authUser ? <Home /> : <SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
