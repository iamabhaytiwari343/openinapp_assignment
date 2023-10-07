import React from 'react';
import Sidebar from './Sidebar';
import "./css/board.css"
import Navbar from './Navbar';
const Board = () => {
  return (
    <>
      <div className="pagecontent">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="main">
            <Navbar />
        </div>
      </div>

    </>
  )
}

export default Board