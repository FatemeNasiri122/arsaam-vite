import classes from '../styles/Content/Tshirts.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TshirtsData from '../data/Tshirt.json'
import Tshirt from "./Tshirt";
import { FiChevronDown } from "react-icons/fi";
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import {useState} from "react";

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});
export default function  Tshirts  () {
    const [checked, setChecked] = useState(false);
    const { items } = usePagination({
        count: 10,
    });
    console.log(TshirtsData)
        return (
            <Container>
                <div className={classes.statusContainer}>
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
                        <IconButton aria-label="delete" sx={{color: 'black', fontSize: '12px'}}>
                           New In <CloseIcon sx={{fontSize: '18px', color: 'gray', paddingLeft: '5px'}}/>
                        </IconButton>
                        <IconButton aria-label="delete" sx={{color: 'black', fontSize: '12px'}}>
                            XXL <CloseIcon sx={{fontSize: '18px' , color: 'gray', paddingLeft: '5px'}}/>
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
                <nav className={classes.paginationContainer}>
                    <List>
                        {items.map(({ page, type, selected, ...item }, index) => {
                            let children = null;

                            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                children = '…';
                            } else if (type === 'page') {
                                children = (
                                    <button
                                        type="button"
                                        style={{
                                            fontWeight: selected ? 'bold' : undefined,
                                            border: 'none',
                                            outline: 'none',
                                            background: selected ? "linear-gradient(#EFE27C,#A6872D)" : 'transparent',
                                            color: selected ? 'white' : 'black',
                                            padding: "5px 10px",
                                            cursor: "pointer",
                                        }}
                                        {...item}
                                    >
                                        {page}
                                    </button>
                                );
                            } else {
                                children = (
                                    <button style={{
                                        border: 'none',
                                        outline: 'none',
                                        backgroundColor: 'transparent',
                                        padding: "5px 10px",
                                    }} type="button" {...item}>
                                        {type}
                                    </button>
                                );
                            }
                            return <li key={index}>{children}</li>;
                        })}
                    </List>
                </nav>
            </Container>
            
    );
};

