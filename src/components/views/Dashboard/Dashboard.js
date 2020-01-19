import React from "react";
import OverdueTasks from "./OverdueTasks";
import UpcomingTasks from "./UpcomingTasks";
import Projects from "./Projects";
import Queries from "./Queries";
import Updates from "./Updates";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <OverdueTasks />
        <UpcomingTasks />
        <Projects />
        <Queries />
        <Updates />
      </div>
    </div>
  );
};

export default Dashboard;
