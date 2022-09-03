import classes from '../styles/Content/Tshirts.module.scss';
import containerClass from "../styles/Content/Container.module.scss";
import status from "../styles/Content/Status.module.scss";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TshirtsData from '../data/Tshirt.json'
import Tshirt from "./Tshirt";
import { FiChevronDown } from "react-icons/fi";
import {useState} from "react";
import Pagination from "./Pagination";

export default function  Tshirts  () {
    const [checked, setChecked] = useState(false);

        return (
            <div className={containerClass.container}>
                <div className={status.statusContainer}>
                    <p><span>Men / </span><span>clothing / </span>t-shirts</p>
                </div>
                <div className={classes.category}>
                    <h2>t-shirts</h2>
                    <div className={classes.selectsContainer}>
                        <div className={classes.selectContainer}>
                            <div className={classes.select}><span>category</span> <FiChevronDown /></div>
                        </div>
                        <div className={classes.selectContainer}>
                            <div className={classes.select} onClick={() => setChecked((prev) => !prev)}><span>color</span> <FiChevronDown style={checked ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className={classes.chev}/>
                            </div>
                            <div className={classes.options} style={checked ? {display: "block"} : {display: "none"}}>
                                <input type="checkbox" name="check-box" value="check-box" id="white"/>
                                <label htmlFor="white">WHITE</label>
                                <input type="checkbox" name="check-box" value="check-box" id="black"/>
                                <label htmlFor="black">BLACK</label>
                                <input type="checkbox" name="check-box" value="check-box" id="red"/>
                                <label htmlFor="red">RED</label>
                                <input type="checkbox" name="check-box" value="check-box" id="blue"/>
                                <label htmlFor="blue">BLUE</label>
                                <input type="checkbox" name="check-box" value="check-box" id="green"/>
                                <label htmlFor="green">GREEN</label>
                                <input type="checkbox" name="check-box" value="check-box" id="yellow"/>
                                <label htmlFor="yellow">YELLOW</label>
                                <input type="checkbox" name="check-box" value="check-box" id="gray"/>
                                <label htmlFor="gray">GREY</label>
                            </div>
                        </div>
                        <div className={classes.selectContainer}>
                            <div className={classes.select}><span>size</span> <FiChevronDown /></div>
                        </div>
                        <div className={classes.selectContainer}>
                            <div className={classes.select}><span>sort by</span> <FiChevronDown /></div>
                        </div>

                    </div>
                </div>
                <div className={classes.clear}>
                    <div>
                        <IconButton aria-label="delete" sx={{color: '#808080', font: 'normal normal normal 12px/15px Century Gothic;'}}>
                           New In <CloseIcon sx={{ color: 'gray', paddingLeft: '5px'}}/>
                        </IconButton>
                        <IconButton aria-label="delete" sx={{color: '#808080', font: 'normal normal normal 12px/15px Century Gothic;'}}>
                            XXL <CloseIcon sx={{color: 'gray', paddingLeft: '5px'}}/>
                        </IconButton>
                    </div>
                    <button className={classes.btn}>clear all</button>
                </div>
                <Grid container spacing={2}>
                    {
                        TshirtsData.map((tshirt)=>{
                            return <Tshirt data={tshirt} key={tshirt.id}/>
                        })
                    }
                </Grid>

                <Pagination />
                <div className={classes.marginEndOfContent}></div>
            </div>
            
    );
};

