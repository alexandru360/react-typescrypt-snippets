import * as React from 'react';
import { xyz, XyzTransitionGroup } from '@animxyz/react';

export default function Welcome() {
  return (
    <React.Fragment>
      <XyzTransitionGroup className="xyz-in" xyz="fade in big">
        <h1>Welcome!</h1>
      </XyzTransitionGroup>

      <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
        <h3>
          With help of:{' '}
          <a href="https://animxyz.com/" target="_blank">
            animxyz.com
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
    </React.Fragment>
  );
}
