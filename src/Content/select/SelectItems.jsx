import React, {useContext, useState} from "react";
import "/src/Content/select/style.scss";
import FormContext from "../../context/FormContext";
import classes from "../../styles/Content/AccountDetailsForm.module.scss";

export default function SelectItems({initialSelect, label}) {

    const {
        handleChange, handleSubmit, values, validFirstName, validLastName, validEmail, validSelect,
        validCountry, validCity, validPhoneNumber, validAddress, validPostalCode, validSelectCity
    } = useContext(FormContext);

    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState(initialSelect);
    const [isValid, setIsValid] = useState(true);

    return (
        <>
            <div className="App" style={{border: !isValid && '1px solid tomato'}}>
                <div className="dropdown">
                    <div
                        onClick={(e) => {
                            setIsActive(!isActive);
                        }}
                        className="dropdown-btn"
                        style={{border: isValid && '1px solid #C4C4C4'}}>
                        {selected}
                        <span
                            className={isActive ? "down" : "up"}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="10" height="10"><path
                            d="M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z"/></svg>
                    </span>
                    </div>
                    <div
                        className="dropdown-content"
                        style={{display: isActive ? "block" : "none"}}
                    >
                        <div
                            onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                                setIsValid(true);
                            }}
                            className="item"
                        >
                            One
                        </div>
                        <div
                            className="item"
                            onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                                setIsValid(true);
                            }}
                        >
                            Two
                        </div>
                        <div
                            className="item"
                            onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                                setIsValid(true);
                            }}
                        >
                            Three
                        </div>
                    </div>
                </div>
            </div>
            <p className={classes.error}>{isValid ? '' : `please enter valid ${label}`}</p>
        </>

    );
}