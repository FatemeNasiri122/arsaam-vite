import classes from '../styles/Content/CartRegister.module.scss';
import containerClass from '../styles/Content/Container.module.scss';
import status from "../styles/Content/Status.module.scss";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, {useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopCart from "./TopCart";
import LinkButton from "./button/LinkButton";
import FormContext from "../context/FormContext";
import SelectItems from "./select/SelectItems";

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

    }
});

const textFieldStyles = {
    root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            height: '45px',
            borderRadius: '0',
        },
        "& .MuiInputBase-input": {
            padding: '10px',
            fontSize: '12px',
        },

    },
    '& label': {
        color: '#808080',
        fontSize: '12px',

    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: 'black',
            borderRadius: '0',

        }
    },
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {
            borderRadius: '0',
            height: '45px',
            position: 'absolute',
            top: '0'
        }
    },
    "& .MuiInputBase-root": {
        fontFamily: 'normal normal normal 12px/15px Century Gothic',
        fontSize: '12px !important',

    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
        fontFamily: 'normal normal normal 12px/15px Century Gothic',
        fontSize: '12px !important',
        padding: '10px',

    },
    "& .css-1te9c4s-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
        borderRadius: '0px !important'
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        borderRadius: '0px !important'
    },
}

export default function  Register  () {

    const outlinedInputStyles = useOutlinedInputStyles();

    const {handleChange , handleSubmit , handleClickshowCurrentPassword , handleClickShowNewPassword, handleClickShowConfirmPassword, handleMouseDownPassword,values, validFirstName , validLastName , validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validAddress, validPostalCode, validcurrentPassword, validnewPassword, validconfirmnewPassword,} = useContext(FormContext);

    return (
            <>
                <div className={containerClass.container}>
                    <div className={status.statusContainer}>
                        <p><span>Home / </span>Cart</p>
                    </div>
                </div>
                <div className={containerClass.registerContainer}>
                    <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={false}/>
                </div>
                <div className={containerClass.widerContainer}>
                    <form action="" className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={0.8} columnSpacing={2.2}>
                            <Grid item xs={12}>
                                <label className={classes.inputLabel} htmlFor="savedAddress-select" className={classes.inputLabel}>Select Saved saved Address *</label>
                                <SelectItems initialSelect='Select saved saved Address' label='address'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.inputLabel} htmlFor="first-name" className={classes.inputLabel}>First Name *</label>
                                <TextField
                                    sx={textFieldStyles}
                                    id="first-name"
                                    placeholder="Enter your first name"
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                    fullWidth
                                    error={validFirstName ? false: true}
                                />
                                <p className={classes.error}>{validFirstName ? '': 'please enter valid first name'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.inputLabel} htmlFor="last-name" className={classes.inputLabel}>Last Name *</label>
                                <TextField
                                    sx={textFieldStyles}
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
                                <label className={classes.inputLabel} htmlFor="country" className={classes.inputLabel}>Country *</label>
                                <TextField
                                    sx={textFieldStyles}
                                    id="country"
                                    placeholder="Enter your country"
                                    value={values.country}
                                    onChange={handleChange('country')}
                                    fullWidth
                                    error={validCountry ? false: true}
                                />
                                <p className={classes.error}>{validCountry ? '': 'please enter country'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/*select!*/}
                                <label className={classes.inputLabel} htmlFor="city" className={classes.inputLabel}>City *</label>
                                <SelectItems initialSelect='Enter your City' label='city'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.inputLabel} htmlFor="email" className={classes.inputLabel}>Email *</label>
                                <TextField
                                    sx={textFieldStyles}
                                    id="email"
                                    placeholder="Enter your address"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    fullWidth
                                    error={validEmail ? false: true}
                                />
                                <p className={classes.error}>{validEmail ? '': 'please enter valid email'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.inputLabel} htmlFor="phone-number" className={classes.inputLabel}>Phone Number *</label>
                                <TextField
                                    sx={textFieldStyles}
                                    id="phone-number"
                                    placeholder="Enter your phone number"
                                    value={values.phoneNumber}
                                    onChange={handleChange('phoneNumber')}
                                    fullWidth
                                    error={validPhoneNumber ? false: true}
                                />
                                <p className={classes.error}>{validPhoneNumber ? '': 'please enter phone number'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.inputLabel} htmlFor="address" className={classes.inputLabel}>Address *</label>
                                <TextField
                                    sx={textFieldStyles}
                                    id="address"
                                    placeholder="Enter your address"
                                    value={values.address}
                                    onChange={handleChange('address')}
                                    fullWidth
                                    error={validAddress ? false: true}
                                />
                                <p className={classes.error}>{validAddress ? '': 'please enter address'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.inputLabel} htmlFor="postal-code" className={classes.inputLabel}>Postal Code *</label>
                                <TextField
                                    sx={textFieldStyles}
                                    id="postal-code"
                                    type='text'
                                    value={values.postalCode}
                                    onChange={handleChange('postalCode')}
                                    error={validAddress ? false: true}
                                    placeholder='Enter your postal code'
                                    fullWidth
                                />
                                <p className={classes.error}>{validPostalCode ? '': 'please enter valid password'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input type="checkbox" name="check-box" value="check-box" id="check-box"/>
                                <label htmlFor="check-box">Add to address book</label>
                            </Grid>
                            <Grid item sm={3}></Grid>
                            <Grid item xs={12} sm={3} width={{sm: '176px'}}>
                                <LinkButton width='100%' height='40px' color='#fff' background='#000' linkText="CONTINIUE" marginTop='0' marginButtom='0' isOnClicked={true}/>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </>
    );
};

