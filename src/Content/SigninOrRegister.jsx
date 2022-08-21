import classes from '../styles/Content/SigninOrRegister.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cross from '../assets/img/cross.svg'
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import SigninOrContainer from "./SignInContainer";

export default function  SigninOrRegister  () {
    return (
        <Container>
            <div className={classes.closeContainer}>
                <div className={classes.closeWrapper}>
                    <img src={cross} alt=""/>
                </div>
            </div>
            <SigninOrContainer />
        </Container>
    );
};

