import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CommingSoon from './components/CommingSoon/CommingSoon';
import HandleCheckboxOtherWrapper from './components/HandleCheckboxes/HandleCheckboxOtherWrapper';
import ImputRadio from './components/ImputRadio/ImputRadio';
import AppReactStoreRxJS from './components/ReactStoreRxJS/AppReactStoreRxJS';
import UnderstandingHooks from './components/UnderstandingHooks/UnderstandingHooks';
import Welcome from './components/Welcome/Welcome';
import { xyz, XyzTransitionGroup } from '@animxyz/react';

export default function App() {
  return (
    <React.Fragment>
      <Router>
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

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/radio-buttons" element={<ImputRadio />} />
          <Route path="/react-hooks" element={<UnderstandingHooks />} />
          <Route
            path="/work-with-checkbox"
            element={<HandleCheckboxOtherWrapper />}
          />
          <Route path="/react-store" element={<AppReactStoreRxJS />} />
          <Route path="/comming-sooncomming-soon" element={<CommingSoon />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
