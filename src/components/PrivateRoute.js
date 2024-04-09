import React from 'react'
import {Navigate} from "react-router-dom"

const PrivateRoute = (props) => {

    let isVisible = props.isVisible;
    let children = props.children;

    if(isVisible){
        return children;
    }
    else{
      return <Navigate to="/login"/>
    }
}

export default PrivateRoute