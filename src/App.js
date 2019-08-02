import React, { Component } from "react";
//import StoryButton from "./components/Button.js";
import StoryCard from "./components/Card.js";
import Navigation from "./components/Navbar.js";
import StorySearch from "./components/Search.js";
//import { searchItems } from "@esri/arcgis-rest-portal";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  //https://esri.github.io/arcgis-rest-js/guides/node/
  //https://esri.github.io/arcgis-rest-js/api/portal/searchItems/

  componentDidMount() {
    const url = `https://www.arcgis.com/sharing/rest/search?q=type%3Astorymap%20AND%20typekeywords%3A(smstatuspublished)%20AND%20orgid%3A(NOT(dGkWQRTbdsLW3GnN%20AND%204E2kXnaVf5dNC6X0%20AND%20nzS0F0zdNLvs7nc8))&num=100&f=pjson`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          console.log(data);
          this.setState({
            isLoaded: true,
            current: data,
            items: data.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items);
      return (
        <div className="App">
          <Navigation />
          <h1>Story Gallery</h1>
          <StorySearch />
          <div className="grid-container">
            {items.map(item => (
              <StoryCard
                key={item.id}
                src={`https://www.arcgis.com/sharing/rest/content/items/${
                  item.id
                }/info/${item.thumbnail}`}
                title={item.title}
                owner={item.owner}
                snippet={item.snippet}
                href={item.url}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;

{
  /* <StoryButton href={item.url}>Read story</StoryButton> */
}
{
  /* <div dangerouslySetInnerHTML={{ __html: item.snippet }} /> */
}
