import React from 'react';
import '../stylesheets/ main.scss';
import MainImage from '../images/main-background.png';


const Main: React.FC<any> = () => {

return (
    <div className="main">
        <div className="main-white">
            <div className="main-image">
                <img src={MainImage} alt="MainImage" />
            </div>
            <div className="main-quote-container">
                <div className="main-inner-container">
                    <div className="quote">
                        “Aspire to Inspire before you Expire”
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;