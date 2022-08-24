import SigninOrContainer from "./SignInContainer";
import TopCart from "./TopCart";
import Container from "@mui/material/Container";
import React from "react";
import classes from "../styles/Content/Register.module.scss";
import containerClass from "../styles/Content/Container.module.scss";

export default function Cart2(){
    return <>
        <div className={containerClass.container}>
            <div className={classes.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
        </div>
        <div className={containerClass.registerContainer}>
            <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={false}/>
        </div>
        <div className={containerClass.widerContainer}>
            <div style={{marginTop: '40px'}}></div>
            <SigninOrContainer />
        </div>
    </>
}