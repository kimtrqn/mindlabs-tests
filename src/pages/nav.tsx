import React from 'react';
import { useLocation, useNavigate  } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { logoutUser } from '../redux/session/action';

import Logo from '../images/logo-mobile.svg';
import '../stylesheets/navbar.scss';

const Nav: React.FC<any> = ({ isAuthenticated }) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser());
        navigate('/')
    }

    return (
        <nav id='nav' className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <a id='mind-lab' href="/">
                        <img className='logo-img' src={Logo} alt="" />
                        <div>MindLabs Test</div>
                    </a>
                </div>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto " >
                        {isAuthenticated ? 
(                            location.pathname === '/profile' ?
                                <span onClick={logout} id='nav-link' className="nav-item nav-link pt-5 ">Logout</span> 
                                :
                                <a href="/profile" id='nav-link' className="nav-item nav-link pt-5">Profile</a>)
                            :
                            <a href="/signin" id='nav-link' className="nav-item nav-link pt-5">Login</a>
                        }
                    </div>
                
                </div>
            </div>
        </nav>
    )
};

export default Nav;


