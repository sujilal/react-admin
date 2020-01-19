import React, { Fragment } from "react";
import NavBar from "./components/layouts/NavBar";
import Content from "./components/views/Content";
import "./App.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Content />
    </Fragment>
  );
}

export default App;
