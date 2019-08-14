import React from "react";
import StoryCard from "./Card.js";
import Navigation from "./Navbar.js";
import SearchBox from "./Search.js";
import Switch from "./Switch.js";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      query: "",
      toggle: false
    };
  }

  onToggle = e => {
    console.log(e.target.checked);
    //this.props.isOn = value;
    this.setState({
      toggle: e.target.checked
    });
  };

  handleSearchChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  componentDidMount() {
    const url = `https://www.arcgis.com/sharing/rest/search?q=type%3Astorymap%20AND%20typekeywords%3A(smstatuspublished)%20AND%20orgid%3A(NOT(dGkWQRTbdsLW3GnN%20AND%204E2kXnaVf5dNC6X0%20AND%20nzS0F0zdNLvs7nc8))&sortorder=desc&sortfield=modified&num=100&f=pjson`;
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
      console.log(this.state.toggle);
      return (
        <div className="Home">
          <Navigation />
          <h1>Story Gallery</h1>
          <SearchBox
            query={this.state.query}
            handleSearchChange={this.handleSearchChange}
          />
          <div className="story-count">Total stories: {total}</div>
          <br />
          <Switch onToggle={this.onToggle}>Toggle to append url</Switch>
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
              })
              .map(item => (
                <StoryCard
                  key={item.id}
                  src={`https://www.arcgis.com/sharing/rest/content/items/${
                    item.id
                  }/info/${item.thumbnail}`}
                  id={item.id}
                  title={item.title}
                  owner={item.owner}
                  snippet={item.snippet}
                  href={item.url}
                  isToggled={this.state.toggle}
                />
              ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
