import * as React from 'react';
import { xyz, XyzTransitionGroup } from '@animxyz/react';
import Container from 'react-bootstrap/cjs/Container';
import Button from 'react-bootstrap/Button';

export default function UnderstandingHooks() {
  const [someValue, setSomeValue] = React.useState(true);
  const [someValue1, setSomeValue1] = React.useState(true);

  // Every time onChange ...
  React.useEffect(() =>
    console.info(
      'Reacting to any change of the component - equivalent to onChange! '
    )
  );

  // Ng onInit equivalent
  React.useEffect(
    () =>
      console.info(
        'Only once at the beginning of the component - equivalent to onInit in angular!'
      ),
    []
  );

  // modelChange ... linked to whatever is passed in array !
  React.useEffect(() => {
    console.info(
      'linked to whatever variable is set up in the array ... [someValue]',
      someValue
    );
  }, [someValue]);

  return (
    <React.Fragment>
      <XyzTransitionGroup className="xyz-in" xyz="fade in big">
        <h1 className="header">Understanding hooks</h1>
      </XyzTransitionGroup>
      <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
        <p>File: UnderstandingHooks.tsx</p>
      </XyzTransitionGroup>
      <hr />
      <p>
        <XyzTransitionGroup className="xyz-in" xyz="fade left-100%">
          <Button
            variant="info"
            onClick={() => {
              setSomeValue(!someValue);
            }}
          >
            Primary
          </Button>
        </XyzTransitionGroup>
        <br />
        <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
          <Button
            variant="secondary"
            onClick={() => {
              setSomeValue1(!someValue1);
            }}
          >
            This produces no effect in console!
          </Button>
        </XyzTransitionGroup>
      </p>
    </React.Fragment>
  );
}
