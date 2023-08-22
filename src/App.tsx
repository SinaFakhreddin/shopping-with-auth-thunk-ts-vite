import "./index.css"
import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import PageNotFound from "./components/notFound";
import HomeComponent from "./components/home";
import ProductList from "./components/productList";
import Register from "./components/register";
import LoginUser from "./components/LoginUser";
import VerifyPhone from "./components/verifyPhone";
import Dashboard from "./components/dashboard";
import CurrentProduct from "./components/product";
import CategoryPage from "./components/categoryPage";




function App() {


  return (
    <Routes>
        <Route path={'/'} element={<HomeComponent/>}/>
        <Route path={'products'} element={<ProductList/>}/>
        <Route path={'products/:id'} element={<CurrentProduct/>}/>
        <Route path={'categories/:id'} element={<CategoryPage/>}/>
        <Route path={'register'} element={<Register/>}/>
        <Route path={'login'} element={<LoginUser/>}/>
        <Route path={'login/verify-phone'} element={<VerifyPhone/>}/>
        <Route path={'dashboard'} element={<Dashboard/>}/>
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
