import React from "react";
import OverdueTasks from "./OverdueTasks";
import UpcomingTasks from "./UpcomingTasks";
import Projects from "./Projects";
import Queries from "./Queries";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <OverdueTasks />
        <UpcomingTasks />
        <Projects />
        <Queries />
      </div>
    </div>
  );
};

export default Dashboard;
