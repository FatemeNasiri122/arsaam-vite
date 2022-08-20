import classes from "../styles/Content/ShoppingCart.module.scss";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import minus from "/src/assets/img/icons/minus.svg"
import plus from "/src/assets/img/icons/plus.svg"
import trash from "/src/assets/img/icons/trash.svg"
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
           <Grid container sx={{display: 'flex',alignItems: 'center' , borderTop: '1px solid #BFBFBF', borderBottom: '1px solid #D9D9D9', padding:'21px 0px',}}>
               <Grid item xs={4} sm={1}>
                   <img className={classes.image} src={data.img} alt=""/>
               </Grid>
               <Grid item xs={8} sm={3} >
                   <a href=''><strong>{data.name}</strong></a>
                   <p>code: {data.code}</p>
                   <p>color: {data.colors[0] === "#E8231D" ? 'red': data.colors[0]}</p>
                   <p>size: {data.size[5]}</p>
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
               <Grid item xs={12} sm={4} sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center'}} paddingTop={1}>
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
                   <img src={trash} alt="" className={classes.trash}/>
               </Grid>
           </Grid>
    );
};
