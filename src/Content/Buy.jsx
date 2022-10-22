import classes from "../styles/Content/Buy.module.scss";
import status from "../styles/Content/Status.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TshirtsData from "../data/Tshirt.json"
import image1 from "/src/assets/img/FABC-MTK5624-PJY002N_13_sf.jpg"
import image2 from "/src/assets/img/FABC-MTK5624-PJY002N_13_mf.jpg"
import image3 from "/src/assets/img/FABC-MTK5624-PJY002N_13_mb.jpg"
import image4 from "/src/assets/img/FABC-MTK5624-PJY002N_13_lf.jpg"
import image5 from "/src/assets/img/FABC-MTK5624-PJY002N_13_d1.jpg"
import React, {useRef, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {Box, Collapse, Select} from "@material-ui/core";
import Tshirt from "./Tshirt";
import BuySlider from "./BuySlider";
import LinkButton from "./button/LinkButton";
import SelectItems from "./select/SelectItems";

export default function Buy() {
    const testRef1 = useRef(null);
    const testRef2 = useRef(null);
    const testRef3 = useRef(null);
    const testRef4 = useRef(null);
    const testRef5 = useRef(null);
    const scrollToElement = () => testRef.current.scrollIntoView();

    const [size, setSize] = useState("");
    const [plus1, setPlus1] = useState(false);
    const [plus2, setPlus2] = useState(false);
    const [plus3, setPlus3] = useState(false);
    const [plus4, setPlus4] = useState(false);

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className={containerClass.container}>
            <div className={status.statusContainer}>
                <p><span>Men / </span><span>clothing / </span>t-shirts</p>
            </div>
            <Grid container>
                <Grid item lg={1} sx={{display: {xs: "none", lg: "block"}}}>
                    <div className={classes.leftImgContainer}>
                        <div onClick={() => testRef1.current.scrollIntoView()} className={classes.imgContainer}>
                            <img src={image1} alt=""/>
                        </div>
                        <div onClick={scrollToElement} className={classes.imgContainer}>
                            <img onClick={() => testRef2.current.scrollIntoView()} src={image2} alt=""/>
                        </div>
                        <div onClick={scrollToElement} className={classes.imgContainer}>
                            <img onClick={() => testRef3.current.scrollIntoView()} src={image3} alt=""/>
                        </div>
                        <div onClick={scrollToElement} className={classes.imgContainer}>
                            <img onClick={() => testRef4.current.scrollIntoView()} src={image4} alt=""/>
                        </div>
                        <div onClick={scrollToElement} className={classes.imgContainer}>
                            <img onClick={() => testRef5.current.scrollIntoView()} src={image5} alt=""/>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} lg={7} sx={{display: {xs: "none", sm: "block"}}}>
                    <div className={classes.imgCenterContainer}>
                        <img ref={testRef1} src={image1} alt=""/>
                        <img ref={testRef2} src={image2} alt=""/>
                        <img ref={testRef3} src={image3} alt=""/>
                        <img ref={testRef4} src={image4} alt=""/>
                        <img ref={testRef5} src={image5} alt=""/>
                    </div>
                </Grid>
                <Grid item xs={12} sx={{display: {sm: "none"}}}>
                    <BuySlider/>
                </Grid>
                <Grid item sm={6} lg={4} paddingLeft={{sm: "20px"}}>
                    <div className={classes.topCard}>
                        <div className={classes.iconContainer}>
                            <Button startIcon={<ShareOutlinedIcon/>} sx={{
                                color: "black",
                                paddingLeft: "0",
                                font: 'normal normal normal 14px/17px Century Gothic'
                            }}>
                                share
                            </Button>
                            <Button startIcon={<StarBorderIcon/>}
                                    sx={{color: "black", font: 'normal normal normal 14px/17px Century Gothic'}}>
                                favorite
                            </Button>
                        </div>
                        <h2>{TshirtsData[0].name}</h2>
                        <p className={classes.code}>code: {TshirtsData[0].code}</p>
                        <p className={classes.price}>{TshirtsData[0].discount == !"0" ?
                            <strong>{TshirtsData[0].price}</strong> :
                            <span><strong>{TshirtsData[0].discount}</strong> <strike>{TshirtsData[0].price}</strike>
                            <span className={classes.goldBox}>-10%</span></span>
                        }</p>
                    </div>
                    <div className={classes.colorContainer}>
                        <p><strong>color</strong><span>: red</span></p>
                        <div className={classes.circleContainer}>
                            {TshirtsData[0].colors.map((color) => {
                                if (color === "blackAndWhite")
                                    return <a href='' className={classes.circle}
                                              style={{background: "linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)"}}></a>
                                else
                                    return <a href='' className={classes.circle} style={{backgroundColor: color}}></a>
                            })}
                        </div>
                    </div>
                    <div className={classes.sizeContainer}>
                        <p><strong>size</strong></p>
                        <div className={classes.selectContainer}>
                            <div className={classes.selectSize}>
                                <SelectItems initialSelect='Select Size' label='select'/>
                            </div>
                            <a href="">size guide</a>
                        </div>

                        <LinkButton width='100%' height='50px' color='#fff' background='#000' linkText="add to cart"
                                    marginTop='40px' marginButtom='10px'/>

                    </div>
                    <div className={classes.questionContainer}>
                        <div className={classes.question} onClick={() => setPlus1((prev) => !prev)}>
                            <strong>PRODUCT DETAILS</strong>
                            {plus1 ? <RemoveIcon sx={{cursor: "pointer"}}/> : <AddIcon sx={{cursor: "pointer"}}/>}
                        </div>
                        <Collapse orientation="horizontal" in={plus1}>
                            <p>See how this cotton jersey crewneck T-shirt gets shaken up. The garment features the
                                iconic Skull with Brand and rhinestone applications. A saffian leather patch bearing the
                                PP Hexagon is sewn on the yoke. Two needle stitching hems.</p>
                        </Collapse>
                    </div>
                    <div className={classes.questionContainer}>
                        <div className={classes.question} onClick={() => setPlus2((prev) => !prev)}>
                            <strong>COMPOSITION</strong>
                            {plus2 ? <RemoveIcon sx={{cursor: "pointer"}}/> : <AddIcon sx={{cursor: "pointer"}}/>}
                        </div>
                        <Collapse orientation="horizontal" in={plus2}>
                            <p>FABRIC #1: 100% COTTON | TRIMMING #1: 100% GLASS FIBRE</p>
                        </Collapse>
                    </div>
                    <div className={classes.questionContainer}>
                        <div className={classes.question} onClick={() => setPlus3((prev) => !prev)}>
                            <strong>DELIVERY & RETURNS</strong>
                            {plus3 ? <RemoveIcon sx={{cursor: "pointer"}}/> : <AddIcon sx={{cursor: "pointer"}}/>}
                        </div>
                        <Collapse orientation="horizontal" in={plus3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus eum
                                facere hic ipsum laudantium placeat, quam quia quisquam quo quod reprehenderit suscipit.
                                Atque corporis magnam nobis porro praesentium?</p>
                        </Collapse>
                    </div>
                    <div className={classes.questionContainer}>
                        <div className={classes.question} onClick={() => setPlus4((prev) => !prev)}>
                            <strong>AUTHENTICITY</strong>
                            {plus4 ? <RemoveIcon sx={{cursor: "pointer"}}/> : <AddIcon sx={{cursor: "pointer"}}/>}
                        </div>
                        <Collapse orientation="horizontal" in={plus4}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus eum
                                facere hic ipsum laudantium placeat, quam quia quisquam quo quod reprehenderit suscipit.
                                Atque corporis magnam nobis porro praesentium?</p>
                        </Collapse>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.related}>
                        <h2>related products</h2>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom='50px'>
                {
                    TshirtsData.map((tshirt, i) => {
                        if (i < 4) {
                            return <Tshirt data={tshirt} key={tshirt.id}/>
                        }
                    })
                }
            </Grid>

        </div>
    );
};
