import classes from '../styles/Content/SigninOrRegister.module.scss';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function  SignInContainer () {

    const outlinedInputStyles = useOutlinedInputStyles();

    const {handleChange , handleSubmit , handleClickshowCurrentPassword , handleClickShowNewPassword, handleClickShowConfirmPassword, handleMouseDownPassword,values, validFirstName , validLastName , validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validAddress, validPostalCode, validcurrentPassword, validnewPassword, validconfirmnewPassword,} = useContext(FormContext);

    return (
            <Grid container spacing={2} marginBottom='80px'>
                <Grid item sm={6} xs={12} order={{sm: 1 , xs: 2}} >
                    <div className={classes.registerContainer}>
                        <h2 className={classes.title}>
                            register
                        </h2>
                        <p>Create account for yourself</p>
                        <ul>
                            <li>Receive our exclusive newsletter</li>
                            <li>Save your favourite products</li>
                            <li>Shop faster and check your orders and returns</li>
                        </ul>
                        <LinkButton isOnClicked={false} width='100%' height='50px' color='#fff' background='#000' linkText="REGISTER" marginTop='0' marginButtom='0'/>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12} order={{sm: 2 , xs: 1}}>
                    <div className={classes.signinContainer}>
                        <h2 className={classes.title}>
                            sign in
                        </h2>
                        <p>If you have already registered, sign in now</p>
                        <form action="">
                            <FormControl sx={{ mt: '15px' }}>
                                <TextField
                                    sx={textFieldStyles}
                                    value={values.email}
                                    type='email'
                                    onChange={handleChange('email')}
                                    error={validEmail ? false: true}
                                    placeholder='Email'
                                />
                                <p className={classes.error}>{validEmail ? '': 'enter correct email address'}</p>
                            </FormControl>

                            <FormControl variant="outlined" sx={{ mt: '15px' }}>
                                <OutlinedInput
                                    classes={outlinedInputStyles}
                                    id="outlined-adornment-password"
                                    type={values.showCurrentPassword ? 'text' : 'password'}
                                    value={values.currentPassword}
                                    onChange={handleChange('currentPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>handleClickshowCurrentPassword('showCurrentPassword')}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    error={validcurrentPassword ? false: true}
                                    placeholder='Password'
                                />
                                <p style={{marginTop: '10px'}} className={classes.error}>{validcurrentPassword ? '': 'enter correct password'}</p>

                            </FormControl>
                        </form>

                        <LinkButton isOnClicked={true} width='100%' height='40px' color='#fff' background='#000' linkText="LOGIN" marginTop='20px' marginButtom='0'/>
                        <a href="">Forget your password?</a>
                    </div>
                </Grid>
            </Grid>
    );
};

