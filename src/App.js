import React, { Component } from "react";
//import StoryButton from "./components/Button.js";
import StoryCard from "./components/Card.js";
import Navigation from "./components/Navbar.js";
import SearchBox from "./components/Search.js";
//import { searchItems } from "@esri/arcgis-rest-portal";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      query: ""
    };
  }

  handleSearchChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  //   handleSearch = e => {
  //   e.preventDefault();
  //   console.log(this.state.search);
  // }

  //https://esri.github.io/arcgis-rest-js/guides/node/
  //https://esri.github.io/arcgis-rest-js/api/portal/searchItems/

  componentDidMount() {
    const url = `https://www.arcgis.com/sharing/rest/search?q=type%3Astorymap%20AND%20typekeywords%3A(smstatuspublished)%20AND%20orgid%3A(NOT(dGkWQRTbdsLW3GnN%20AND%204E2kXnaVf5dNC6X0%20AND%20nzS0F0zdNLvs7nc8))&num=100&f=pjson`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          console.log(data);
          console.log(data.total);
          console.log("hi sara");
          console.log(this.state.search);

          this.setState({
            isLoaded: true,
            current: data,
            items: data.results,
            total: data.total
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
    const { error, isLoaded, items, total } = this.state;
    console.log(this.state.query);
    console.log(this.handleSearchChange);
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
          <SearchBox
            query={this.state.query}
            handleSearchChange={this.handleSearchChange}
          />
          {/* <SearchBox></SearchBox>
            input id="story-search"></input>Something: {filteredData}</SearchBox> */}
          <div className="story-count">Total stories: {total}</div>
          <br />
          <div className="grid-container">
            {items
              .filter(item => {
                console.log(item);
                if (
                  item.title &&
                  item.title
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
                )
                  return true;
                //Only continue if snippet exists
                if (
                  item.snippet &&
                  //item.snippet.toLowerCase() &&
                  item.snippet
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
                )
                  return true;
                return false;
                // return (
                //   item.title.includes(this.state.query) ||
                //   item.snippet.includes(this.state.query) ||
                //   false
                // );
                // if false {
                //   return "No search results found"
                // }
              })
              .map(item => (
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
