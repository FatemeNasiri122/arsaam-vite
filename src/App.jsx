import React from "react";
import Routes from './routes.jsx';
import "../src/styles/Layout/index.scss";
import "../src/assets/font/font.css"
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <React.Suspense>
                <Routes/>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App
