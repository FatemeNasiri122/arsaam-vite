import classes from "../styles/Content/AccountTitles.module.scss";
import React, {useContext, useState} from "react";
import AccountContext from "../context/AccountContext";
import Grid from "@mui/material/Grid";
import {Collapse} from "@material-ui/core";
import AccountDetailsForm from "./AccountDetailsForm";
import OrdersListContainer from "./OrdersListContainer";
import FavoriteAccount from "./FavoriteProduct";
import AccountAddress from "./AccountAddress";
import ChangePassword from "./ChangePassword";

export default function  AccountTitles  () {
    const {lists,changeActive,changeMobileActive} = useContext(AccountContext)

    return (
        <div className={classes.containerTitles}>
            <Grid container>
                <Grid item xs={12} display={{xs: 'none',md: 'block'}}>
                    <ul onClick={(e) => changeActive(e.target)} >
                        {lists.map((list) =>{
                            return <li data-id={list.id} className={list.isActive && classes.active}>{list.name}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} display={{xs: 'block',md: 'none'}}>
                    <ul onClick={
                        (e) =>
                        {changeActive(e.target)
                        }}>
                        {lists.map((list) =>{
                            return <>
                                <li data-id={list.id} className={list.isActive && classes.active}>{list.name}</li>
                                <Collapse orientation="horizontal" in={list.isActive}>
                                    {lists[0].isActive && <AccountDetailsForm isMobileActive={false}/>}
                                    {lists[1].isActive && <OrdersListContainer isMobileActive={false}/>}
                                    {lists[2].isActive && <FavoriteAccount isMobileActive={false}/>}
                                    {lists[3].isActive && <AccountAddress isMobileActive={false}/>}
                                    {lists[5].isActive && <ChangePassword isMobileActive={false}/>}
                                </Collapse>
                            </>
                        })}
                    </ul>
                </Grid>
            </Grid>

        </div>
    );
};
