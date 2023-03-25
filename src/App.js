import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './component/nav';
// import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth, useAuthUser } from 'react-auth-kit'
import { useDispatch } from 'react-redux';
import { userInit } from './Store/redux/slices/userSlice'
import Home from './views/home';
import Product from './views/product';
import Cart from './views/cart';
import PNF from './views/pageNotFound';
import Admin from './views/admin';
import Reg from './views/reg';
import Login from './views/login';
import './style/app.css'
function App() {
    const dispatch = useDispatch();
    const authData = useAuthUser()
    dispatch(userInit({ authData }))
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<RequireAuth loginPath='/login'><Cart /></RequireAuth>} />
                    <Route path='/product/:id' element={<Product />}></Route>
                    <Route path="/admin" element={<RequireAuth loginPath='/login'><Admin /></RequireAuth>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reg" element={<Reg />} />
                    <Route path="*" element={<PNF />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


