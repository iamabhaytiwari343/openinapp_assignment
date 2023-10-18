import React from 'react';
import "./sidebar.css";
import { FaHome, FaMoneyBill, FaCalendar, FaUsers, FaCog } from 'react-icons/fa'; // Importing Font Awesome icons

const Sidebar = () => {
    return (
        <div className='sidebarcontainer'>
            <h1 className="dashtitle">Board.</h1>
            <div className="menucontainer">
                <FaHome className="menuicon" />
                <div className="itemcontainermenu">Dashboard</div>
            </div>
            <div className="menucontainer">
                <FaMoneyBill className="menuicon" />
                <div className="itemcontainermenu">Transactions</div>
            </div>
            <div className="menucontainer">
                <FaCalendar className="menuicon" />
                <div className="itemcontainermenu">Schedules</div>
            </div>
            <div className="menucontainer">
                <FaUsers className="menuicon" />
                <div className="itemcontainermenu">Users</div>
            </div>
            <div className="menucontainer">
                <FaCog className="menuicon" />
                <div className="itemcontainermenu">Settings</div>
            </div>
            <div className='bottomcontainer'>
                <p className='help'>Help</p>
                <p className='contact'>Contact Us</p>
            </div>
        </div>
    )
}

export default Sidebar;
