import classes from "../styles/Content/FavoriteProduct.module.scss";
import Grid from "@mui/material/Grid";
import React, {useState} from "react";
import TshirtsData from '../data/Tshirt.json'
import FavoriteItem from "./FavoriteItem";
import {AnimatePresence, motion} from "framer-motion";

export default function  FavoriteProduct  ({isMobileActive}) {

    return (
        <Grid item xs={12} md={8} display={isMobileActive && {xs: 'none',md: 'block'}}paddingLeft={{md: '20px'}} marginTop={'18px'}>
            <AnimatePresence>

                <motion.div initial={{y: -100 }}
                            animate={{ y: 1 }}
                            exit={{  opacity: 0 }} >
                    <div className={classes.container}>
                        <h2>FAVORITE PRODUCTS</h2>
                        <FavoriteItem data={TshirtsData[4]}/>
                        <FavoriteItem data={TshirtsData[4]}/>
                        <FavoriteItem data={TshirtsData[4]}/>
                        <FavoriteItem data={TshirtsData[4]}/>
                    </div>
                </motion.div>
            </AnimatePresence>

        </Grid>

    );
};
