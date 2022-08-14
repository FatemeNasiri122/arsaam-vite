import classes from '../styles/Content/Register.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";

const useOutlinedInputStyles = makeStyles({
    root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black !important"
        }
    }
});

const textFieldStyle= {
    pt: 1,
    "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
        borderColor: "black"
    }
}
}

export default function  Register  () {
    const [validFirstName,setValidFirstName] = useState(true)
    const [validLastName,setValidLastName] = useState(true)
    const [validEmail,setValidEmail] = useState(true)
    const [validConfirmEmail,setValidConfirmEmail] = useState(true)
    const [validPassword,setValidPassword] = useState(true)
    const [validConfirmPassword,setValidConfirmPassword] = useState(true)

    const outlinedInputStyles = useOutlinedInputStyles();

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = (prop) => {
        setValues({
            ...values,
            [prop]: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {email , password , firstName , lastName , confirmEmail , confirmPassword} = values
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        const regexConfirmEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(confirmEmail);

        if (firstName === ''){
            setValidFirstName(false)
        }else {
            setValidFirstName(true)
        }
        if (lastName === ''){
            setValidLastName(false)
        }else {
            setValidLastName(true)
        }
        if (email === '' || regexEmail === false){
            setValidEmail(false)
        }else {
            setValidEmail(true)
        }
        if (confirmEmail === '' || regexConfirmEmail === false || confirmEmail !== email){
            setValidConfirmEmail(false)
        }else {
            setValidConfirmEmail(true)
        }
        if (password === ''){
            setValidPassword(false)
        }else {
            setValidPassword(true)
        }
        if (confirmPassword === '' || confirmPassword !== password){
            setValidConfirmPassword(false)
        }else {
            setValidConfirmPassword(true)
        }
    }

    return (
        <>
            <div className={classes.statusContainer}>
                <p><span>home / </span>register</p>
            </div>

            <Container>
                <div className={classes.titleContainer}>
                    <h1>register</h1>
                </div>

                    <form action="" className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
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
                                <label htmlFor="first-name" className={classes.inputLabel}>Last Name *</label>
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
                                <label htmlFor="email" className={classes.inputLabel}>Email *</label>
                                <TextField
                                    sx={textFieldStyle}
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
                                <label htmlFor="confirm-email" className={classes.inputLabel}>Confirm Email *</label>
                                <TextField
                                    sx={textFieldStyle}
                                    id="confirm-email"
                                    placeholder="Enter your email"
                                    value={values.confirmEmail}
                                    onChange={handleChange('confirmEmail')}
                                    fullWidth
                                    error={validConfirmEmail ? false: true}
                                />
                                <p className={classes.error}>{validConfirmEmail ? '': 'please enter valid email'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label htmlFor="password" className={classes.inputLabel}>Password *</label>
                                <OutlinedInput
                                    classes={outlinedInputStyles}
                                    sx={{ mt : 1}}
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>handleClickShowPassword('showPassword')}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    error={validPassword ? false: true}
                                    placeholder='Password'
                                    fullWidth
                                />
                                <p className={classes.error}>{validPassword ? '': 'please enter valid password'}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label htmlFor="confirm-password" className={classes.inputLabel}>Confirm Password *</label>
                                <OutlinedInput
                                    classes={outlinedInputStyles}
                                    sx={{ mt : 1}}
                                    id="confirm-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleClickShowPassword('showConfirmPassword')}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    error={validConfirmPassword ? false: true}
                                    placeholder='Password'
                                    fullWidth
                                />
                                <p className={classes.error}>{validConfirmPassword ? '': 'please enter valid password'}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <input type="checkbox" name="check-box" value="check-box" id="check-box"/>
                                <label htmlFor="check-box">I would like to receive a newsletter</label>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="" className={classes.link} onClick={handleSubmit}>REGISTER NEW ACCOUNT</a>
                            </Grid>

                        </Grid>

                    </form>
            </Container>
        </>

    );
};

