import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Shows from "./pages/Shows";
import './App.css';
import MenuLink from "./components/MenuLink";
import Search from "./pages/Search";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div>
            <MenuLink></MenuLink>
          </div>

          <div style = {{ marginTop: "60px" }}>
            <Route path = "/" exact component = {IndexPage}></Route>
            <Route path="/shows_data" component={Shows}></Route>
            <Route path="/search_data" component={Search}></Route>
          </div>

        </div>
      </Router>
      
    );
  }
}

export default App;
