import React from "react";
import { Card } from "react-bootstrap";
import StoryButton from "./Button";
import "./Card.css";

class StoryCard extends React.Component {
  render() {
    return (
      // <div className="grid-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.src} alt="thumbnail" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <p>{this.props.owner}</p>
          <Card.Text>{this.props.snippet}</Card.Text>
          <StoryButton href={this.props.href}>Read story</StoryButton>
        </Card.Body>
      </Card>
      // </div>
    );
  }
}

export default StoryCard;
