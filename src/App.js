import React from "react";
import { searchItems } from "@esri/arcgis-rest-portal";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }
  //https://esri.github.io/arcgis-rest-js/guides/node/
  //https://esri.github.io/arcgis-rest-js/api/portal/searchItems/

  componentDidMount() {
    searchItems({
      query: `type:storymap AND typekeywords:(smstatuspublished) AND orgid:(NOT(dGkWQRTbdsLW3GnN AND 4E2kXnaVf5dNC6X0 AND nzS0F0zdNLvs7nc8))`,
      start: 0,
      num: 23
    }).then(
      results => {
        console.log(results);
        this.setState({
          isLoaded: true,
          items: results.items
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

  // componentDidMount() {
  //   const url = `https://www.arcgis.com/sharing/rest/search?q=type%3Astorymap%20AND%20typekeywords%3A(smstatuspublished)%20AND%20orgid%3A(NOT(dGkWQRTbdsLW3GnN%20AND%204E2kXnaVf5dNC6X0%20AND%20nzS0F0zdNLvs7nc8))&num=100&f=pjson`;
  //   fetch(url).then(
  //     data => {
  //       console.log(data);
  //       this.setState({
  //         isLoaded: true,
  //         //current: data
  //         items: data.items
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     }
  //   );
  // }

  render() {
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h1>Hello, Sara</h1>
          <ul>
            {results.map(item => (
              <li key={item.id}>
                {item.title} {item.author} {item.description}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
