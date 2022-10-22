import SigninOrContainer from "./SignInContainer";
import status from "../styles/Content/Status.module.scss";
import TopCart from "./TopCart";
import React from "react";
import containerClass from "../styles/Content/Container.module.scss";

export default function Cart2() {
    return <>
        <div className={containerClass.container}>
            <div className={status.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
        </div>
        <div className={containerClass.registerContainer}>
            <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={false}/>
        </div>
        <div className={containerClass.widerContainer}>
            <div style={{marginTop: '40px'}}></div>
            <SigninOrContainer/>
        </div>
    </>
}