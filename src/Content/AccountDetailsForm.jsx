import classes from "../styles/Content/AccountDetailsForm.module.scss";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, {useContext, useState} from "react";
import TextField from '@mui/material/TextField';
import TshirtsData from "../data/Tshirt.json";
import Tshirt from "./Tshirt";
import {AnimatePresence, motion} from "framer-motion";
import FormContext from "../context/FormContext";
import SelectItems from "./select/SelectItems";
import LinkButton from "./button/LinkButton";

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

export default function  AccountDetails  ({isMobileActive}) {

    const outlinedInputStyles = useOutlinedInputStyles();

    const {handleChange , handleSubmit , handleClickshowCurrentPassword , handleClickShowNewPassword, handleClickShowConfirmPassword, handleMouseDownPassword,values, validFirstName , validLastName , validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validAddress, validPostalCode, validcurrentPassword, validnewPassword, validconfirmnewPassword,validConfirmEmail} = useContext(FormContext);


    return (
        <>
                <Grid item xs={12} md={8} display={isMobileActive && {xs: 'none',md: 'block'}} paddingLeft={{md: '20px'}} marginTop={'18px'}>
                    <AnimatePresence>
                        <motion.div initial={{y: -100 }}
                                    animate={{ y: 1 }}
                                    exit={{  opacity: 0 }} >
                            <form action="" className={classes.form} onSubmit={handleSubmit}>
                                <h2>ACCOUNT DETAILS</h2>
                                <Grid container columnSpacing={2} rowSpacing={0.7}>
                                    <Grid item xs={12} sm={6} marginTop={'8px'}>
                                        <label htmlFor="first-name" className={classes.inputLabel}>First Name *</label>
                                        <TextField
                                            classes={outlinedInputStyles}
                                            id="first-name"
                                            placeholder="Enter your first name"
                                            value={values.firstName}
                                            onChange={handleChange('firstName')}
                                            fullWidth
                                            error={validFirstName ? false: true}
                                        />
                                        <p className={classes.error}>{validFirstName ? '': 'please enter valid first name'}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6} marginTop={'8px'}>
                                        <label htmlFor="last-name" className={classes.inputLabel}>Last Name *</label>
                                        <TextField
                                            classes={outlinedInputStyles}
                                            id="last-name"
                                            placeholder="Enter your last name"
                                            value={values.lastName}
                                            onChange={handleChange('lastName')}
                                            fullWidth
                                            error={validLastName ? false: true}
                                        />
                                        <p className={classes.error}>{validLastName ? '': 'please enter valid last name'}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="email" className={classes.inputLabel}>Email *</label>
                                        <TextField
                                            classes={outlinedInputStyles}
                                            id="email"
                                            placeholder="Enter your email"
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            fullWidth
                                            error={validEmail ? false: true}
                                        />
                                        <p className={classes.error}>{validEmail ? '': 'please enter valid email'}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="phone-number" className={classes.inputLabel}>Phone Number *</label>
                                        <TextField
                                            classes={outlinedInputStyles}
                                            id="phone-number"
                                            placeholder="Enter your phone number"
                                            value={values.phoneNumber}
                                            onChange={handleChange('phoneNumber')}
                                            fullWidth
                                            error={validPhoneNumber ? false: true}
                                        />
                                        <p className={classes.error}>{validPhoneNumber ? '': 'please enter valid phone number'}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="country" className={classes.selectLabel}>Country *</label>
                                        <SelectItems initialSelect='Enter your Country' label='country'/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="city" className={classes.selectLabel}>City *</label>
                                        <SelectItems initialSelect='Enter your City' label='city'/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input type="checkbox" name="check-box" value="check-box" id="check-box"/>
                                        <label className={classes.newsLetterText} htmlFor="check-box">I would like to receive a newsletter</label>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <LinkButton isOnClicked={true} width='100%' height='40px' color='#fff' background='#000' linkText="SAVE DATA" marginTop='40px' marginButtom='10px'/>
                                    </Grid>
                                </Grid>
                            </form>

                        </motion.div>
                    </AnimatePresence>
                    </Grid>
                        <div className={classes.suggestedContainer}>
                            <div className={classes.related}>
                                <h2>SUGGESTED PRODUCTS</h2>
                            </div>
                            <Grid container spacing={2}>
                                {
                                    TshirtsData.map((tshirt ,i)=>{
                                        if (i < 4){
                                            return <Tshirt data={tshirt} key={tshirt.id}/>
                                        }
                                    })
                                }
                            </Grid>
                        </div>
        </>

    );
};
