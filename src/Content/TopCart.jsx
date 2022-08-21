import classes from "../styles/Content/TopCart.module.scss";
import shoppingCart from "/src/assets/img/icons/shopping-bag.svg"
import account from "/src/assets/img/icons/user.svg"
import checkOut from "/src/assets/img/icons/credit-card.svg"

export default function  TopCart  ({isFirstActive , isSecondActive , isThirdActive}) {

    return (
        <>
            <div className={classes.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
            <h1>cart</h1>
            <div className={classes.rentalContainer}>
                <ul className={classes.rentalManagerProgressBarContainer}>
                    <li className={isFirstActive && classes.active}>
                        <div className={classes.line}></div>
                        <div className={classes.circle}>
                            <img src={shoppingCart} alt=""/>
                            <p>SHOPPING CART</p>
                        </div>
                    </li>
                    <li className={isSecondActive && classes.active}>
                        <div className={classes.line}></div>
                        <div className={classes.circle}>
                            <img src={account} alt=""/>
                            <p>ACCOUNT</p>
                        </div>
                    </li>
                    <li className={isThirdActive && classes.active}>
                        <div className={classes.line}></div>
                        <div className={classes.circle}>
                            <img src={checkOut} alt=""/>
                            <p>CHECKOUT</p>
                        </div>
                        <div className={classes.line}></div>
                    </li>

                </ul>
            </div>
        </>
    );
};