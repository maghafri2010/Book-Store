import React, { useState } from "react";

import Header from "../components/home/header/header";
import Footer from "../components/home/footer";
import CreateAccount from "../components/account/createAccount";
import Login from "../components/account/login";
import Reset from "../components/account/forgetPassword";

export default function Account()
{
    const [view, setView] = useState("login");
    
    let content;
    if (view === "create")
        content = <CreateAccount onSwitch={setView}/>
    else if (view === "reset")
        content = <Reset onSwitch={setView}/>
    else
        content = <Login onSwitch={setView}/>
        

    return (
        <>
            <Header />
            {content}
            <Footer />
        </>
    );
};