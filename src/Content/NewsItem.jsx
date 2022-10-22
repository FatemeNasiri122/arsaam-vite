import Grid from "@mui/material/Grid";
import classes from "../styles/Content/NewsItem.module.scss";

export default function NewsItem({data}) {

    return (
        <Grid container>
            <Grid item xs={12} display={{md: 'none'}}>
                <div className={classes.imageContainer}>
                    <img src={data.imgMobile} alt=""/>
                </div>
            </Grid>
            <Grid item md={3} display={{xs: 'none', md: 'block'}} sx={{width: '272px', paddingRight: '20px'}}>
                <div className={classes.imageContainer}>
                    <img src={data.imgMobile} alt=""/>
                </div>
            </Grid>
            <Grid item sm={12} md={9} sx={{paddingTop: '18px'}}>
                <div className={classes.NewsContent}>
                    <p><strong>{data.title}</strong></p>
                    <p className={classes.text}>{data.content}</p>
                </div>
                <div className={classes.NewsFooter}>
                    <span>{data.date}</span>
                    <a href="">VIEW MORE <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
                                              width="512" height="512">
                        <path
                            d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/>
                    </svg>
                    </a>
                </div>
            </Grid>
        </Grid>
    );
};