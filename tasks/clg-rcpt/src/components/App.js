/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import '../styles/header.css';
import Login from './Login';
import { connect } from 'net';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.konfinityLogo = require('../assets/konfinity-admin-logo.svg');
  }
  render() {
    const activeStyle = { color: '#015eaa' };
    return (
      <div>
        <ul className="primary-header" role="navigation">

          <li className="brand-logo">
            <NavLink exact to="/" activeStyle={activeStyle}>
              <img src={this.konfinityLogo} alt="Konfinity Logo" />
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/Homepage" activeStyle={activeStyle}>Account</NavLink>
            
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </div >
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
