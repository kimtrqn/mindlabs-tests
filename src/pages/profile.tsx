import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../redux/store';

import Logo from '../images/class-training.svg';

const Profile: React.FC<any> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state.session);

    return (
        <div>
            <div>

            {user.email}
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>

            </div>
            
        </div>
    )
};

export default Profile;


