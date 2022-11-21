import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import HomePage from '../components/HomePage';

import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import LoginPage from '../components/LoginPage';
import FormsPage from '../components/FormsPage';





const AppRouter = () => (
  <BrowserRouter>
    <div>
      
      <Routes>
        {/* Replace Route with public and private  */}
        <Route path="/" element={<LandingPage/>} exact={true}/>
         <Route path="/home" element={<HomePage/>} />
       
        <Route path="/login" element={<LoginPage/>}  />
        <Route path="/forms" element={<FormsPage/>} />
        
      </Routes>
      
    </div>
  </BrowserRouter>
);

export default AppRouter;