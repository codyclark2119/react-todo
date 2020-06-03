import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebNav from "./components/WebNav"
import Home from "./pages/Home";
import Event from "./pages/Event";
import NoMatch from "./pages/NoMatch";
import { Jumbotron } from 'reactstrap';
import { StoreProvider } from "./utils/GlobalState";
import ReoccuringList from "./pages/ReoccuringList";
import './App.css'

function App() {
  return (
    <Router>
      <div id='App'>
        <StoreProvider>
          <WebNav />
          <Jumbotron>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/reoccuring" component={ReoccuringList} />
              <Route exact path="/event/:id" component={Event} />
              <Route component={NoMatch} />
            </Switch>
          </Jumbotron>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
