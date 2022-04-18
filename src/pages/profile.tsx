import React from 'react';
import { useAppSelector } from '../redux/store';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { logoutUser } from '../redux/session/action';

const Profile: React.FC<any> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useAppSelector((state) => state.session);

    const logout = () => {
        dispatch(logoutUser());
        navigate('/signin')
    }

    return (
        <div>
            <div>

            {user.email}
            </div>

            <div>

            <button onClick={logout}>logout</button>
            </div>
            
        </div>
    )
};

export default Profile;


