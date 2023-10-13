import React from 'react'
import "./customStylesheet.css";
import Sidebar from './Sidebar';
import icon from "./utils/icon.png";
import Card from './utils/Cards';
const DashBoard = () => {
    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="mainContentContainer">
                    <div className="navbarContainer">
                        NAVBAR
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
                        barChartContainer
                    </div>
                    <div className="additionalcomponentContainer">
                        <div className="piechartcomponentContainer">
                            piechartcontainer
                        </div>
                        <div className="addProfileContainer">
                            addprofile
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard