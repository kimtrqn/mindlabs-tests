import React from 'react';
import { useAppSelector } from '../redux/store';
import '../stylesheets/profile.scss';

import profilePic from '../images/dummy-profile-pic.png';

const Profile: React.FC<any> = () => {

    const { user } = useAppSelector((state) => state.session);

    return (
            <div className="profile-container">
                <div className="profile">
                    <div className="profile-pic">
                            <img src={profilePic} alt="" />
                    </div>
                    <div className="profile-info">
                        <div className="info-detail">
                            <label>Name: </label>
                            <div>{user.firstName + ' ' + user.lastName}</div>
                        </div>
                        <div className="info-detail">
                            <label>Email: </label>
                            <div>{user.email}</div>
                        </div>

                    </div>
                </div>

            </div>
            
    )
};

export default Profile;


