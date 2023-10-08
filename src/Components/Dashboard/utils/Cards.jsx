import React from 'react';
import './Cards.css';


const Card = ({ icon, vari, totalRevenue, percentageChange }) => {
    return (
        <div className="card">
            <div className="icon"><img src={icon} alt="Icon" /></div>
            <div className="info">
                <div className="header">{vari}</div>
                <div className="revenue">${totalRevenue}</div>
                <div className="percentage">+{percentageChange}%</div>
            </div>
        </div>
    );
};

export default Card;
