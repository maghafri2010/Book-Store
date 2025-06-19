import React from "react";

import Header from "../components/home/header/header";
import Footer from "../components/home/footer";
import CreateAccount from "../components/account/createAccount";
import Login from "../components/account/login";
import Reset from "../components/account/forgetPassword";

export default function Account()
{
    return (
        <>
            <Header />
            <Reset />
            
            <Footer />
        </>
    );
};