import classes from "../styles/Content/AccountDetails.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import Grid from "@mui/material/Grid";
import AccountTitles from "./AccountTitles";
import React, {useContext, useState} from "react";
import AccountDetailsForm from "./AccountDetailsForm";
import OrdersListContainer from "./OrdersListContainer";
import FavoriteAccount from "./FavoriteProduct";
import status from "../styles/Content/Status.module.scss";
import AccountAddress from "./AccountAddress";
import ChangePassword from "./ChangePassword";
import AccountContext from "../context/AccountContext";

export default function  AccountDetails  () {

    const {lists } = useContext(AccountContext)

    return (
        <div className={containerClass.container}>
            <div className={status.statusContainer}>
            <p><span>Home / </span>MY ACCOUNT</p>
            </div>
            <h1>MY ACCOUNT</h1>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <AccountTitles />
                </Grid>
                {lists[0].isActive && <AccountDetailsForm isMobileActive={true} />}
                {lists[1].isActive && <OrdersListContainer isMobileActive={true} />}
                {lists[2].isActive && <FavoriteAccount isMobileActive={true} />}
                {lists[3].isActive && <AccountAddress isMobileActive={true} />}
                {lists[5].isActive && <ChangePassword isMobileActive={true} />}
            </Grid>
        </div>
    );
};
