import * as React from 'react';
import { Link } from 'react-router-dom';
import { xyz, XyzTransitionGroup } from '@animxyz/react';

export default function AppNavigationOld() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
            <li>
              <Link to="/">0. Home</Link>
            </li>
          </XyzTransitionGroup>

          <XyzTransitionGroup className="xyz-in" xyz="fade left-100%">
            <li>
              <Link to="/react-hooks">1. React Hooks</Link>
            </li>
          </XyzTransitionGroup>

          <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
            <li>
              <Link to="/radio-buttons">2. Radio buttons</Link>
            </li>
          </XyzTransitionGroup>

          <XyzTransitionGroup className="xyz-in" xyz="fade left-100%">
            <li>
              <Link to="/work-with-checkbox">
                3. Work with checkbox - not finished yet
              </Link>
            </li>
          </XyzTransitionGroup>

          <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
            <li>
              <Link to="/react-store">4. React store (RxJs)</Link>
            </li>
          </XyzTransitionGroup>

          <XyzTransitionGroup className="xyz-in" xyz="fade left-100%">
            <li>
              <Link to="/comming-soon">5. What is next</Link>
            </li>
          </XyzTransitionGroup>
        </ul>
      </nav>
    </React.Fragment>
  );
}
