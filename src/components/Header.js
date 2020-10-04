import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>
        <Link to="/">
          Expensify
        </Link>
      </h1>

      <ul>
        <li><NavLink activeClassName="is-active" to="/create">
          Create
        </NavLink></li>
        <li><NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink></li>
      </ul>
    </div>
  );
}

export default Header;