import SigninOrContainer from "./SignInContainer";
import containerClass from "../styles/Content/Container.module.scss";
import status from "../styles/Content/Status.module.scss";
import TopCart from "./TopCart";
import Container from "@mui/material/Container";
import React, {useState} from "react";
import classes from "../styles/Content/CartCheckout.module.scss";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function CartCheckout(){
    const [validCode,setValidCode] = useState(true)

    const [values, setValues] = useState({
        code: '',
        description: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {code , description} = values

    }

    return <>
        <div className={containerClass.container}>
            <div className={status.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
        </div>
        <div className={containerClass.checkoutContainer}>

            <TopCart isFirstActive={true} isSecondActive={true} isThirdActive={true}/>
            <Grid container>
                <Grid item xs={10}>
                    <label htmlFor="code" className={classes.inputLabel}>Use Coupon Code</label>
                    <TextField
                        id="code"
                        placeholder="Enter coupon code"
                        value={values.email}
                        onChange={handleChange('email')}
                        fullWidth
                        error={validCode ? false: true}
                        sx={{marginTop: '5px'}}
                    />
                </Grid>
                <Grid item xs={2}>
                    <a href="" className={classes.applyLink} onClick={handleSubmit}>APPLY</a>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.finalContainer}>
                        <strong className={classes.title}>FINAL INVOICE</strong>
                        <p><span>TOTAL PURCHASE</span><span>€ 2.400,00</span></p>
                        <p><span>TOTAL NUMBER OF ORDERS</span><span>2</span></p>
                        <p><span>TOTAL DISCOUNT</span><span>€ 400,00</span></p>
                        <p><span>INSURANCE AND TOLLS</span><span>€ 5,00</span></p>
                        <p><span>TAXATION</span><span>€ 5,00</span></p>
                        <p><span>SHIPPING</span><span>€ 15,00</span></p>
                        <p><strong>ORDER TOTAL</strong><strong>€ 2.025,00</strong></p>
                    </div>
                </Grid>
                <Grid item xs={12} sx={{marginTop: '21px'}}>
                    <label htmlFor="description" className={classes.inputLabel}>Description</label>
                    <TextField
                        sx={{marginTop: '5px'}}
                        id="description"
                        placeholder='you can give your own description write in this section'
                        multiline
                        rows={3}
                        value={values.description}
                        onChange={handleChange('description')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{marginTop: '21px',display: 'flex',justifyContent: 'end'}}>
                    <a href="" className={classes.paymentLink} onClick={handleSubmit}>BILL PAYMENT</a>
                </Grid>
            </Grid>
        </div>
    </>
}