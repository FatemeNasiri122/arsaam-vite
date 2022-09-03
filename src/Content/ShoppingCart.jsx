import classes from "../styles/Content/ShoppingCart.module.scss";
import Grid from "@mui/material/Grid";
import minus from "/src/assets/img/icons/minus.svg"
import plus from "/src/assets/img/icons/plus.svg"
import {useState} from "react";
import Typography from '@mui/material/Typography';

export default function  Cart  ({data}) {
    const [counter,setCounter] = useState(1)
    const [price,setPrice] = useState(data.price)
    const [numberPrice,setnumberPrice] = useState(Number(data.numberPrice))
    const [discount,setDiscount] = useState(data.discount)
    
    const add = () => {
      setCounter((prev) => prev + 1)
      setnumberPrice((prev) => prev + Number(data.numberPrice))
      setDiscount((prev) => prev + Number(data.numberPrice))
    }
    const sub = () => {
      setCounter((prev) => {return (counter > 1 ? prev - 1 : prev) })
      setnumberPrice((prev) => {return (counter > 1 ? prev - Number(data.numberPrice) : prev) })
      setDiscount((prev) => {return (counter > 1 ? prev - Number(data.numberPrice) : prev) })
    }
    return (
           <Grid container sx={{alignItems: 'center'}}>
               <Grid item xs={4} display={{sm: 'none'}}>
                   <img className={classes.image} src={data.img} alt=""/>
               </Grid>
               <div className={classes.imgDesktop}>
                   <img className={classes.image} src={data.img} alt=""/>
               </div>
               <Grid item xs={8} sm={3} paddingLeft='20px'>
                   <a className={classes.link} href=''><strong>{data.name}</strong></a>
                   <div className={classes.text}>
                       <p>code: {data.code}</p>
                       <p>color: {data.colors[0] === "#E8231D" ? 'red': data.colors[0]}</p>
                       <p>size: {data.size[5]}</p>
                   </div>

               </Grid>
               <Grid item xs={4} display={{sm: 'none'}}></Grid>
               <Grid item xs={12} sm={3} display={{sm: 'flex',justifyContent: 'center'}}>
                   <p className={classes.price}>
                       <Typography display={{sm: 'none', xs:'inline'}} variant="p" component="span" >
                           price
                       </Typography>
                           {data.discount ==! "0" ? <strong>€{numberPrice}</strong> : <span>
                    <strong>{discount}</strong> <strike>{numberPrice}</strike>
                    <span className={classes.goldBox}>-10%</span>
                </span>}</p>
               </Grid>
               <Grid item xs={12} sm={3} sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center'}} paddingTop={1}>
                   <div className={classes.counterContainer}>
                       <Typography display={{sm: 'none', xs:'inline'}} variant="span" component="span" >
                           QTY
                       </Typography>
                       <div className={classes.counter}>
                           <img src={minus} alt="" onClick={sub}/>
                           <span>{counter}</span>
                           <img src={plus} alt="" onClick={add}/>
                       </div>
                   </div>

               </Grid>
               <Grid item xs={12} sm={1} sx={{display: 'flex',justifyContent: 'center'}} paddingTop={1}>
                   <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill='#808080' width="17" height="20"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" /><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>

               </Grid>
           </Grid>
    );
};
