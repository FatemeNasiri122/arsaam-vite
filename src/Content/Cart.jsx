import classes from "../styles/Content/Cart.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import Grid from "@mui/material/Grid";
import TshirtsData from '../data/Tshirt.json'
import ShoppingCart from "./ShoppingCart"
import Tshirt from "./Tshirt";
import TopCart from "./TopCart";
import React from "react";

export default function  Cart  () {
    return (
        <>
            <div className={containerClass.container}>
                <div className={classes.statusContainer}>
                    <p><span>Home / </span>Cart</p>
                </div>

                <div className={containerClass.registerContainer}>
                    <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={false}/>
                </div>
                </div>

                <div className={containerClass.container}>
                    <Grid container marginTop={2}>
                        <Grid item xs={12} lg={9} md={8} >
                            <ShoppingCart data={TshirtsData[4]} />
                            <ShoppingCart data={TshirtsData[4]} />
                        </Grid>
                        <Grid item xs={12} lg={3} md={4} paddingX={1}>
                            <div className={classes.summaryContainer}>
                                <h4>ORDER SUMMARY</h4>
                                <p>TOTAL AMOUNT <span>{TshirtsData[4].price}</span></p>
                                <p>Discount<span>{TshirtsData[4].discount}</span></p>
                                <p>SHIPPING<span>-</span></p>
                                <p className={classes.order}><strong>ORDER TOTAL</strong><strong>€ 2.000,00</strong></p>
                                <a className={classes.continue} href="">CONTINUE</a>
                            </div>
                        </Grid>
                        <Grid item  xs={12} >
                            <div className={classes.related}>
                                <h2>related products</h2>
                            </div>
                        </Grid>
                        <Grid container spacing={2}>
                            {
                                TshirtsData.map((tshirt ,i)=>{
                                    if (i < 4){
                                        return <Tshirt data={tshirt} key={tshirt.id}/>
                                    }
                                })
                            }
                        </Grid>
                    </Grid>
                </div>
        </>

    );
};
