import React from 'react';
import '../stylesheets/ main.scss';

import Logo from '../images/class-training.svg';

const Main: React.FC<any> = () => {

    return (
        <div className="main-container">
            <div id="main ">
                <div id='top-container' className="container m-5 pt-5">
                    <div className='quote pt-3'>
                        “Aspire to Inspire before you Expire”
                    </div>
                    <div className='m-5 p-5 d-flex justify-content-center'>
                        <img src={Logo} className='img-fluid' alt="" />
                    </div>
                    <div className='second-quote mt-5'>
                        <p m-5 p-5>
                        “If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where their ideas can connect.“

                        </p>
                    </div>

                </div>
            </div>

            <div id='box-wrapper'>
                <div id="box">
                    <div className="poly"></div>
                </div>
            </div>
        </div>
    )
};

export default Main;