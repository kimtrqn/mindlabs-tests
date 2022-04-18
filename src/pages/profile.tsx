import React from 'react';
import { useAppSelector } from '../redux/store';

const Profile: React.FC<any> = () => {

    const {user} = useAppSelector((state) => state.session)

    return (
        <div>
            {user.email}
        </div>
    )
};

export default Profile;


