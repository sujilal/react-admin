import React from "react";
import Breadcrumb from "../layouts/Breadcrumb";
import Dashboard from "../views/Dashboard/Dashboard";

const Content = () => {
  return (
    <div>
      <section className="content-wrapper">
        <Breadcrumb />
        <Dashboard />
      </section>
    </div>
  );
};

export default Content;
