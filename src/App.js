import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import StoryDetails from "./components/StoryDetails.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/info/:storyId" component={StoryDetails} />
            <Route>
              <h1>Sorry, page not found</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
