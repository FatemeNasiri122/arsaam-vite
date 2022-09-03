import classes from "../styles/Content/AboutUS.module.scss";
import status from "../styles/Content/Status.module.scss";
import images from "/src/assets/img/Repeat Grid 2.png"
import instagram from "/src/assets/img/Group 402.png"
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import containerClass from "../styles/Content/Container.module.scss";
import React from "react";

export default function  AboutUS  () {

    return (
        <>
            <div className={containerClass.container}>
                <div className={status.statusContainer}>
                    <p><span>Home / </span>ABOUT ARSAAM</p>
                </div>
            </div>
                <div className={classes.AboutUSContainer}>

                    <Fade up>
                        <h1>ABOUT ARSAAM</h1>
                        <div className={classes.imgContainer}>
                        </div>
                        <div className={classes.content}>
                            <p>Lorem Epsom or outline is called an experimental and meaningless text in the printing, page layout and graphic design industry. The graphic designer uses this text as an element of the composition to fill the page and provide the initial appearance and overall design of the order, to graphically indicate the type and size of the font and the appearance of the text. Usually, graphic designers use trial and meaningless texts for page layout, just to show their client or business owner how the designed or paged page looks after the text is placed in it, and how the fonts and sizes are considered. has been taken Since designers are generally not the authors of the text and do not have the duty to respect the copyright of the texts, and at the same time, their work is somehow dependent on the text, they use fake contents to arrange their graphic pages to complete the design and layout stage.</p>
                        </div>
                    </Fade>
                    <LightSpeed left>
                        <h2>FOLLOW US ON INSTAGRAM</h2>
                        <div className={classes.imagesContainer}>
                            <img src={images} alt=""/>
                        </div>
                        <a href='#' className={classes.instagramLogoContainer}>
                            <img src={instagram} alt=""/>
                            <span>ARSAAM</span>
                        </a>
                    </LightSpeed>
                </div>
        </>
    );
};
