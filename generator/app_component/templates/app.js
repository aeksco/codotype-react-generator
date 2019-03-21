import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './home/home';
import Login from './auth/Login';
import Register from './auth/Register';
import { Alignment, Navbar, Button } from "@blueprintjs/core";
<%_ blueprint.schemas.forEach((schema) => { _%>
import <%- schema.class_name %>Routes from './<%- schema.identifier %>/routes';
<%_ }) _%>

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// TODO - split Navbar component out of this file
class App extends Component {
  render() {
    return (
      <div>

        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>
                  <Link to="/"><%= blueprint.label %></Link>
                </Navbar.Heading>
              <Navbar.Divider />
              <%_ blueprint.schemas.forEach((schema) => { _%>
              <Link to="/<%= schema.identifier_plural %>"><%= schema.label_plural %></Link>
              <Navbar.Divider />
              <%_ }) _%>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
              <Link to="/auth/register">Register</Link>
              <Navbar.Divider />
              <Link to="/auth/login">Login</Link>
            </Navbar.Group>
        </Navbar>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
            <%_ blueprint.schemas.forEach((schema) => { _%>
            <Route path="/<%- schema.identifier_plural %>" component={<%- schema.class_name %>Routes} />
            <%_ }) _%>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

