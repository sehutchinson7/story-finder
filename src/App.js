import React from "react";
import { searchItems } from "@esri/arcgis-rest-portal";
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
          <h1>Hello, Sara</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <img
                  src={`https://www.arcgis.com/sharing/rest/content/items/${
                    item.id
                  }/info/${item.thumbnail}`}
                  alt="thumbnail"
                />
                {item.title} {item.author}
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
