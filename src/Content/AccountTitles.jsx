import classes from "../styles/Content/AccountTitles.module.scss";
import Grid from "@mui/material/Grid";

export default function  AccountTitles  () {

    return (
        <div className={classes.containerTitles}>
            <ul>
                <li className={classes.active}>ACCOUNT DETAILS</li>
                <li>MY ORDERS</li>
                <li>FAVORITES</li>
                <li>ADDRESS BOOK</li>
                <li>MY RETURNS</li>
                <li>CHANGE PASSWORD</li>
            </ul>
        </div>
    );
};
