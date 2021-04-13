import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { PokemonTcg } from "./pages/PokemonTcg";
import { MyCardList } from "./pages/MyCardList";
import { PokemonSets } from "./pages/PokemonSets";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <div class="container-fluid">
              <div class="navbar-header">
                <a style={{ textAlign: "auto" }}>
                  <strong>The Pokemon Price Site</strong>
                </a>
              </div>
              <ul class="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/MyCardList">My Card List</Link>
                </li>
                <li>
                  <Link to="/PokemonTcg">Pokemon TCG</Link>
                </li>
                <li>
                  <Link to="/PokemonSets"> Pokemon Sets</Link>
                </li>
              </ul>
            </div>
          </nav>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/MyCardList">
            <MyCardList />
          </Route>
          <Route path="/PokemonTcg">
            <PokemonTcg />
          </Route>
          <Route path="/PokemonSets">
            <PokemonSets />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
