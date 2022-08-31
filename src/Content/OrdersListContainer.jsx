import classes from "../styles/Content/OrdersListContainer.module.scss";
import Grid from "@mui/material/Grid";
import React, {useState} from "react";
import OrdersLists from "/src/data/OrdersLists.json"
import Order from "./Order";
import {AnimatePresence, motion} from "framer-motion";


export default function  OrdersListContainer  ({isMobileActive}) {

    return (
        <Grid item xs={12} md={8} display={isMobileActive && {xs: 'none',md: 'block'}} paddingLeft={{md: '20px'}} marginTop={'18px'}>
            <AnimatePresence>

                <motion.div initial={{y: -100 }}
                            animate={{ y: 1 }}
                            exit={{  opacity: 0 }} >
                    <div className={classes.container}>
                        <h2>ORDERS LIST</h2>
                        {OrdersLists.map((orderItem) =>{
                            return <Order data={orderItem} key={orderItem.id} />
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>

        </Grid>

    );
};
