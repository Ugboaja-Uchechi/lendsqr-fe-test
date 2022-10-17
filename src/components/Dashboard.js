import React from "react";
import Header from "../subComponents/Header";
import SideBar from "../subComponents/sideBar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex-container">
        <SideBar />
        <h1 style={{ textAlign: "center", width: "100%" }}>
          Welcome to LendSqr
        </h1>
      </div>
    </>
    
  )
}

export default Dashboard;