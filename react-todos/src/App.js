import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebNav from "./components/WebNav"
import Home from "./pages/Home";
import Event from "./pages/Event";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer"
import { StoreProvider } from "./utils/GlobalState";
import SavedList from "./pages/SavedList";
import './App.css'

function App() {
  return (
    <Router>
      <div id='App'>
        <StoreProvider>
          <WebNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/saved" component={SavedList} />
              <Route exact path="/event/:id" component={Event} />
              <Route component={NoMatch} />
            </Switch>
          <Footer />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
