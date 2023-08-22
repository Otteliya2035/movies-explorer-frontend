import React from 'react';
import logo from "../../images/logo.svg"
import { useNavigate } from "react-router-dom";

const Logo = ({classname}) => {
    const navigate = useNavigate();

    return (
        <img onClick={() => {navigate('/')}} src={logo} alt="Логотип" className={classname}/>
    );
};

export default Logo;
