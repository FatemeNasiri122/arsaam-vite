import SigninOrContainer from "./SignInContainer";
import TopCart from "./TopCart";
import Container from "@mui/material/Container";
import React from "react";

export default function Cart2(){
    return <Container>

        <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={false}/>
        <div style={{marginTop: '40px'}}></div>
        <SigninOrContainer />
    </Container>

}