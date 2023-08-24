import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from "./ui/component/ProductingPage";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ProductListing from './ui/page/ProductListing';
import ProductDetail from "./ui/page/ProductDetail";
import ShoppingCart from "./ui/page/ShoppingCartPage";
import LoginPage from './ui/page/LoginPage';
import Checkout from "./ui/page/Checkout";
import ThankYou from "./ui/page/ThankYou";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import TopNavBar from "./ui/component/TopNavbar";
import ProductListingPage from "./ui/page/ProductListingPage";
import ErrorPage from "./ui/page/ErrorPage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<ProductListingPage/>}/>
                    <Route path="/product/:productId/" element={<ProductDetailPage/>}/>
                    <Route path="/shoppingcart/" element={<ShoppingCart/>}/>
                    <Route path="/error" element={<ErrorPage/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
