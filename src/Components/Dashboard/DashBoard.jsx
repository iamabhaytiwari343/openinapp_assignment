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
                        <h2>Activities</h2>
                        <p>May-June 2021</p>
                        <BarChart guestData={guestData} userData={userData} className='chartstyles-bar' options={'responsive: true'} />
                    </div>
                    <div className="additionalcomponentContainer">
                        <div className="piechartcomponentContainer">
                            <h3>Top Products</h3>
                            <p>May-June 2021</p>
                            <div className="containerforchartPIe">
                                <DonutChart />
                                <div className="listitem">
                                    <ul>
                                        <li>Basic Tees <br /> 55%</li>
                                        <li>Custom Short Pants <br /> 31%</li>
                                        <li>Super Hoodies <br /> 14%</li>
                                    </ul>
                                </div>
                            </div>

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