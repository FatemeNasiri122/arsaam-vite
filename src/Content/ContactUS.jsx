import classes from "../styles/Content/ContactUS.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import status from "../styles/Content/Status.module.scss";
import Grid from "@mui/material/Grid";
import callUs from "/src/assets/img/icons/phone-call.svg"
import truck from "/src/assets/img/icons/truck-side.svg"
import undo from "/src/assets/img/icons/undo.svg"
import info from "/src/assets/img/icons/info.svg"
import interrogation from "/src/assets/img/icons/interrogation.svg"
import TextField from '@mui/material/TextField';
import React, {useContext, useState} from "react";
import LinkButton from "./button/LinkButton";
import FormContext from "../context/FormContext";
import SelectItems from "./select/SelectItems";
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

const descriptionStyle = {
    marginTop: '5px',
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: '0',
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: 'black',
            borderRadius: '0',

        }
    },
}

export default function  ContactUS  () {

    const outlinedInputStyles = useOutlinedInputStyles();

    const {handleChange , handleSubmit , handleClickshowCurrentPassword , handleClickShowNewPassword, handleClickShowConfirmPassword, handleMouseDownPassword,values, validFirstName , validLastName , validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validmessage, validAddress, validPostalCode, validcurrentPassword, validnewPassword, validconfirmnewPassword,} = useContext(FormContext);

    return (
        <>
            <div className={containerClass.container}>
                <div className={status.statusContainer}>
                    <p><span>Home / </span>CONTACT US</p>
                </div>
            </div>

            <div className={containerClass.widerContainer}>

                <h1>CONTACT US</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6} >
                        <div className={classes.callUsContainer}>
                            <div className={classes.content}>
                                <div className={classes.top}>
                                    <div className={classes.imgContainer}>
                                        <img src={callUs} alt=""/>
                                    </div>
                                    <strong>CALL US</strong>
                                </div>
                                <p className={classes.phoneNumber}>+41-23456789</p>
                                <p>Monday - Sunday 9 am - 8 pm</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.cartContainer}>
                                    <div className={classes.imgContainer}>
                                        <img src={truck} alt=""/>
                                    </div>
                                    <p>Follow your Order</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.cartContainer}>
                                    <div className={classes.imgContainer}>
                                        <img src={undo} alt=""/>
                                    </div>
                                    <p>Follow your Return</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.cartContainer}>
                                    <div className={classes.imgContainer}>
                                        <img src={info} alt=""/>
                                    </div>
                                    <p>Read Terms & Conditions</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.cartContainer}>
                                    <div className={classes.imgContainer}>
                                        <img src={interrogation} alt=""/>
                                    </div>
                                    <p>FAQ</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.writeUS}>
                        <h2>WRITE US</h2>
                        <p>Be the first to receive information about new arrivals, latest trends, events, brand news and more</p>
                    </div>
                </Grid>
                <form action="" className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="first-name" className={classes.inputLabel}>Name *</label>
                            <TextField
                                
                                id="first-name"
                                placeholder="Enter your name"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                fullWidth
                                error={validFirstName ? false: true}
                                classes={outlinedInputStyles}
                            />
                            <p className={classes.error}>{validFirstName ? '': 'please enter valid name'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="email" className={classes.inputLabel}>Email *</label>
                            <TextField
                                
                                id="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange('email')}
                                fullWidth
                                error={validEmail ? false: true}
                                classes={outlinedInputStyles}
                            />
                            <p className={classes.error}>{validEmail ? '': 'please enter valid email'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="confirm-email" className={classes.inputLabel}>Phone Number</label>
                            <TextField
                                
                                id="confirm-email"
                                placeholder="Enter your email"
                                value={values.phoneNumber}
                                onChange={handleChange('phoneNumber')}
                                fullWidth
                                error={validPhoneNumber ? false: true}
                                classes={outlinedInputStyles}
                            />
                            <p className={classes.error}>{validPhoneNumber ? '': 'please enter phone number'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="first-name" className={classes.inputLabel} style={{display: 'block',marginBottom: '5px'}}>Type of request *</label>
                            <SelectItems initialSelect='Select type of request' label='city'/>
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="description">Message</label>
                            <TextField
                                sx={descriptionStyle}
                                id="description"
                                placeholder='Write here your message'
                                multiline
                                rows={3}
                                value={values.message}
                                onChange={handleChange('description')}
                                error={validmessage ? false: true}
                                fullWidth
                            />
                            <p className={classes.error}>{validmessage ? '': 'please write message'}</p>
                        </Grid>

                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                recaptcha
                            </div>
                            <LinkButton isOnClicked={true}  width='176px' height='40px' color='#fff' background='#000' linkText="SAVE DATA" marginTop='0'/>
                        </Grid>

                    </Grid>
                </form>

            </div>
        </>
    );
};
