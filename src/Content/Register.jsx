import classes from '../styles/Content/Register.module.scss';
import containerClass from '../styles/Content/Container.module.scss';
import status from "../styles/Content/Status.module.scss";
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import LinkButton from "./button/LinkButton";
import FormContext from "../context/FormContext";

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

export default function Register() {

    const outlinedInputStyles = useOutlinedInputStyles();

    const {
        handleChange,
        handleSubmit,
        handleClickshowCurrentPassword,
        handleClickShowNewPassword,
        handleMouseDownPassword,
        values,
        validFirstName,
        validLastName,
        validEmail,
        validcurrentPassword,
        validnewPassword,
        validConfirmEmail
    } = useContext(FormContext);

    return (
        <>
            <div className={containerClass.container}>
                <div className={status.statusContainer}>
                    <p><span>home / </span>register</p>
                </div>
            </div>

            <div className={containerClass.moreWideContainer}>
                <div className={classes.titleContainer}>
                    <h1>register</h1>
                </div>
                <form action="" className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} columnSpacing={2.2}>
                        <Grid item xs={12} sm={6}>
                            <label htmlFor="first-name" className={classes.inputLabel}>First Name *</label>
                            <TextField
                                classes={outlinedInputStyles}
                                id="first-name"
                                placeholder="Enter your first name"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                fullWidth
                                error={validFirstName ? false : true}
                            />
                            <p className={classes.error}>{validFirstName ? '' : 'please enter valid first name'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label htmlFor="last-name" className={classes.inputLabel}>Last Name *</label>
                            <TextField
                                classes={outlinedInputStyles}
                                id="last-name"
                                placeholder="Enter your last name"
                                value={values.lastName}
                                onChange={handleChange('lastName')}
                                fullWidth
                                error={validLastName ? false : true}
                            />
                            <p className={classes.error}>{validLastName ? '' : 'please enter valid last name'}</p>
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
                                error={validEmail ? false : true}
                            />
                            <p className={classes.error}>{validEmail ? '' : 'please enter valid email'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label htmlFor="confirm-email" className={classes.inputLabel}>Confirm Email *</label>
                            <TextField
                                classes={outlinedInputStyles}
                                id="confirm-email"
                                placeholder="Enter your email"
                                value={values.confirmEmail}
                                onChange={handleChange('confirmEmail')}
                                fullWidth
                                error={validConfirmEmail ? false : true}
                            />
                            <p className={classes.error}>{validConfirmEmail ? '' : 'please enter valid email'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label htmlFor="password" className={classes.inputLabel}>Current Password *</label>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                id="password"
                                type={values.showCurrentPassword ? 'text' : 'password'}
                                value={values.currentPassword}
                                onChange={handleChange('currentPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => handleClickshowCurrentPassword('showCurrentPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showCurrentPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={validcurrentPassword ? false : true}
                                placeholder='Enter your current password'
                                fullWidth
                            />
                            <p className={classes.error}>{validcurrentPassword ? '' : 'please enter valid password'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label htmlFor="newPassword" className={classes.inputLabel}>New Password *</label>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                id="newPassword"
                                type={values.showNewPassword ? 'text' : 'password'}
                                value={values.newPassword}
                                onChange={handleChange('newPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => handleClickShowNewPassword('showNewPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showNewPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={validnewPassword ? false : true}
                                placeholder='Enter your current password'
                                fullWidth
                            />
                            <p className={classes.error}>{validnewPassword ? '' : 'please enter valid password'}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <input type="checkbox" name="check-box" value="check-box" id="check-box"/>
                            <label htmlFor="check-box">I would like to receive a newsletter</label>
                        </Grid>
                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.link}>
                                <LinkButton isOnClicked={true} width='100%' height='40px' color='#fff' background='#000'
                                            linkText="REGISTER NEW ACCOUNT" marginTop='40px' marginButtom='10px'/>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    );
};

