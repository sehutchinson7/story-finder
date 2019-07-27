import React from "react";
import { Button } from "reactstrap";
import "./Button.css";

class StoryButton extends React.Component {
  render() {
    //TODO Replace button color with #00bab5 for branding
    return (
      <Button
        href={this.props.href}
        tag="a"
        className="btn-btn-info"
        role="button"
        alt="story url"
        rel="noopener noreferrer"
        target="_blank"
      >
        {this.props.children}
      </Button>
    );
  }
}
export default StoryButton;
