import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
    
	const { autenticado } = useSelector((state) => state.login);

    console.log('aasuuu '+autenticado);

    if (autenticado) {
        return <Route path={props.path} component={props.component} />;
    } else {
        return <Redirect to="/login" />;
    }
	
};

export default PrivateRoute;