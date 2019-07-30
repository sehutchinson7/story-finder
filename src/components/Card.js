import React from "react";
import { Card, Button } from "react-bootstrap";
import StoryButton from "./Button";
// import { Card, CardImg, CardTitle, CardSubtitle, Button } from "reactstrap";
// import StoryButton from "./Button.js";

// class StoryCard extends React.Component {
//   render() {
//     return (
//       <Card>
//         <CardTitle>Story Title</CardTitle>
//         <CardSubtitle>Story Summary</CardSubtitle>
//         <CardImg top width="100%" src={this.props.src} alt="thumbnail">
//           {this.props.children}
//         </CardImg>
//         <Button>Hello</Button>
//       </Card>
//     );
//   }
// }

// export default StoryCard;
class StoryCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {" "}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          {StoryButton}
        </Card.Body>
      </Card>
    );
  }
}

export default StoryCard;
