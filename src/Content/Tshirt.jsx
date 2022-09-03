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
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/></svg>
                    </div>
                    <div className={classes.sizes}>
                            {data.size.map((s , i) =>{
                                return <div className={classes.size} key={i}>{s}</div>
                            })}
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.colorContainer}>
                    {data.colors.map((color) =>{
                         if(color === "blackAndWhite")
                             return <a href='' className={classes.circle} style={{background: "linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)"}}></a>
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

