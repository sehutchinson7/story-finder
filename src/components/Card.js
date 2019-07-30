import React from "react";
import { Card } from "react-bootstrap";
import StoryButton from "./Button";

class StoryCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.src} alt="thumbnail" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <p>{this.props.owner}</p>
          <Card.Text>{this.props.snippet}</Card.Text>
          <StoryButton href={this.props.href}>Read story</StoryButton>
        </Card.Body>
      </Card>
    );
  }
}

export default StoryCard;
