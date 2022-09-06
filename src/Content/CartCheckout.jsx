import containerClass from "../styles/Content/Container.module.scss";
import status from "../styles/Content/Status.module.scss";
import TopCart from "./TopCart";
import React, {useContext, useState} from "react";
import classes from "../styles/Content/CartCheckout.module.scss";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LinkButton from "./button/LinkButton";
import FormContext from "../context/FormContext";
import {makeStyles} from "@material-ui/core/styles";

const useOutlinedInputStyles = makeStyles({
    root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            height: '45px',
            borderRadius: "0",
        },
        "& .MuiInputBase-input": {
            padding: '10px',
            fontSize: '12px',

        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: 'black',
                borderRadius: '0',

            }
        },
    }
});

export default function CartCheckout(){

    const outlinedInputStyles = useOutlinedInputStyles();

    const {handleChange , handleSubmit , handleClickshowCurrentPassword , handleClickShowNewPassword, handleClickShowConfirmPassword, handleMouseDownPassword,values, validFirstName , validLastName , validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validAddress, validPostalCode, validcurrentPassword, validnewPassword, validconfirmnewPassword,} = useContext(FormContext);

    return <>
        <div className={containerClass.container}>
            <div className={status.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
        </div>
        <div className={containerClass.checkoutContainer}>
            <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={true}/>
            <Grid container marginBottom='50px'>
                <Grid item xs={10}>
                    <label htmlFor="code" className={classes.inputLabel}>Use Coupon Code</label>
                    <TextField
                        classes={outlinedInputStyles}
                        id="code"
                        placeholder="Enter coupon code"
                        value={values.email}
                        onChange={handleChange('email')}
                        fullWidth
                        error={validEmail ? false: true}
                    />
                </Grid>
                <Grid item xs={2}>
                    <LinkButton width='100%' height='40px' color='#fff' background='#000' linkText="APPLY" marginTop='22px' marginButtom='10px' />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.finalContainer}>
                        <p className={classes.title}>FINAL INVOICE</p>
                        <p><span>TOTAL PURCHASE</span><span>€ 2.400,00</span></p>
                        <p><span>TOTAL NUMBER OF ORDERS</span><span>2</span></p>
                        <p><span>TOTAL DISCOUNT</span><span>€ 400,00</span></p>
                        <p><span>INSURANCE AND TOLLS</span><span>€ 5,00</span></p>
                        <p><span>TAXATION</span><span>€ 5,00</span></p>
                        <p><span>SHIPPING</span><span>€ 15,00</span></p>
                        <p><strong>ORDER TOTAL</strong><strong>€ 2.025,00</strong></p>
                    </div>
                </Grid>
                <Grid item xs={12} sx={{marginTop: '21px'}}>
                    <label htmlFor="description" className={classes.inputLabel}>Description</label>
                    <TextField
                        classes={outlinedInputStyles}
                        id="description"
                        placeholder='you can give your own description write in this section'
                        multiline
                        rows={3}
                        value={values.description}
                        onChange={handleChange('description')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{marginTop: '21px',display: 'flex',justifyContent: 'center'}}>
                    <LinkButton width='215px' height='55px' color='#fff' background='#000' linkText="BILL PAYMENT" marginTop='0' marginButtom='0'/>
                </Grid>
            </Grid>
        </div>
    </>
}