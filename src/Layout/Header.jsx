import React, {useEffect, useState} from 'react';
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
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

export default function Header (){
    const location = useLocation()
    const isPathInHome = location.pathname  === '/' ? true : false;
    const isPathRegister = location.pathname  === '/SigninOrRegister' || location.pathname  === '/Register' ? false : true;

    const [checked, setChecked] = useState(false);
    const [plus1, setPlus1] = useState(false);
    const [plus2, setPlus2] = useState(false);
    const [plus3, setPlus3] = useState(false);
    const [plus4, setPlus4] = useState(false);
    const [plus5, setPlus5] = useState(false);
    const [plus6, setPlus6] = useState(false);
    const [plus7, setPlus7] = useState(false);
    const [showLimited, setshowLimited] = useState(true);

    const [isOpen, setOpen] = useState(false)
    return <div className="header-main">
        {
            isPathInHome && <div className="limited" style={{display: showLimited ? 'flex' : 'none' }}>
                    <div className='limitedFixed'>
                        <a href=''>Summer Sale: -50% on Spring/Summer 2022 | limited time only</a>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="10" height="10" fill='white'
                             onClick={() => setshowLimited( false )} cursor='pointer'><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
                    </div>
                <div style={{marginTop: showLimited && '30px'}}></div>
            </div>
        }
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
                    {isPathRegister  ? <img src={user} alt=""/> : <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="#EFE27C"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                    </svg>

                    }
                    <img src={favs} alt=""/>
                    {isPathInHome ? <img src={shopping} alt=""/> : <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"/></svg>
                    }
                    (0)
                </div>
            </div>
        </div>

        <nav className="nav">

            <ul className="menu-items">

                <li className='nav-item'>
                    <a href="" className="menu-item expand-btn">MEN</a>
                    <div className="mega-menu expandable">
                        <div className="mega-menu-content" style={{marginTop: isPathInHome && showLimited && '29px'}}>
                            <div className="triangle-container" style={{marginBottom: isPathInHome && showLimited && '25px'}}>
                                <ul>
                                    <li>
                                        <div className="item-1"></div>
                                        <div className="item-2"></div>
                                        <div className="item-3"></div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="list-container">
                                <ul>
                                    <li><a>WHAT'S NEW</a></li>
                                    <li><a>FALL/WINTER 2022</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">CLOTHING</a></li>
                                    <li><a href="">ALL CLOTHING</a></li>
                                    <li><a href="">OUTERWEAR & COATS</a></li>
                                    <li><a href="">LEATHER</a></li>
                                    <li><a href="">SARTORIAL</a></li>
                                    <li><a href="">KNITWEAR</a></li>
                                    <li><a href="">SWEATSHIRTS & HOODIES</a></li>
                                    <li><a href="">POLOSHIRTS</a></li>
                                    <li><a href="">T-SHIRTS</a></li>
                                    <li><a href="">SHIRTS</a></li>
                                    <li><a href="">DENIM</a></li>
                                    <li><a href="">TROUSERS & SHORTS</a></li>
                                    <li><a href="">ACTIVEWEAR</a></li>
                                    <li><a href="">UNDERWEAR & SOCKS</a></li>
                                    <li><a href="">BEACHWEAR</a></li>
                                    <li><a href="">BATHROBES</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">SHOES</a></li>
                                    <li><a href="">LOW TOP SNEAKERS</a></li>
                                    <li><a href="">HIGH TOP SNEAKERS</a></li>
                                    <li><a href="">RUNNER</a></li>
                                    <li><a href="">SANDALS & SLIDES</a></li>
                                    <li><a href="">BOOTS</a></li>
                                    <li><a href="">LOAFERS & MOCASSINS</a></li>
                                    <li><a href="">ESPADRILLAS</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">MOST WANTED FOR HIM</a></li>
                                    <li><a href="">THE $KELETON™</a></li>
                                    <li><a href="">PHANTOM KICK$</a></li>
                                    <li><a href="">MONEY BEA$T</a></li>
                                    <li><a href="">SILVER $URFER</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">BAGS</a></li>
                                    <li><a href="">ALL BAGS</a></li>
                                    <li><a href="">BACKPACKS</a></li>
                                    <li><a href="">MESSENGER AND CROSSBODY BAGS</a></li>
                                    <li><a href="">TOTES</a></li>
                                    <li><a href="">SMALL BAGS AND BELT BAGS</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">ACCESSORIES</a></li>
                                    <li><a href="">WATCHES</a></li>
                                    <li><a href="">EYEWEAR</a></li>
                                    <li><a href="">HATS & CAPS</a></li>
                                    <li><a href="">BELTS</a></li>
                                    <li><a href="">TIES & POCKET SQUARES</a></li>
                                    <li><a href="">WALLETS & SMALL LEATHER GOODS</a></li>
                                    <li><a href="">SCARVES & BANDANAS</a></li>
                                    <li><a href="">GLOVES</a></li>
                                    <li><a href="">SOCKS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="submenu">

                    </div>
                </li>
                <li className='nav-item'>
                    <a href="">WOMEN</a>
                </li>
                <li className='nav-item'>
                    <a href="">SNEAKERS</a>
                </li>
                <li className='nav-item'>
                    <a href="">BAGS</a>
                </li>
                <li className='nav-item'>
                    <a href="">WATCHES</a>
                </li>
                <li className='nav-item'>
                    <a href="">EYEWEAR</a>
                </li>
            </ul>
        </nav>

            <button className="hamburger-button" onClick={() => setChecked((prev) => !prev)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
            <div className="mobile-menu">
                <Collapse orientation="horizontal" in={checked}>
                    <ul className='mobile-menu-wrapper'>
                        <li>
                            <div className="link-container">
                                <a href="">MEN</a>
                                <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus1((prev) => !prev)}/>
                            </div>
                            <Collapse orientation="horizontal" in={plus1}>
                                <ul>
                                    <li>
                                        <div className="link-container">
                                            <a href="">WHAT'S NEW</a>
                                            <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus2((prev) => !prev)}/>
                                        </div>
                                        <Collapse orientation="horizontal" in={plus2}>
                                            <ul>
                                                <li><a>FALL/WINTER 2022</a></li>
                                            </ul>
                                        </Collapse>
                                    </li>
                                    <li>
                                        <div className="link-container">
                                            <a href="">CLOTHING</a>
                                        <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus3((prev) => !prev)}/>
                                    </div>
                                        <Collapse orientation="horizontal" in={plus3}>
                                            <ul>
                                                <li><a href="">ALL CLOTHING</a></li>
                                                <li><a href="">OUTERWEAR & COATS</a></li>
                                                <li><a href="">LEATHER</a></li>
                                                <li><a href="">SARTORIAL</a></li>
                                                <li><a href="">KNITWEAR</a></li>
                                                <li><a href="">SWEATSHIRTS & HOODIES</a></li>
                                                <li><a href="">POLOSHIRTS</a></li>
                                                <li><a href="">T-SHIRTS</a></li>
                                                <li><a href="">SHIRTS</a></li>
                                                <li><a href="">DENIM</a></li>
                                                <li><a href="">TROUSERS & SHORTS</a></li>
                                                <li><a href="">ACTIVEWEAR</a></li>
                                                <li><a href="">UNDERWEAR & SOCKS</a></li>
                                                <li><a href="">BEACHWEAR</a></li>
                                                <li><a href="">BATHROBES</a></li>
                                            </ul>
                                        </Collapse>
                                    </li>
                                    <li>
                                        <div className="link-container">
                                            <a href="">SHOES</a>
                                            <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus4((prev) => !prev)}/>
                                        </div>
                                        <Collapse orientation="horizontal" in={plus4}>
                                            <ul>
                                                <li><a href="">LOW TOP SNEAKERS</a></li>
                                                <li><a href="">HIGH TOP SNEAKERS</a></li>
                                                <li><a href="">RUNNER</a></li>
                                                <li><a href="">SANDALS & SLIDES</a></li>
                                                <li><a href="">BOOTS</a></li>
                                                <li><a href="">LOAFERS & MOCASSINS</a></li>
                                                <li><a href="">ESPADRILLAS</a></li>
                                            </ul>
                                        </Collapse>
                                    </li>
                                    <li>
                                        <div className="link-container">
                                            <a href="">MOST WANTED FOR HIM</a>
                                            <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus5((prev) => !prev)}/>
                                        </div>
                                        <Collapse orientation="horizontal" in={plus5}>
                                        <ul>
                                            <li><a href="">THE $KELETON™</a></li>
                                            <li><a href="">PHANTOM KICK$</a></li>
                                            <li><a href="">MONEY BEA$T</a></li>
                                            <li><a href="">SILVER $URFER</a></li>
                                        </ul>
                                        </Collapse>
                                    </li>
                                    <li>
                                        <div className="link-container">
                                            <a href="">BAGS</a>
                                            <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus6((prev) => !prev)}/>
                                        </div>
                                        <Collapse orientation="horizontal" in={plus6}>
                                            <ul>
                                                <li><a href="">ALL BAGS</a></li>
                                                <li><a href="">BACKPACKS</a></li>
                                                <li><a href="">MESSENGER AND CROSSBODY BAGS</a></li>
                                                <li><a href="">TOTES</a></li>
                                                <li><a href="">SMALL BAGS AND BELT BAGS</a></li>
                                            </ul>
                                        </Collapse>
                                    </li>
                                    <li>
                                        <div className="link-container">
                                            <a href="">ACCESSORIES</a>
                                            <AddIcon sx={{cursor: "pointer"}} onClick={() => setPlus7((prev) => !prev)}/>
                                        </div>
                                        <Collapse orientation="horizontal" in={plus7}>
                                            <ul>
                                                <li><a href="">WATCHES</a></li>
                                                <li><a href="">EYEWEAR</a></li>
                                                <li><a href="">HATS & CAPS</a></li>
                                                <li><a href="">BELTS</a></li>
                                                <li><a href="">TIES & POCKET SQUARES</a></li>
                                                <li><a href="">WALLETS & SMALL LEATHER GOODS</a></li>
                                                <li><a href="">SCARVES & BANDANAS</a></li>
                                                <li><a href="">GLOVES</a></li>
                                                <li><a href="">SOCKS</a></li>
                                            </ul>
                                        </Collapse>
                                    </li>
                                </ul>
                            </Collapse>
                        </li>
                        <li>
                            <div className="link-container">
                                <a href="">WOMEN</a>
                                <AddIcon  sx={{cursor: "pointer"}}/>
                            </div>
                        </li>
                        <li>
                            <div className="link-container">
                                <a href="">SNEAKERS</a>
                                <AddIcon  sx={{cursor: "pointer"}}/>
                            </div>
                        </li>
                        <li>
                            <div className="link-container">
                                <a href="">BAGS</a>
                                <AddIcon  sx={{cursor: "pointer"}}/>
                            </div>
                        </li>
                        <li>
                            <div className="link-container">
                                <a href="">WATCHES</a>
                                <AddIcon  sx={{cursor: "pointer"}}/>
                            </div>
                        </li>
                        <li>
                            <div className="link-container">
                                <a href="">EYEWEAR</a>
                                <AddIcon  sx={{cursor: "pointer"}}/>
                            </div>
                        </li>

                    </ul>
                </Collapse>
            </div>

        <div className="gold-line" />

    </div>
}
