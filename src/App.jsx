import React from "react";
import Routes from './routes.jsx';
import "../src/styles/Layout/index.scss";
import "../src/assets/font/font.css"
import {BrowserRouter} from "react-router-dom";
import {AccountProvider} from "./context/AccountContext";
import {FormProvider} from "./context/FormContext";

function App() {

    return (
        <FormProvider>
            <AccountProvider>
                <BrowserRouter>
                    <React.Suspense>
                        <Routes/>
                    </React.Suspense>
                </BrowserRouter>
            </AccountProvider>
        </FormProvider>
    )
}

export default App
