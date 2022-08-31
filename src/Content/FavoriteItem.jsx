import classes from "../styles/Content/FavoriteItem.module.scss";
import Grid from "@mui/material/Grid";
import trash from "/src/assets/img/icons/trash.svg"
import {useState} from "react";
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

export default function  FavoriteItem  ({data}) {

    const [numberPrice,setnumberPrice] = useState(Number(data.numberPrice))
    const [discount,setDiscount] = useState(data.discount)

    return (
           <Grid container sx={{borderTop: '1px solid #BFBFBF', borderBottom: '1px solid #D9D9D9', padding:'21px 0px'}}>
               <Grid item xs={4} sm={2} marginRight={{sm: '30px'}} display={{xs: 'flex',justifyContent: 'center',flexDirection: 'column',alignItems: 'center'}}>
                       <img className={classes.image} src={data.img} alt=""/>
               </Grid>
               <Grid item xs={8} sm={5} display={{xs: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
                   <a className={classes.link} href=''><strong>{data.name}</strong></a>
                   <div className={classes.text}>
                       <p>code: {data.code}</p>
                       <p>color: {data.colors[0] === "#E8231D" ? 'red': data.colors[0]}</p>
                       <p>size: {data.size[5]}</p>
                   </div>
               </Grid>
               <Grid item xs={4} display={{sm: 'none'}}></Grid>
               <Grid item xs={8} sm={3} display={{sm: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                   <p className={classes.price}>
                       <div>
                           <Typography display={{sm: 'none', xs:'inline'}} variant="p" component="span" >
                           price
                       </Typography>
                          <strong>€{numberPrice}</strong>
                       </div>
                       <div>
                           <Typography display={{sm: 'none', xs:'inline'}} variant="p" component="span" >
                           discount
                       </Typography>
                    <span>
                        <strike>€ 1.200,00</strike>
                    <span className={classes.goldBox}>-10%</span>
                    </span>
                </div>
                   </p>
               </Grid>
               <Grid item xs={12} sm={1} display={{sm: 'flex',alignItems: 'center', xs: 'flex',justifyContent: 'center'}} paddingTop={1}>
                   <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="24" fill="#808080" cursor="pointer"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
               </Grid>
           </Grid>
    );
};
