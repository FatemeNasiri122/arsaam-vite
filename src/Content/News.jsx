import classes from "../styles/Content/News.module.scss";
import containerClass from "../styles/Content/Container.module.scss";
import NewsItem from "./NewsItem";
import NewsData from "/src/data/News.json"
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import Pagination from "./Pagination";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { makeStyles } from "@material-ui/core/styles";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const useOutlinedInputStyles = makeStyles({
    root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            height: '45px',
            borderRadius: "0",
        },
        "& .MuiInputBase-input": {
            padding: '10px',
            fontSize: '12px',
        },

    }
});
const textFieldStyle= {
    '& label': {
        color: '#808080',
        fontSize: '12px',

    },
    '& label.Mui-focused': {
        color: 'black',
        fontSize: '16px'
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: "black",
            borderRadius: "0",

        }
    },
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {
            borderRadius: "0",
            height: "45px",
            position: 'absolute',
            top: '0'
        }
    }
}

export default function  News  () {
    const outlinedInputStyles = useOutlinedInputStyles();

    const [age, setAge] = React.useState('');

    const [validSearch,setValidSearch] = useState(true)

    const [values, setValues] = useState({
        search: '',
        showCalendarFrom: '',
        showCalendarTo: '',
        CalendarFrom: '',
        CalendarTo: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    

    const handleMouseDownCalendar = (event) => {
        event.preventDefault();
    };


    const handleSubmit = (e) =>{
        e.preventDefault()
        const {search} = values

        if (search === ''){
            setValidSearch(false)
        }else {
            setValidSearch(true)
        }
    }

    return (
            <div className={containerClass.container}>
                <div className={classes.statusContainer}>
                    <p><span>Home / </span>News</p>
                </div>
                <h1>NEWS</h1>
                <form action="">
                    <Grid container sx={{marginY: '10px'}}>
                        <Grid item xs={12} md={3} paddingRight={{md: '20px'}}>
                            <TextField
                                value={age}
                                select
                                onChange={handleChange}

                                fullWidth
                                label='Category'
                                sx={textFieldStyle}
                            >
                                <MenuItem value="">
                                    <em style={{color: '#808080'}}>Category</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={2} paddingRight={{md: '20px'}} marginTop={{xs: '0', md : '4px'}}>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                marginTop={{xs: '10px', md : '5px'}}
                                id="Calendar"
                                value={values.CalendarFrom}
                                onChange={handleChange('CalendarFrom')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <CalendarMonthIcon
                                            aria-label="toggle Calendar visibility"
                                            onClick={() =>handleChange('showCalendarFrom')}
                                            onMouseDown={handleMouseDownCalendar}
                                            edge="end"
                                        >
                                            {values.showCalendarFrom ? <VisibilityOff /> : <Visibility />}
                                        </CalendarMonthIcon>
                                    </InputAdornment>
                                }
                                // error={validCalendar ? false: true}
                                placeholder='From'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={2} paddingRight={{md: '20px'}} marginTop={{xs: '15px', md : '4px'}}>
                            <OutlinedInput
                                classes={outlinedInputStyles}
                                id="Calendar"
                                placeholder='To'
                                value={values.CalendarTo}
                                onChange={handleChange('CalendarTo')}
                                variant="outlined"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <CalendarMonthIcon
                                            aria-label="toggle Calendar visibility"
                                            onClick={() =>handleChange('showCalendarTo')}
                                            onMouseDown={handleMouseDownCalendar}
                                            edge="end"
                                        >
                                            {values.showCalendarTo ? <VisibilityOff /> : <Visibility />}
                                        </CalendarMonthIcon>
                                    </InputAdornment>
                                }
                                // error={validCalendar ? false: true}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={4} paddingRight={{md: '20px'}} marginTop={{xs: '10px', md : '0'}}>
                            <TextField
                                id="search"
                                label="Search News"
                                value={values.search}
                                onChange={handleChange('search')}
                                fullWidth
                                sx={textFieldStyle}
                                error={validSearch ? false: true}
                                inputProps={{ style: { fontSize: 12 } }}
                            />
                            <p className={classes.error}>{validSearch ? '': 'please enter valid email'}</p>
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <a href="" className={classes.links} onClick={handleSubmit}>SEARCH</a>
                        </Grid>
                    </Grid>

                </form>
                {
                    NewsData.map((data) =>{
                        return <NewsItem data={data} key={data.id} />
                    })
                }
                <Pagination />

            </div>

    );
};