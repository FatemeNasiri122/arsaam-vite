import React from 'react';
import instagram from '../assets/img/029-instagram.svg'
import facebook from '../assets/img/036-facebook.svg'
import telegram from '../assets/img/telegram.svg'
import linkdin from '../assets/img/027-linkedin.svg'
import twitter from '../assets/img/008-twitter.svg'

export default function Footer() {
    return <div className="footer-main">
        <div className="content">
            <div className="footer-top">
                <div className="singup-txt">
                    <h3>Sign up to shop first</h3>
                    <p>Sign up for exclusive access to our Promotions plus the Latest Arrivals.</p>
                </div>
                <div className="signup-input">
                    <input placeholder="Enter Email Address" type="text"/>
                    <a>Submit</a>
                </div>
            </div>
            <div className="gold-line"/>
            <div className="footer-links">
                <div className="col">
                    <h4>Our World</h4>
                    <a>About Arsaam</a>
                    <a>Campaign</a>
                    <a>Collections</a>
                    <a>Store Locator</a>
                    <a>News</a>
                </div>
                <div className="col">
                    <h4>Customer care</h4>
                    <a>Payments</a>
                    <a>Delivery and return</a>
                    <a>Pickup in store</a>
                    <a>Size guide</a>
                    <a>FAQ</a>
                    <a>Contact us</a>
                </div>
                <div className="col">
                    <h4>Corporate info</h4>
                    <a>Imprint</a>
                    <a>Privacy policy</a>
                    <a>Cookie policy</a>
                    <a>Terms & conditions</a>
                    <a>Career</a>
                    <a>Stop fake</a>
                </div>
            </div>
            <div className="gold-line-rev"/>
            <div className="copyright">
                <p>Copyright © 2022 ARSAAM - All rights reserved.</p>

                <div>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={telegram} alt=""/>
                    <img src={linkdin} alt=""/>
                    <img src={twitter} alt=""/>
                </div>
            </div>
        </div>
    </div>
}


