import React, {useState} from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import {Collapse} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import phone from "../assets/img/header/phone.svg"
import search from "../assets/img/header/search.svg"
import user from "../assets/img/header/user.svg"
import favs from "../assets/img/header/favs.svg"
import globe from "../assets/img/header/globe.svg"
import shopping from "../assets/img/header/shopping-bag.svg"
import logo from "../assets/img/header/logo.svg"

export default function Header() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);

    };
    const [isOpen, setOpen] = useState(false)
    return <div className="header-main">
        <div className="content">
            <div className="topsec">
                <div className="contact-search-sec">
                    <div className="globeSec">
                        <img src={globe} alt=""/>
                        EN
                    </div>
                    <img src={phone} alt=""/>
                    <img src={search} alt=""/>
                </div>
                <img className="logo" src={logo} alt=""/>
                <div className="profile-sec">
                    <img src={user} style={{marginLeft: 0}} alt=""/>
                    <img src={favs} alt=""/>
                    <img src={shopping} alt=""/>
                    (0)
                </div>
            </div>
        </div>

        <nav className="nav">
            <ul>
                <li>
                    <a href="">MEN</a>
                </li>
                <li>
                    <a href="">WOMEN</a>
                </li>
                <li>
                    <a href="">SNEAKERS</a>
                </li>
                <li>
                    <a href="">BAGS</a>
                </li>
                <li>
                    <a href="">WATCHES</a>
                </li>
                <li>
                    <a href="">EYEWEAR</a>
                </li>
            </ul>

        </nav>

            <button className="hamburger-button" onClick={handleChange}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
            <div className="mobile-menu">
                <Collapse orientation="horizontal" in={checked}>
                    <ul>
                        <li>
                            <a href="">MEN</a>
                            <AddIcon />
                        </li>
                        <li>
                            <a href="">WOMEN</a>
                            <AddIcon />
                        </li>
                        <li>
                            <a href="">SNEAKERS</a>
                            <AddIcon />
                        </li>
                        <li>
                            <a href="">BAGS</a>
                            <AddIcon />
                        </li>
                        <li>
                            <a href="">WATCHES</a>
                            <AddIcon />
                        </li>
                        <li>
                            <a href="">EYEWEAR</a>
                            <AddIcon />
                        </li>

                    </ul>
                </Collapse>
            </div>


        <div className="gold-line"/>
    </div>
}
