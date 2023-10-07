import React from 'react';
import "./css/sidebar.css";
const Sidebar = () => {
    return (
        <div className='sidebarcontainer'>
            <h1 className="dashtitle">Board.</h1>
            <div className="menucontainer">
                <div className="itemcontainermenu">Dashboard</div>
            </div>
            <div className="menucontainer">
                <div className="itemcontainermenu">Transactions</div>
            </div>
            <div className="menucontainer">
                <div className="itemcontainermenu">Schedules</div>
            </div>
            <div className="menucontainer">
                <div className="itemcontainermenu">Users</div>
            </div>
            <div className="menucontainer">
                <div className="itemcontainermenu">Settings</div>
            </div>
            <div className='bottomcontainer'>
                <p className='help'>Help</p>
                <p className='contact'>Contact Us</p>
            </div>
        </div>
    )
}

export default Sidebar