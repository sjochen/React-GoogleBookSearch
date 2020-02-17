import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header"
import Search from "./pages/search/search"
import Saved from "./pages/saved/saved"

function App() {
  return (
    <Router>
      <Header />

      <Switch>

        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />

      </Switch>
    </Router>
  );
}

export default App;
