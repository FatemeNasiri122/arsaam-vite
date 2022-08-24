import classes from "../styles/Content/TopCart.module.scss";
import shoppingCart from "/src/assets/img/icons/shopping-bag.svg"
import Grid from "@mui/material/Grid";
import React from "react";

export default function  TopCart  ({isFirstActive , isSecondActive , isThirdActive}) {
    return (
        <>

            <h1>cart</h1>
            <Grid container sx={{justifyContent: 'center'}}>
                <Grid item xs={12}>
                    <div className={classes.rentalContainer}>
                        <ul className={classes.rentalManagerProgressBarContainer}>
                            <li className={isFirstActive && classes.active}>
                                <div className={classes.line}></div>
                                <div className={classes.circle}>
                                    <img src={shoppingCart} alt=""/>
                                    <p>SHOPPING CART</p>
                                </div>
                            </li>
                            <li className={isSecondActive && classes.active}>
                                <div className={classes.line}></div>
                                <div className={classes.circle}>
                                    <svg style={{fill: !isSecondActive && "#BFBFBF"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>

                                    <p>ACCOUNT</p>
                                </div>
                            </li>
                            <li className={isThirdActive && classes.active}>
                                <div className={classes.line}></div>
                                <div className={classes.circle}>
                                    <svg style={{fill: !isThirdActive && "#BFBFBF"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="5.5" cy="15.5" r="1.5"/><path d="M19,3H5A5.006,5.006,0,0,0,0,8v8a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,5H19a3,3,0,0,1,3,3H2A3,3,0,0,1,5,5ZM19,19H5a3,3,0,0,1-3-3V10H22v6A3,3,0,0,1,19,19Z"/></svg>
                                    <p>CHECKOUT</p>
                                </div>
                                <div className={classes.line}></div>
                            </li>

                        </ul>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};