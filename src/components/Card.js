import React from "react";
import { Card } from "react-bootstrap";
import StoryButton from "./Button";
import "./Card.css";
import StoryInfo from "./Info.js";

class StoryCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.src} alt="thumbnail" />
        <StoryInfo />
        <Card.Body>
          <div>
            <Card.Title
              href={this.props.title}
              data-toogle="tooltip"
              data-placement="top"
              title={this.props.title}
              alt="story title"
            >
              {this.props.title}
            </Card.Title>
            <a
              href={`https://www.arcgis.com/home/user.html?user=${
                this.props.owner
              }`}
              tag="a"
              alt="view author profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              {this.props.owner}
            </a>
            <Card.Text>{this.props.snippet}</Card.Text>
          </div>
          <StoryButton href={this.props.href}>Read story</StoryButton>
        </Card.Body>
      </Card>
    );
  }
}

export default StoryCard;
