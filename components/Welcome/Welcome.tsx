import * as React from 'react';
import { xyz, XyzTransitionGroup } from '@animxyz/react';
import Container from 'react-bootstrap/cjs/Container';

export default function Welcome() {
  return (
    <React.Fragment>
      <XyzTransitionGroup className="xyz-in" xyz="fade in big">
        <h1 className="header">Welcome To React example project</h1>
      </XyzTransitionGroup>
      <hr />
      <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
        <h3>
          With help of:{' '}
          <a href="https://animxyz.com/" target="_blank">
            animxyz.com
          </a>
          &{' '}
          <a
            href="https://react-bootstrap.github.io/components/navs/"
            target="_blank"
          >
            React-Bootstrap
          </a>
        </h3>
      </XyzTransitionGroup>

      <XyzTransitionGroup className="xyz-in" xyz="fade up-10%">
        <h3>
          Github:{' '}
          <a href="https://github.com/ingram-projects/animxyz" target="_blank">
            <img
              src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"
              height="24px"
              width="24px"
              alt="github"
            />
          </a>
        </h3>
      </XyzTransitionGroup>

      <XyzTransitionGroup className="xyz-in" xyz="fade up-10%">
        <span>Created by Alexandru-Stefan Badita</span>
      </XyzTransitionGroup>
    </React.Fragment>
  );
}
