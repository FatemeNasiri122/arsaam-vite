import classes from '../styles/Content/Pagination.module.scss';
import TshirtsData from '../data/Tshirt.json'
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import {useState} from "react";

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});
export default function  Pagination  () {
    const [checked, setChecked] = useState(false);
    const { items } = usePagination({
        count: 10,
    });
    console.log(TshirtsData)
        return (
            <nav className={classes.paginationContainer}>
                <List>
                    {items.map(({ page, type, selected, ...item }, index) => {
                        let children = null;

                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                            children = '…';
                        } else if (type === 'page') {
                            children = (
                                <button
                                    type="button"
                                    style={{
                                        fontWeight: selected ? 'bold' : undefined,
                                        border: 'none',
                                        outline: 'none',
                                        background: selected ? "linear-gradient(#EFE27C,#A6872D)" : 'transparent',
                                        color: selected ? 'white' : 'black',
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                    }}
                                    {...item}
                                >
                                    {page}
                                </button>
                            );
                        } else {
                            children = (
                                <button style={{
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'transparent',
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                }} type="button" {...item}>
                                    {type}
                                </button>
                            );
                        }
                        return <li key={index}>{children}</li>;
                    })}
                </List>
            </nav>
    );
};

