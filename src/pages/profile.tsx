import React from 'react';
import { useAppSelector } from '../redux/store';
import '../stylesheets/profile.scss';

const Profile: React.FC<any> = () => {

    const { user } = useAppSelector((state) => state.session);

    return (
        <div className='p-5 py-5 container d-flex justify-content-center'>
            <div className="profile">
                <h1>Welcome {user.firstName}</h1>
                <div>{user.email}</div>

            </div>
            
        </div>
    )
};

export default Profile;


