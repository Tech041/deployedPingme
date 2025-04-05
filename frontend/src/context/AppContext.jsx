import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user"))
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Logging out function

  const logout = async () => {
    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post("/api/auth/logout");
      data.success && setAuthUser("");
      localStorage.removeItem("chat-user");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    navigate,
    logout,
    loading,
    setLoading,
    authUser,
    setAuthUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
