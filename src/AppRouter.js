// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductPage from './Component/ProductPage';
import Section from './Component/Section';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Section />} />
                <Route path="/product-page" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
