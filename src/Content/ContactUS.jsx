import classes from "../styles/Content/ContactUS.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import Grid from "@mui/material/Grid";
import callUs from "/src/assets/img/icons/phone-call.svg"
import truck from "/src/assets/img/icons/truck-side.svg"
import undo from "/src/assets/img/icons/undo.svg"
import info from "/src/assets/img/icons/info.svg"
import interrogation from "/src/assets/img/icons/interrogation.svg"
import TextField from '@mui/material/TextField';
import React, {useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function  ContactUS  () {

    const [validFirstName,setValidFirstName] = useState(true)
    const [validSelect,setvalidSelect] = useState(true)
    const [validEmail,setValidEmail] = useState(true)
    const [validPhoneNumber,setvalidPhoneNumber] = useState(true)

    const [values, setValues] = useState({
        firstName: '',
        email: '',
        phoneNumber: '',
        request: '',
        description: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {email  , firstName , request , phoneNumber ,description} = values
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

        if (firstName === ''){
            setValidFirstName(false)
        }else {
            setValidFirstName(true)
        }
        if (request === ''){
            setvalidSelect(false)
        }else {
            setvalidSelect(true)
        }
        if (email === '' || regexEmail === false){
            setValidEmail(false)
        }else {
            setValidEmail(true)
        }
        if (phoneNumber === '' || phoneNumber !== email){
            setvalidPhoneNumber(false)
        }else {
            setvalidPhoneNumber(true)
        }
    }
    return (
        <>
            <div className={classes.statusContainer}>
            <p><span>Home / </span>CONTACT US</p>
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
                                size="small"
                                id="first-name"
                                placeholder="Enter your name"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                fullWidth
                                error={validFirstName ? false: true}
                                sx={{marginTop: '5px'}}
                            />
                            <p className={classes.error}>{validFirstName ? '': 'please enter valid name'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="email" className={classes.inputLabel}>Email *</label>
                            <TextField
                                size="small"
                                id="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange('email')}
                                fullWidth
                                error={validEmail ? false: true}
                                sx={{marginTop: '5px'}}
                            />
                            <p className={classes.error}>{validEmail ? '': 'please enter valid email'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="confirm-email" className={classes.inputLabel}>Phone Number</label>
                            <TextField
                                size="small"
                                id="confirm-email"
                                placeholder="Enter your email"
                                value={values.phoneNumber}
                                onChange={handleChange('phoneNumber')}
                                fullWidth
                                error={validPhoneNumber ? false: true}
                                sx={{marginTop: '5px'}}
                            />
                            <p className={classes.error}>{validPhoneNumber ? '': 'please enter phone number'}</p>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <label htmlFor="first-name" className={classes.inputLabel}>Type of request *</label>
                            <Select
                                value={values.request}
                                onChange={handleChange('request')}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                fullWidth
                                sx={{marginTop: '5px', height: '40px'}}
                                error={validSelect ? false: true}
                            >
                                <MenuItem value="">
                                    <em style={{color: '#B3B3B3'}}>Select type of request</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <p className={classes.error}>{validSelect ? '': 'please select something'}</p>

                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="description">Message</label>
                            <TextField
                                sx={{marginTop: '5px'}}
                                id="description"
                                placeholder='Write here your message'
                                multiline
                                rows={3}
                                value={values.description}
                                onChange={handleChange('description')}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                recaptcha
                            </div>
                            <a href="" className={classes.link} onClick={handleSubmit}>SEND</a>

                        </Grid>

                    </Grid>
                </form>

            </div>
        </>
    );
};
