import classes from '../styles/Content/Men.module.scss';
import containerClass from "../styles/Content/Container.module.scss";
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';

export default function  Men  () {
    return(
        <>
            <div className={classes.men}>
                <div className={classes.topTitle}>
                    <p>new in fw/22</p>
                    <h1>men</h1>
                </div>
            </div>
            <div className={containerClass.container}>

                <Grid container spacing={2} marginBottom='50px'>
                    <Grid item xs={12}>
                        <Fade up>
                            <div className={classes.clothing}>
                                <div className={classes.mainTitle}>
                                    <h2>clothing</h2>
                                    <a>Discover More</a>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Fade up>
                            <div className={classes.sportswear}>
                                <div className={classes.mainTitle}>
                                    <h2>sportswear</h2>
                                    <a>Discover More</a>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Fade up>
                            <div className={classes.shoes}>
                                <div className={classes.mainTitle}>
                                    <h2>shoes</h2>
                                    <a>Discover More</a>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Fade up>
                            <div className={classes.tshirt}>
                                <div className={classes.mainTitle}>
                                    <h2>t-shirt</h2>
                                    <a>Discover More</a>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade up>
                            <div className={classes.outfit}>
                                <div className={classes.mainTitle}>
                                    <h2>outfit</h2>
                                    <a>Discover More</a>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade up>
                            <div className={classes.empty}>
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}

