import React from "react";
//import { Navbar } from "react-bootstrap/Navbar";
import { Navbar } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            src="story-maps-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ArcGIS StoryMaps logo"
          />
          {"ArcGIS StoryMaps"}
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navigation;
