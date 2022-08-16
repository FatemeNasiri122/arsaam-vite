import classes from '../styles/Content/Tshirt.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TshirtsData from '../data/Tshirt.json'
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function  Tshirt  ({data}) {
    const imgContainer ={
        width: "100%",
        backgroundImage: `url(${data.img})`,
        backgroundSize: "100% 100%",
        // backgroundPosition: "top center",
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
                        <div className={classes.size}>xs</div>
                        <div className={classes.size}>s</div>
                        <div className={classes.size}>m</div>
                        <div className={classes.size}>l</div>
                        <div className={classes.size}>xl</div>
                        <div className={classes.size}>2xl</div>
                        <div className={classes.size}>3xl</div>
                        <div className={classes.size}>4xl</div>
                        <div className={classes.size}>5xl</div>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.colorContainer}>
                    {data.colors.map((color) =>{
                         if(color === "blackAndWhite")
                             return <div className={classes.circle} style={{background: "linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)"}}></div>
                        else
                             return <div className={classes.circle} style={{backgroundColor: color}}></div>
                    })}
                </div>
                <p className={classes.name}>{data.name}</p>
                <p className={classes.price}>{data.discount ==! "0" ? <strong>{data.price}</strong> : <span>
                    <strong>{data.discount}</strong> <strike>{data.price}</strike>
                    <span className={classes.goldBox}>-10%</span>
                </span>}</p>
            </div>

        </Grid>

    );
};

