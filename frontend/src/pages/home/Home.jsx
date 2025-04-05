import React, { useContext, useEffect } from "react";
import SideBar from "../../components/SideBar";
import MessageContainer from "../../components/MessageContainer";
import { AppContext } from "../../context/AppContext";

const Home = () => {
  const { setAuthUser, authUser, navigate } = useContext(AppContext);

  useEffect(() => {
    const user = localStorage.getItem("chat-user");
    setAuthUser(user);
  }, []);
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser]);

  return (
    <section className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </section>
  );
};

export default Home;
