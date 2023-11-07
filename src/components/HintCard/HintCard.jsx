import React, { useState } from 'react';
import './HintCard.css';
import MobileBackground from '../../assets/images/mobileHint.png';
import DesktopBackground from '../../assets/images/hint.png';

const Card = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleOkClick = () => {
        setIsVisible(false);
        const cardContainer = document.querySelector('.cardContainer');
        cardContainer.style.display = 'none';
    };

    const cardStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '30px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#1e1e1e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '5px solid #E9FF4A',
        boxShadow: isVisible ? '0 0 10px #E9FF4A' : 'none',
        backgroundImage: `url(${window.innerWidth <= 1023 ? MobileBackground : DesktopBackground})`, // Change background image based on screen width
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="cardContainer">
            {isVisible && (
                <div style={cardStyle}>
                    <button className="btnOk" onClick={handleOkClick}>
                        OK
                    </button>
                </div>
            )}
        </div>
    );
};

export default Card;

