import classes from "../styles/Content/AccountDetailsForm.module.scss";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';
import TshirtsData from "../data/Tshirt.json";
import Tshirt from "./Tshirt";
import {AnimatePresence, motion} from "framer-motion";


const useOutlinedInputStyles = makeStyles({

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
    // "& .MuiInputBase-colorPrimary": {
    //     border: '1px solid black !important'
    // },
    // fix border color on focus
}

export default function  AccountDetails  ({isMobileActive}) {

    const [validFirstName,setValidFirstName] = useState(true)
    const [validLastName,setValidLastName] = useState(true)
    const [validEmail,setValidEmail] = useState(true)
    const [validSelect,setValidSelect] = useState(true)
    const [validCountry,setValidCountry] = useState(true)
    const [validCity,setValidCity] = useState(true)
    const [validPhoneNumber,setValidPhoneNumber] = useState(true)
    const [validAddress,setValidAddress] = useState(true)
    const [validPostalCode,setValidPostalCode] = useState(true)

    const outlinedInputStyles = useOutlinedInputStyles();

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        savedAddress: '',
        country: '',
        city: '',
        phoneNumber: '',
        postalCode: '',
        address: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {email , firstName , lastName , country , city, savedAddress, phoneNumber , address, postalCode} = values
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        if (savedAddress === ''){
            setValidSelect(false)
        }else {
            setValidSelect(true)
        }
        if (firstName === ''){
            setValidFirstName(false)
        }else {
            setValidFirstName(true)
        }
        if (lastName === ''){
            setValidLastName(false)
        }else {
            setValidLastName(true)
        }if (country === ''){
            setValidCountry(false)
        }else {
            setValidCountry(true)
        }if (city === ''){
            setValidCity(false)
        }else {
            setValidCity(true)
        }if (phoneNumber === ''){
            setValidPhoneNumber(false)
        }else {
            setValidPhoneNumber(true)
        }if (postalCode === ''){
            setValidPostalCode(false)
        }else {
            setValidPostalCode(true)
        }
        if (address === ''){
            setValidAddress(false)
        }else {
            setValidAddress(true)
        }if (email === '' || regexEmail === false){
            setValidEmail(false)
        }else {
            setValidEmail(true)
        }
    }

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
                                        <label htmlFor="first-name" >First Name *</label>
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
                                    <Grid item xs={12} sm={6} marginTop={'8px'}>
                                        <label htmlFor="last-name" >Last Name *</label>
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
                                        <label htmlFor="email">Email *</label>
                                        <TextField
                                            sx={textFieldStyles}
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
                                        <label htmlFor="phone-number" >Phone Number *</label>
                                        <TextField
                                            sx={textFieldStyles}
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
                                        <Select
                                            value={values.country}
                                            onChange={handleChange('country')}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            fullWidth
                                            error={validSelect ? false: true}
                                            sx={textFieldStyles}
                                        >
                                            <MenuItem value="">
                                                <em>Enter your country</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        <p className={classes.error}>{validCountry ? '': 'please enter valid country'}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="city" className={classes.selectLabel}>City *</label>
                                        <Select
                                            value={values.city}
                                            onChange={handleChange('city')}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            fullWidth
                                            error={validSelect ? false: true}
                                            sx={textFieldStyles}
                                        >
                                            <MenuItem value="">
                                                <em>Enter your City</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        <p className={classes.error}>{validCity ? '': 'please enter valid city'}</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input type="checkbox" name="check-box" value="check-box" id="check-box"/>
                                        <label className={classes.newsLetterText} htmlFor="check-box">I would like to receive a newsletter</label>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <a href="" className={classes.link} onClick={handleSubmit}>SAVE DATA</a>
                                    </Grid>
                                </Grid>
                            </form>

                        </motion.div>

                    </AnimatePresence>
                    </Grid>



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
        </>

    );
};
