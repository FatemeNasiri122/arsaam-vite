import classes from "../styles/Content/AccountAddress.module.scss";
import Grid from "@mui/material/Grid";
import AddressInformation from "./AddressInformation";
import userAddress from "../data/userAddressInformation.json"
import {AnimatePresence, motion} from "framer-motion";

export default function AccountAddress({isMobileActive}) {
    return (
        <Grid item xs={12} md={8} display={isMobileActive && {xs: 'none', md: 'block'}} paddingLeft={{md: '20px'}}
              marginTop={'18px'}>
            <AnimatePresence>

                <motion.div initial={{y: -100}}
                            animate={{y: 1}}
                            exit={{opacity: 0}}>
                    <div className={classes.container}>
                        <div className={classes.addressTitle}>
                            <h2>ADDRESSES</h2>   <a className={classes.notActive} href="">
                            <svg className={classes.notActiveIcon} xmlns="http://www.w3.org/2000/svg" id="Outline"
                                 viewBox="0 0 24 24" width="14" height="14">
                                <path
                                    d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/>
                            </svg>
                            ADD NEW ADDRESS</a>
                        </div>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <AddressInformation data={userAddress[0].user.home} isActive={true}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <AddressInformation data={userAddress[0].user.work} isActive={false}/>
                            </Grid>
                        </Grid>
                    </div>
                </motion.div>
            </AnimatePresence>
        </Grid>

    );
};
