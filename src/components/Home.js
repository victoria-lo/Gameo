import React, {useContext} from "react";
import "../App.css";
import {AuthContext} from "../Firebase/context";
import { Redirect} from "react-router-dom";

function Home() {

    const { user } = useContext(AuthContext);

    return (
        !!user ? (
            <Redirect to={{ pathname: "/trending" }} />
        ) : (
            <Redirect to={{ pathname: "/signin" }} />
        )
    );
}

export default Home;