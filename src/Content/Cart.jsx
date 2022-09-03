import classes from "../styles/Content/Cart.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import status from "../styles/Content/Status.module.scss";
import Grid from "@mui/material/Grid";
import TshirtsData from '../data/Tshirt.json'
import ShoppingCart from "./ShoppingCart"
import Tshirt from "./Tshirt";
import TopCart from "./TopCart";
import React from "react";
import LinkButton from "./button/LinkButton";

export default function  Cart  () {
    return (
        <>
            <div className={containerClass.container}>
                <div className={status.statusContainer}>
                    <p><span>Home / </span>Cart</p>
                </div>
                </div>

                <div className={containerClass.registerContainer}>
                    <TopCart isFirstActive={true} isSecondActive={false} isThirdActive={false}/>
                </div>

                <div className={containerClass.container}>
                    <Grid container marginTop={2}>
                        <Grid item xs={12} lg={9} md={8} >

                            <Grid container sx={{display: 'flex', borderTop: '1px solid #BFBFBF', borderBottom: '1px solid #D9D9D9', padding:'21px 0px',}}>
                                <ShoppingCart data={TshirtsData[4]} />
                            </Grid>
                            <Grid container sx={{display: 'flex', borderBottom: '1px solid #D9D9D9', padding:'21px 0px',}}>
                                <ShoppingCart data={TshirtsData[4]} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={3} md={4} paddingX={1}>
                            <div className={classes.summaryContainer}>
                                <h4>ORDER SUMMARY</h4>
                                <p>TOTAL AMOUNT <span>{TshirtsData[4].price}</span></p>
                                <p>Discount<span>{TshirtsData[4].discount}</span></p>
                                <p>SHIPPING<span>-</span></p>
                                <p className={classes.order}><strong>ORDER TOTAL</strong><strong>€ 2.000,00</strong></p>
                                <LinkButton width='100%' height='40px' color='#fff' background='#000' linkText="CONTINUE" marginTop='30px' marginButtom="30px"/>
                            </div>
                        </Grid>
                        <Grid item  xs={12} marginTop='20px'>
                            <div className={classes.related}>
                                <h2>SUGGESTED PRODUCTS</h2>
                            </div>
                        </Grid>
                        <Grid container spacing={2} marginBottom='50px'>
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
