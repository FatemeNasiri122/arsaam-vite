import React from "react";
import {Route, Routes as RRDRoutes} from "react-router-dom";

const Layout = React.lazy(() => import("./Layout/index.jsx"))
const Home = React.lazy(() => import("./Content/Home.jsx"))
const SigninOrRegister = React.lazy(() => import("./Content/SigninOrRegister.jsx"))
const Register = React.lazy(() => import("./Content/Register.jsx"))
const CartRegister = React.lazy(() => import("./Content/CartRegister.jsx"))
const Men = React.lazy(() => import("./Content/Men.jsx"))
const Tshirts = React.lazy(() => import("./Content/Tshirts.jsx"))
const Buy = React.lazy(() => import("./Content/Buy.jsx"))
const Cart = React.lazy(() => import("./Content/Cart.jsx"))
const Cart2 = React.lazy(() => import("./Content/Cart2.jsx"))
const CartCheckout = React.lazy(() => import("./Content/CartCheckout.jsx"))
const ContactUS = React.lazy(() => import("./Content/ContactUS.jsx"))
const AboutUS = React.lazy(() => import("./Content/AboutUS.jsx"))
const News = React.lazy(() => import("./Content/News.jsx"))
const NewsViewMore = React.lazy(() => import("./Content/NewsViewMore.jsx"))
const AccountDetails = React.lazy(() => import("./Content/AccountDetails.jsx"))

const Routes = () => {
    return (
        <RRDRoutes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='SigninOrRegister' element={<SigninOrRegister/>}/>
                <Route path='Register' element={<Register/>}/>
                <Route path='Men' element={<Men/>}/>
                <Route path='Tshirts' element={<Tshirts/>}/>
                <Route path='Buy' element={<Buy/>}/>
                <Route path='Cart' element={<Cart/>}/>
                <Route path='Cart2' element={<Cart2/>}/>
                <Route path='CartRegister' element={<CartRegister/>}/>
                <Route path='CartCheckout' element={<CartCheckout/>}/>
                <Route path='ContactUS' element={<ContactUS/>}/>
                <Route path='AboutUS' element={<AboutUS/>}/>
                <Route path='News' element={<News/>}/>
                <Route path='NewsViewMore' element={<NewsViewMore/>}/>
                <Route path='AccountDetails' element={<AccountDetails/>}/>
            </Route>
            {/*<Route path="*" element={<NotFound />} />*/}
            {/*<Route path='signup' element={ isLoggedIn ? <Navigate to='/' /> : <Signup />} />*/}
        </RRDRoutes>
    )
}
export default Routes

