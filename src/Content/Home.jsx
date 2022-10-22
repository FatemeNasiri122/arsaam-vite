import React from 'react';
import classes from '../styles/Content/Home.module.scss';

export default function Home() {
    return <div className={classes.bodymain}>
        <div className={classes.salesec}>
            <div className={classes.goldcard}>
                <h1>Summer Sale</h1>
                <h2>-50%</h2>
                <h4>On selected items only</h4>
            </div>
            <div className={classes.salebuttons}>
                <a>Sale Men</a>
                <a>Sale Women</a>
            </div>
        </div>
        <div className={classes.youngcouplesec}>
            <div className={classes.salebuttons}>
                <a className={classes.men}>Men</a>
                <a className={classes.women}>Women</a>
            </div>
        </div>
        <div className={classes.fw22sec}>
            <h4>New in FW/22</h4>
            <a>Discover</a>
        </div>
        <div className={classes.activewearsec}>
            <div className={classes.snapshotcontainer}>
                <img src="src/assets/img/snapshot.png" className={classes.snapshot} alt=""/>
            </div>
            <div className={classes.fabcsec}>
                <img src="src/assets/img/FABC-MJJ0420-PJY002N_0221_m.png" alt=""/>
                <h4>ACTIVEWEAR</h4>
                <a>Discover</a>
            </div>
        </div>
        <div className={classes.nikeshoesec}>
            <h4>Sneakers</h4>
            <div className={classes.salebuttons}>
                <a>Men</a>
                <a>Women</a>
            </div>
        </div>
        <div className={classes.womensec}>
            <h4>Women</h4>
            <a>Discover</a>
        </div>
        <div className={classes.activewearwomensec}>
            <div className={classes.fabcsec}>
                <img src="/src/assets/img/FABC-WJJ0083-PTE003N_05_m.png" alt=""/>
                <h4>ACTIVEWEAR</h4>
                <a>Discover</a>
            </div>
            <div className={classes.snapshot}>
                <img src="src/assets/img/snapshot1.png" className={classes.snapshot} alt=""/>
            </div>

        </div>
        <div className={classes.eyewearsec}>
            <h4>Eyewear Collection</h4>
            <a>Discover</a>
        </div>
        <div className={classes.skullwatchsec}>
            <img src="src/assets/img/angle-left.svg" className={classes.angle + ' ' + classes.left} alt=""/>
            <div>
                <img src="src/assets/img/PABA-MWS0004-PXV037N_0916.png" alt=""/>
                <h4>THE $KULL TITAN GOLD Watch</h4>
                <a>Discover</a>
            </div>
            <img src="src/assets/img/angle-right.svg" className={classes.angle + ' ' + classes.right} alt=""/>
        </div>
        <div className={classes.watchessec}>
            <h4>WATCHES COLLECTION</h4>
            <a>Discover</a>
        </div>
        <div className={classes.followussec}>
            <h2>Follow us on instagram</h2>
            <img src="src/assets/img/Repeat%20Grid%202.png" alt=""/>

            <div className={classes.instagram}>
                <img src="src/assets/img/Group%20402.png" alt=""/>
                ARSAAM
            </div>
        </div>
    </div>
}
