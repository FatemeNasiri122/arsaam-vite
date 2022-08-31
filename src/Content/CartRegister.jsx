import classes from '../styles/Content/CartRegister.module.scss';
import containerClass from '../styles/Content/Container.module.scss';
import status from "../styles/Content/Status.module.scss";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopCart from "./TopCart";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const useTextFieldStyles = makeStyles({
    root: {
        "&.Mui-focused .MuiTextField-notchedOutline": {
            borderColor: "black !important"
        }
    }
});

const textFieldStyle= {
    pt: 1,
    "& .MuiTextField-root.Mui-focused": {
    "& > fieldset": {
        borderColor: "black"
    }
}
}

export default function  Register  () {
    const [validFirstName,setValidFirstName] = useState(true)
    const [validLastName,setValidLastName] = useState(true)
    const [validEmail,setValidEmail] = useState(true)
    const [validSelect,setValidSelect] = useState(true)
    const [validCountry,setValidCountry] = useState(true)
    const [validCity,setValidCity] = useState(true)
    const [validPhoneNumber,setValidPhoneNumber] = useState(true)
    const [validAddress,setValidAddress] = useState(true)
    const [validPostalCode,setValidPostalCode] = useState(true)

    const TextFieldStyles = useTextFieldStyles();

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
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <label htmlFor="savedAddress-select" className={classes.inputLabel}>Select Saved saved Address *</label>
                                <Select
                                    value={values.savedAddress}
                                    onChange={handleChange('savedAddress')}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    fullWidth
                                    sx={{marginTop: '10px'}}
                                    error={validSelect ? false: true}
                                >
                                    <MenuItem value="">
                                        <em>Select saved saved Address</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <p className={classes.error}>{validSelect ? '': 'please select address'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label htmlFor="first-name" className={classes.inputLabel}>First Name *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="last-name" className={classes.inputLabel}>Last Name *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="country" className={classes.inputLabel}>Country *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="city" className={classes.inputLabel}>City *</label>
                                <TextField
                                    sx={textFieldStyle}
                                    id="city"
                                    placeholder="Enter your City"
                                    value={values.city}
                                    onChange={handleChange('city')}
                                    fullWidth
                                    error={validCity ? false: true}
                                />
                                <p className={classes.error}>{validCity ? '': 'please enter city'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label htmlFor="email" className={classes.inputLabel}>Email *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="phone-number" className={classes.inputLabel}>Phone Number *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="address" className={classes.inputLabel}>Address *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="postal-code" className={classes.inputLabel}>Postal Code *</label>
                                <TextField
                                    classes={TextFieldStyles}
                                    sx={{ mt : 1}}
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
                            <Grid item xs={12} sm={3}>
                                <a href="" className={classes.link} onClick={handleSubmit}>CONTINIUE</a>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </>
    );
};

