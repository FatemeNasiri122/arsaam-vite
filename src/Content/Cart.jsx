import classes from "../styles/Content/Cart.module.scss";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TshirtsData from '../data/Tshirt.json'
import shoppingCart from "/src/assets/img/icons/shopping-bag.svg"
import account from "/src/assets/img/icons/user.svg"
import checkOut from "/src/assets/img/icons/credit-card.svg"
import ShoppingCart from "./ShoppingCart"
import React from "react";
import Tshirt from "./Tshirt";

export default function  Cart  () {

    return (
        <Container>
            <div className={classes.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
                    <h1>cart</h1>
                <div className={classes.rentalContainer}>
                    <ul className={classes.rentalManagerProgressBarContainer}>
                        <li className={classes.active}>
                            <div className={classes.circle}>
                                <img src={shoppingCart} alt=""/>
                                <p>SHOPPING CART</p>
                                </div>
                        </li>
                        <li>
                            <div className={classes.circle}>
                                <img src={account} alt=""/>
                                <p>ACCOUNT</p>
                            </div>
                        </li>
                        <li>
                            <div className={classes.circle}>
                                <img src={checkOut} alt=""/>
                                <p>CHECKOUT</p>
                            </div>
                        </li>
                    </ul>
                </div>
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
                           <p className={classes.order}><strong>ORDER TOTAL</strong> <strong>€ 2.000,00</strong></p>
                           <a href="">CONTINUE</a>
                       </div>
                    </Grid>
                    <Grid item container xs={12} >
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
        </Container>
    );
};
