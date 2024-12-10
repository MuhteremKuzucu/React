import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/details/Details";
import Home from "./../pages/home/Home";
import NotFound from "./../pages/errorPage/NotFound";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        /* -------------- şifre kontrolü için private routerı gönderme
        -------------- */
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        /*
        --------------------------------------------------------------------------
        */
        <Route path="/details" element={<Details />} />
        <Route path="*" element={ <NotFound/> } />
        <Route  path="/about" element={ <About/> }  />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
