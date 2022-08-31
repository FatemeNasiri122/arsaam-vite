import React from "react";
import Routes from './routes.jsx';
import "../src/styles/Layout/index.scss";
import "../src/assets/font/font.css"
import {BrowserRouter} from "react-router-dom";
import {AccountProvider} from "./context/AccountContext";

function App() {

    return (
        <AccountProvider>
            <BrowserRouter>
                <React.Suspense>
                    <Routes/>
                </React.Suspense>
            </BrowserRouter>
        </AccountProvider>

    )
}

export default App
