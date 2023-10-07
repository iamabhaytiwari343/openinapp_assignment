import React from 'react';
import Sidebar from './Sidebar';
import "./css/board.css"
// import Main from './Main';
const Board = () => {
  return (
    <>
      <div className="pagecontent">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="main">
          {/* <Main className="navigationmenu" /> */}
        </div>
      </div>

    </>
  )
}

export default Board