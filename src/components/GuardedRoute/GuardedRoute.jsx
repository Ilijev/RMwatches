import React from 'react';
import {Route, useNavigate} from "react-router-dom";

const GuardedRoute = ({component: Component, auth, ...rest}) => {
    const nav = useNavigate();

    return (
        <Route {...rest} render={(props) => (
            auth === true ? <Component {...props} /> : nav("/")
        )}/>
    )
}

export default GuardedRoute;