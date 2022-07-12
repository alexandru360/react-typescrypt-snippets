import * as React from 'react';
import { xyz, XyzTransitionGroup } from '@animxyz/react';
import Button from 'react-bootstrap/Button';
import './UnderstandingHooks.css';

export default function UnderstandingHooks(props: any) {
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

  const [someValue, setSomeValue] = React.useState(true);
  // modelChange ... linked to whatever is passed in array !
  React.useEffect(() => {
    console.info(
      'linked to whatever variable is set up in the array ... [someValue]',
      someValue
    );
  }, [someValue]);

  const [otherValue, setOtherValue] = React.useState(true);
  return (
    <React.Fragment>
      <XyzTransitionGroup className="xyz-in" xyz="fade in big">
        <h1 className="header">Understanding hooks</h1>
      </XyzTransitionGroup>
      <XyzTransitionGroup className="xyz-in" xyz="fade right-100%">
        <p>File: UnderstandingHooks.tsx</p>
      </XyzTransitionGroup>
      <hr />
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
            setOtherValue(!otherValue);
          }}
        >
          This produces no effect in console!
        </Button>
      </XyzTransitionGroup>
    </React.Fragment>
  );
}
