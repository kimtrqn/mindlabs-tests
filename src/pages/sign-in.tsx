import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

import { loginUser } from '../redux/session/action';
import { ISessions } from '../redux/session/interface';

import '../stylesheets/sign-in.scss';
import PurpleRobot from '../images/purple-robot.png';
import db from '../db.json';

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
        //json server
        // const usersList= await axios.get('../db.json');
        // console.log(usersList)
        //db for aws setup
        const findUser =  db.users.find(
            // user.email === email && user.password === password
            (user:any) => {
                if (user.email !== email.toLowerCase() || user.password !== password) {
                    setError(true);
                    setErrorMsg('Invalid Credentials')
                } 
                return user.email === email.toLowerCase() && user.password === password;
            }
        )

        if (findUser) {
            try {
                localStorage.setItem('token', 'authenticated')
                dispatch<ISessions>(loginUser(findUser));
                navigate('/profile')

            } catch (error: any) {
                console.log(error);
            }
        }
    }

    return (
        <div className="sign-in">
            <div className="pink-container">
                <div className="image-container">
                    <img src={PurpleRobot} alt="" />
                </div>
                <div className="form-container">
                    <div className="session-error">
                        {error && (
                            <h2>{errorMsg}</h2>
                        )}
                    </div>
                    <form action="">
                        <input
                        id="username"
                        className="input"
                        onChange={updateEmail}
                        placeholder="Email"
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
                        <div className='submit-right'>

                            <input
                            className="input submit float-right"
                            onClick={handleSubmit}
                            type="submit"
                            value={'Log In'}
                            />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )



};

export default Session;



    // return(
    //     <div className='container'>
    //         <div className="sign-in">
    //             <div className='container d-flex justify-content-center'>
    //                 <img src={PurpleRobot} className='purple-robot' alt="" />
    //             </div>
    //             <div className='container'>
    //                 <div className='form-container '>
    //                     <div className='form-title'>
    //                         <h3>Sign In</h3>
    //                     </div>

    
                        



    //                 </div>
    //             </div>
    //         </div>

        
    //     </div>
    // )