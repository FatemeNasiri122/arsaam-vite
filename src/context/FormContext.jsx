import {createContext, useContext, useEffect, useReducer, useState} from "react";
import AccountReducer from "./AccountReducer";
import {ActiveDetails} from "../Content/ActiveDetails";

const FormContext = createContext()

export const FormProvider = ({children}) => {

    const [validFirstName, setValidFirstName] = useState(true)
    const [validLastName, setValidLastName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validSelect, setValidSelect] = useState(true)
    const [validCountry, setValidCountry] = useState(true)
    const [validCity, setValidCity] = useState(true)
    const [validPhoneNumber, setValidPhoneNumber] = useState(true)
    const [validAddress, setValidAddress] = useState(true)
    const [validPostalCode, setValidPostalCode] = useState(true)
    const [validcurrentPassword, setValidcurrentPassword] = useState(true)
    const [validnewPassword, setValidnewPassword] = useState(true)
    const [validconfirmnewPassword, setvalidconfirmnewPassword] = useState(true)
    const [validConfirmEmail, setvalidConfirmEmail] = useState(true)
    const [validmessage, setvalidmessage] = useState(true)
    const [validSelectCity, setSelectCity] = useState(false)

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        savedAddress: '',
        country: '',
        city: '',
        phoneNumber: '',
        postalCode: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        confirmnewPassword: '',
        message: '',
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false,
    });

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

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
        setValues({...values, [prop]: event.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const {
            email,
            firstName,
            lastName,
            country,
            city,
            message,
            savedAddress,
            phoneNumber,
            address,
            postalCode,
            newPassword,
            currentPassword,
            confirmnewPassword,
            confirmEmail
        } = values
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

        if (savedAddress === '') {
            setValidSelect(false)
        } else {
            setValidSelect(true)
        }
        if (firstName === '') {
            setValidFirstName(false)
        } else {
            setValidFirstName(true)
        }
        if (lastName === '') {
            setValidLastName(false)
        } else {
            setValidLastName(true)
        }
        if (country === '') {
            setValidCountry(false)
        } else {
            setValidCountry(true)
        }
        if (city === '') {
            setValidCity(false)
        } else {
            setValidCity(true)
        }
        if (phoneNumber === '') {
            setValidPhoneNumber(false)
        } else {
            setValidPhoneNumber(true)
        }
        if (postalCode === '') {
            setValidPostalCode(false)
        } else {
            setValidPostalCode(true)
        }
        if (address === '') {
            setValidAddress(false)
        } else {
            setValidAddress(true)
        }
        if (email === '' || regexEmail === false) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
        }
        if (newPassword === '') {
            setValidnewPassword(false)
        } else {
            setValidnewPassword(true)
        }
        if (currentPassword === '') {
            setValidcurrentPassword(false)
        } else {
            setValidcurrentPassword(true)
        }
        if (confirmnewPassword === '') {
            setvalidconfirmnewPassword(false)
        } else {
            setvalidconfirmnewPassword(true)
        }
        if (confirmEmail === '') {
            setvalidConfirmEmail(false)
        } else {
            setvalidConfirmEmail(true)
        }
        if (message === '') {
            setvalidmessage(false)
        } else {
            setvalidmessage(true)
        }
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormContext.Provider value={{
            handleChange,
            handleSubmit,
            handleClickshowCurrentPassword,
            handleClickShowNewPassword,
            handleClickShowConfirmPassword,
            handleMouseDownPassword,
            values,
            validFirstName,
            validLastName,
            validEmail,
            validSelect,
            validCountry,
            validCity,
            validPhoneNumber,
            validAddress,
            validPostalCode,
            validcurrentPassword,
            validnewPassword,
            validconfirmnewPassword,
            validConfirmEmail,
            validmessage,
            validSelectCity,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext