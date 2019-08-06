import React from "react";
import { Card } from "react-bootstrap";
import StoryButton from "./Button";
import { Link } from "react-router-dom";
import "./Card.css";
//import StoryInfo from "./Info.js";

class StoryCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.src} alt="thumbnail" />
        <Link to={`/info/${this.props.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M15.5 1A14.5 14.5 0 1 0 30 15.5 14.517 14.517 0 0 0 15.5 1zm0 28A13.5 13.5 0 1 1 29 15.5 13.515 13.515 0 0 1 15.5 29zm1.5-6h-3v-1h1V11h1v11h1zM15.5 8.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1zM16 12h-2v-1h2z" />
          </svg>
          Some Analytics
        </Link>
        <Card.Body>
          <div>
            <Card.Title
              id={this.props.id}
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
