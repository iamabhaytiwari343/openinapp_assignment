import React from 'react';
import './Cards.css';


const Card = ({ icon, totalRevenue, percentageChange }) => {
    return (
        <div className="card">
            <div className="icon"><img src={icon} alt="Icon" /></div>
            <div className="info">
                <div className="header">Total Revenue</div>
                <div className="revenue">${totalRevenue}</div>
                <div className="percentage">+{percentageChange}% from last month</div>
            </div>
        </div>
    );
};

export default Card;
