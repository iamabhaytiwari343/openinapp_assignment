import React from 'react'
import "./customStylesheet.css";
import Sidebar from './Sidebar';
import icon from "./utils/icon.png";
import Card from './utils/Cards';
import Navbar from './utils/Navbar';
import BarChart from './utils/BarChart';
import DonutChart from './utils/DonutChart';
import { FaUserPlus } from 'react-icons/fa';

const DashBoard = () => {
    const guestData = [400, 450, 300, 350]; // Replace with your guest data
    const userData = [500, 350, 200, 400];
    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="mainContentContainer">
                    <div className="navbarContainer">
                        <Navbar />
                    </div>
                    <div className="statsCardContainer">
                        <div className="cards">
                            <Card icon={icon} vari="Total Revenue" totalRevenue="2129430" percentageChange="2.5" />
                            <Card icon={icon} vari="Total Transaction" totalRevenue="1520" percentageChange="1.7" />
                            <Card icon={icon} vari="Total Likes" totalRevenue="9721" percentageChange="1.4" />
                            <Card icon={icon} vari="Total Users" totalRevenue="9721" percentageChange="4.2" />
                        </div>
                    </div>
                    <div className="barChartContainer">
                        <BarChart guestData={guestData} userData={userData} className='chartstyles-bar' options={'responsive: true'} />
                    </div>
                    <div className="additionalcomponentContainer">
                        <div className="piechartcomponentContainer">
                            <DonutChart />
                        </div>
                        <div className="addProfileContainer">
                            <div className="add-profile-card">
                                <div className="logo">
                                    <FaUserPlus className="icon" />
                                </div>
                                <div className="text">Add Profile</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard