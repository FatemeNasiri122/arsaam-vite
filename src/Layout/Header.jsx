import React from 'react';

export default function Header() {

    return <div className="header-main">
        <div className="content">
            <div className="topsec">
                <div className="contact-search-sec">
                    <div className="globeSec">
                        <img src="src/assets/img/header/globe.svg" alt=""/>
                        EN
                    </div>
                    <img src="src/assets/img/header/phone.svg" alt=""/>
                    <img src="src/assets/img/header/search.svg" alt=""/>
                </div>
                <img className="logo" src="src/assets/img/header/logo.svg" alt=""/>
                <div className="profile-sec">
                    <img src="src/assets/img/header/user.svg" style={{marginLeft: 0}} alt=""/>
                    <img src="src/assets/img/header/favs.svg" alt=""/>
                    <img src="src/assets/img/header/shopping-bag.svg" alt=""/>
                    (0)
                </div>
            </div>
        </div>
        <nav className="nav">
            <a href="">MEN</a>
            <a href="">WOMEN</a>
            <a href="">SNEAKERS</a>
            <a href="">BAGS</a>
            <a href="">WATCHES</a>
            <a href="">EYEWEAR</a>
        </nav>
        <div className="gold-line"/>
    </div>
}
