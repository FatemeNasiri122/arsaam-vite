import classes from "../styles/Content/Order.module.scss";
import Grid from "@mui/material/Grid";
import React, {useState} from "react";

export default function  Order  ({data}) {

    return (
            <Grid item xs={12}>
                <div className={classes.order}>
                    <div className={classes.top}><strong className={classes.orderCode}>ORDER CODE: {data.orderCode}</strong>
                        <a href="">VIEW DETAILS<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/></svg></a>
                    </div>
                    <p><span className={classes.orderContent}>ORDER DATE: {data.orderDate}</span><span className={classes.orderContent}>TOTAL PRICE: {data.totalPrice}</span><span className={classes.orderContent}>DISCOUNT: {data.discount}</span></p>
                    <div className={classes.grayLine}></div>
                    <div className={classes.imgsContainer}>
                        {data.imgs.map((img) =>{
                            return <div className={classes.imgContainer} ><img src={img} alt=""/></div>
                        })}
                    </div>
                </div>
            </Grid>
    );
};