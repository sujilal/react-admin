import React from "react";
import logo from "./logo.png";
import profile from "./profile.png";
import { Button } from "antd";

const NavBar = () => {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="demo">
          <img className="img-fluid" src={logo} alt="Profile" />
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Button>Dashboard</Button>
            </li>
            <li className="nav-item">
              <Button>Other</Button>
            </li>
          </ul>
          {/* SEARCH FORM */}
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <li className="nav-item ">
              <span className="nav-link">
                <i class="fas fa-calendar-alt"></i>
                <span className="date">07-Nov-2019</span>
              </span>
            </li>
            {/* Notifications Dropdown Menu */}
            <li className="nav-item ">
              <button type="button" className="btn bg-blue fs-it-btn">
                <i className="fa fa-clock" aria-hidden="true" />
                <span className="fs-it-btn-vertical-line" />
                05:32
              </button>
            </li>
            <li className="nav-item ">
              <span className="nav-link ">
                <i class="fas fa-bell notification"></i>
              </span>
            </li>

            <li className="nav-item ">
              <span className="image">
                <img src={profile} className="user-img" alt="User" />
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* /.navbar */}
    </div>
  );
};

export default NavBar;
