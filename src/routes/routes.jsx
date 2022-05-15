import React from 'react';
import { Route, Routes } from "react-router-dom";

import Contact from '../screens/Contact';
import Home from '../screens/Home';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default MainRoutes;