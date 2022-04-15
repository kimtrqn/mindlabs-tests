import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { loginUser } from '../redux/session/action';

const Session: React.FC<any> = () => {

    const dispatch = useDispatch();
    

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const usersList= await axios.get('http://localhost:5000/users');
        const findUser = await usersList.data.find(
            (user:any) => user.email === email && user.password === password);
        
        if (findUser) {
            try {
                dispatch(loginUser(findUser));
            } catch (error: any) {
                console.log(error);
            }
        }
    }
    return(
        <form action="">
            <input
            id="username"
            className="input"
            onChange={updateEmail}
            placeholder="Username"
            type="text"
            name="username"
            value={email}
            />

            <input
            id="password"
            className="input"
            onChange={updatePassword}
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            />

            <input
            className="input submit"
            onClick={handleSubmit}
            type="submit"
            value={'Log In'}
            />
        </form>
    )

};

export default Session;