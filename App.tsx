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
import { Container, Nav } from 'react-bootstrap';
import AutoScroll from './components/AutoScroll/AutoScroll';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav
          onSelect={(selectedKey) => console.info(`selected ${selectedKey}`)}
          className="justify-content-center"
        >
          <Nav.Item>
            <Nav.Link href="/" eventKey="home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/react-hooks" eventKey="hooks">
              React.useEffect
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/radio-buttons" eventKey="radio-buttons">
              Radio (optiongroup)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/work-with-checkbox" eventKey="checkboxes">
              Checkboxes{' '}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/react-store" eventKey="react-store">
              React store (RxJs){' '}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/auto-scroll" eventKey="Auto-scroll">
              Auto scroll{' '}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/comming-soon" eventKey="comming-soon">
              What is next{' '}
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Container className="p-3">
          <Container className="pb-1 p-5 mb-4 bg-light rounded-3">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/radio-buttons" element={<ImputRadio />} />
              <Route path="/react-hooks" element={<UnderstandingHooks />} />
              <Route
                path="/work-with-checkbox"
                element={<HandleCheckboxOtherWrapper />}
              />
              <Route path="/react-store" element={<AppReactStoreRxJS />} />
              <Route path="/auto-scroll" element={<AutoScroll />} />
              <Route
                path="/comming-sooncomming-soon"
                element={<CommingSoon />}
              />
            </Routes>
          </Container>
        </Container>
      </Router>

      <XyzTransitionGroup className="xyz-in" xyz="fade right-10%">
        <i>Created by Alexandru-Stefan Badita</i>
      </XyzTransitionGroup>
    </React.Fragment>
  );
}
