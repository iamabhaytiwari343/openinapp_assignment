import React from 'react'
import "./customStylesheet.css";
const DashBoard = () => {
    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebarContainer">
                    Sidebar
                </div>
                <div className="mainContentContainer">
                    <div className="navbarContainer">
                        NAVBAR
                    </div>
                    <div className="statsCardContainer">
                        Stats
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