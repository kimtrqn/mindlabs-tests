import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { loginUser } from '../redux/session/action';
import { ISessions } from '../redux/session/interface';

const Session: React.FC<any> = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ error, setError ] = useState<boolean>(false);
    const [ errorMsg, setErrorMsg ] = useState<string>('');

    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const usersList= await axios.get('http://localhost:5000/users');
        const findUser = await usersList.data.find(
            // user.email === email && user.password === password
            (user:any) => {
                if (user.email !== email || user.password !== password) {
                    setError(true);
                    setErrorMsg('Invalid Credentials')
                } 

                return user.email === email && user.password === password;
            }
        )

        if (findUser) {
            try {
                localStorage.setItem('token', 'authenticated')
                console.log(localStorage);
                dispatch<ISessions>(loginUser(findUser));
                navigate('/profile')

            } catch (error: any) {
                console.log(error);
            }
        }
    }

    return(
        <div>
            <div>
                {error && (
                    <div>{errorMsg}</div>
                )}
            </div>
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
        </div>
    )

};

export default Session;