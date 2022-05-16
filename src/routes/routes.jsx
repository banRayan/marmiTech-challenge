import React from 'react';
import { Route, Routes } from "react-router-dom";

import Features from '../screens/Features';
import Contact from '../screens/Contact';
import Custom from '../screens/Custom';
import Home from '../screens/Home';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/custom" element={<Custom />} />
        </Routes>
    )
}

export default MainRoutes;