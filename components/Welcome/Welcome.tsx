import * as React from 'react';
import { xyz, XyzTransitionGroup } from '@animxyz/react';

export default function Welcome() {
  return (
    <React.Fragment>
      <XyzTransitionGroup className="xyz-in" xyz="fade in big">
        <h1>Welcome!</h1>
      </XyzTransitionGroup>
    </React.Fragment>
  );
}
