import classes from "../styles/Content/ChangePassword.module.scss";
import React, {useState} from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Grid from "@mui/material/Grid";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import {AnimatePresence, motion} from "framer-motion";

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

export default function  ChangePassword  ({isMobileActive}) {
    const outlinedInputStyles = useOutlinedInputStyles();
    const [validcurrentPassword,setValidcurrentPassword] = useState(true)
    const [validnewPassword,setValidnewPassword] = useState(true)
    const [validconfirmnewPassword,setvalidconfirmnewPassword] = useState(true)

    const [values, setValues] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        confirmnewPassword: '',
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickshowCurrentPassword = (prop) => {
        setValues({
            ...values,
            [prop]: !values.showCurrentPassword,
        });
    };
    const handleClickShowNewPassword = (prop) => {
        setValues({
            ...values,
            [prop]: !values.showNewPassword,
        });
    };

    const handleClickShowConfirmPassword = (prop) => {
        setValues({
            ...values,
            [prop]: !values.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) =>{
        const {newPassword , currentPassword , confirmnewPassword} = values
        e.preventDefault()
        if (newPassword === ''){
            setValidnewPassword(false)
        }else {
            setValidnewPassword(true)
        }
        if (currentPassword === ''){
            setValidcurrentPassword(false)
        }else {
            setValidcurrentPassword(true)
        }
        if (confirmnewPassword === ''){
            setvalidconfirmnewPassword(false)
        }else {
            setvalidconfirmnewPassword(true)
        }

    }
    return (
        <Grid item xs={12} md={4} display={isMobileActive && {xs: 'none',md: 'block'}} paddingLeft={{md: '20px'}} marginTop={'18px'}>
            <AnimatePresence>

                <motion.div initial={{y: -100 }}
                            animate={{ y: 1 }}
                            exit={{  opacity: 0 }} >
                    <form action="" className={classes.form}>
                        <h2>CHANGE PASSWORD</h2>
                        <Grid item xs={12} marginTop={{xs: '0', md : '20px'}}>
                            <label htmlFor="password">Current Password *</label>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                marginTop={{xs: '10px', md : '5px'}}
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
                                            {values.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={validcurrentPassword ? false : true}
                                placeholder='Enter your current password'
                                fullWidth
                            />
                        </Grid>
                        <p className={classes.error}>{validcurrentPassword ? '': 'please enter valid password'}</p>
                        <Grid item xs={12} marginTop={{xs: '0', md : '20px'}}>
                            <label htmlFor="password">New Password *</label>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                marginTop={{xs: '10px', md : '5px'}}
                                id="password"
                                type={values.showNewPassword ? 'text' : 'password'}
                                value={values.newPassword}
                                onChange={handleChange('newPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() =>handleClickShowNewPassword('showNewPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showNewPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={validnewPassword ? false: true}
                                placeholder='Enter your current password'
                                fullWidth
                            />
                        </Grid>
                        <p className={classes.error}>{validnewPassword ? '': 'please enter valid password'}</p>
                        <Grid item xs={12} marginTop={{xs: '0', md : '20px'}}   >
                            <label htmlFor="password">Confirm New Password *</label>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                marginTop={{xs: '10px', md : '5px'}}
                                id="password"
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmnewPassword}
                                onChange={handleChange('confirmnewPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() =>handleClickShowConfirmPassword('showConfirmPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={validconfirmnewPassword ? false: true}
                                placeholder='Enter your current password'
                                fullWidth
                            />
                        </Grid>
                        <p className={classes.error}>{validconfirmnewPassword ? '': 'please enter valid password'}</p>
                        <Grid item xs={12} md={7}>
                            <a href="" className={classes.link} onClick={handleSubmit}>SAVE NEW PASSWORD</a>
                        </Grid>
                    </form>
                </motion.div>
            </AnimatePresence>

            
        </Grid>

    );
};
