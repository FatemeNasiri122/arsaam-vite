import classes from "../styles/Content/AccountDetails.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import Grid from "@mui/material/Grid";
import AccountTitles from "./AccountTitles";
import { makeStyles } from "@material-ui/core/styles";
import React, {useState} from "react";
import TshirtsData from "../data/Tshirt.json";
import Tshirt from "./Tshirt";
import AccountDetailsForm from "./AccountDetailsForm";


export default function  AccountDetails  () {

    return (
        <div className={containerClass.container}>
            <div className={classes.statusContainer}>
            <p><span>Home / </span>MY ACCOUNT</p>
            </div>
            <h1>MY ACCOUNT</h1>
            <Grid container>
                <Grid item xs={3} display={{xs: 'none', md: 'block'}}>
                    <AccountTitles/>
                </Grid>
                    <AccountDetailsForm />
                <Grid item  xs={12} sx={{marginTop: '50px'}}>
                    <div className={classes.related}>
                        <h2>SUGGESTED PRODUCTS</h2>
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
    );
};
