import classes from "../styles/Content/Cart.module.scss";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import image1 from "/src/assets/img/FABC-MTK5624-PJY002N_13_sf.jpg"


export default function  Cart  () {

    return (
        <Container>
            <div className={classes.statusContainer}>
                <p><span>Home / </span>Cart</p>
            </div>
            <Grid container>
                <Grid item xs={12}>
                    <h1>cart</h1>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam dicta dolor ducimus earum eum explicabo facilis hic, ipsa, iste iusto labore maiores molestiae nobis optio qui quia repellendus rerum.</div>
                </Grid>
            </Grid>
        </Container>
    );
};
