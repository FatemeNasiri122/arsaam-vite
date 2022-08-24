import classes from '../styles/Content/SigninOrRegister.module.scss';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
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

export default function  SignInContainer () {
    const outlinedInputStyles = useOutlinedInputStyles();

    const [validEmail,setValidEmail] = useState(true)
    const [validPassword,setValidPassword] = useState(true)

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {email , password} = values
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        if (email === '' || regexEmail === false){
            setValidEmail(false)
        }else {
            setValidEmail(true)
        }
        if (password === ''){
            setValidPassword(false)
        }else {
            setValidPassword(true)
        }
    }

    return (
            <Grid container spacing={2}>
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
                        <a className={classes.links} href="">register</a>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12} order={{sm: 2 , xs: 1}}>
                    <div className={classes.signinContainer}>
                        <h2 className={classes.title}>
                            sign in
                        </h2>
                        <p>If you have already registered, sign in now</p>
                        <form action="">
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    value={values.email}
                                    type='email'
                                    onChange={handleChange('email')}
                                    error={validEmail ? false: true}
                                    placeholder='Email'
                                    sx={textFieldStyle}
                                />
                                <p className={classes.error}>{validEmail ? '': 'enter correct email address'}</p>
                            </FormControl>

                            <FormControl sx={{ my: 2 }} variant="outlined">
                                <OutlinedInput
                                    classes={outlinedInputStyles}
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    error={validPassword ? false: true}
                                    placeholder='Password'
                                />
                                <p className={classes.error}>{validPassword ? '': 'enter correct password'}</p>
                            </FormControl>

                        </form>
                        <a className={classes.links} href="" onClick={handleSubmit}>login</a>
                    </div>
                </Grid>
            </Grid>
    );
};

