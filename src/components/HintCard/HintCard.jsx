import React, { useState } from 'react';
import './HintCard.css';
import Background from '../../assets/images/hint.png';

const Card = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleOkClick = () => {
        setIsVisible(false);
    };

    const cardContainerStyle = {
        display: isVisible ? 'block' : 'none', // Set display to 'none' when not visible
    };

    const cardStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '30px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '5px solid #E9FF4A',
        boxShadow: isVisible ? '0 0 10px #E9FF4A' : 'none',
    };

    const imgStyle = {
        height: '105%',
        objectFit: 'cover',
    };

    return (
        <div className="cardContainer" style={cardContainerStyle}>
            {isVisible && (
                <div style={cardStyle}>
                    <button className="btnOk" onClick={handleOkClick}>
                        OK
                    </button>
                    <img style={imgStyle} src={Background} alt="hint" />
                </div>
            )}
        </div>
    );
};

export default Card;
