import classes from '../styles/Content/Tshirt.module.scss';
import Grid from '@mui/material/Grid';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function  Tshirt  ({data}) {
    const imgContainer ={
        width: "100%",
        backgroundImage: `url(${data.img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "386px"
    }

    return (
        <Grid item xs={12} sm={6} md={3}>
            <div className={classes.imgWrapper} style={imgContainer}>
                <div className={classes.imgHover}>
                    <div className={classes.star}>
                        <StarBorderIcon/>
                    </div>
                    <div className={classes.sizes}>
                            {data.size.map((s) =>{
                                return <div className={classes.size}>{s}</div>
                            })}
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.colorContainer}>
                    {data.colors.map((color) =>{
                         if(color === "blackAndWhite")
                             return <a href className={classes.circle} style={{background: "linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)"}}></a>
                        else
                             return <a href='' className={classes.circle} style={{backgroundColor: color}}></a>
                    })}
                </div>
                <a href='' className={classes.name}>{data.name}</a>
                <p className={classes.price}>{data.discount ==! "0" ? <strong>{data.price}</strong> : <span>
                    <strong>{data.discount}</strong> <strike>{data.price}</strike>
                    <span className={classes.goldBox}>-10%</span>
                </span>}</p>
            </div>

        </Grid>

    );
};

