import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../pages/Loading";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Header></Header>
      {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomeLayout;
