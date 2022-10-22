import React from 'react';
import {Container, Grid} from '@material-ui/core';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {

    return (
        <div>
            {/*<Container maxWidth="lg">*/}
            <Header/>
            {/*<div style={{minHeight: '80vh'}}>*/}
            <React.Suspense fallback={null}>
                <Outlet/>
            </React.Suspense>
            {/*</div>*/}
            {/*</Container>*/}
            <Footer/>
        </div>
    );
}
