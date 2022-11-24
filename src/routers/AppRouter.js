import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";

import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";
import LoginPage from "../components/LoginPage";
import FormsPage from "../components/FormsPage";
import CodeGeneratorPage from "../components/CodeGeneratorPage";

import Footer from "../components/Footer";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        {/* Replace Route with public and private  */}
        <Route path="/" element={<LandingPage />} exact={true} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/forms" element={<FormsPage />} />

        <Route path="/code-generator" element={<CodeGeneratorPage />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
