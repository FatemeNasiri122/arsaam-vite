import {useContext, useState} from "react";
import FormContext from "../../context/FormContext";
import classes from "/src/styles/Button/Button.module.scss";

export default function LinkButton({isOnClicked, width, height, background, color, linkText, marginTop}) {
    const [isHoverActive, setIsHoverActive] = useState(false)

    const {
        handleChange, handleSubmit, values, validFirstName, validLastName, validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validAddress, validPostalCode,
    } = useContext(FormContext);

    const style = {
        width: width,
        height: height,
        marginTop: marginTop,
        font: 'normal normal normal 14px/17px Century Gothic',
        backgroundColor: background,
        color: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'linear 500ms'
    }
    const hoverStyle = {
        width: width,
        height: height,
        marginTop: marginTop,
        font: 'normal normal normal 14px/17px Century Gothic',
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'linear 500ms',
    }

    return (
        <a href=""
           className={classes.buttonLink}
           style={isHoverActive ? hoverStyle : style}
           onClick={(e) => {
               e.preventDefault()
               if (isOnClicked) handleSubmit(e)
           }}
           onMouseEnter={() => setIsHoverActive(true)}
           onMouseLeave={() => setIsHoverActive(false)}
        >{linkText}</a>
    );
};
