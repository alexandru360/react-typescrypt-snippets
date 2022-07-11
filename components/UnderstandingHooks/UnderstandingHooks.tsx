import * as React from 'react';

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
      <h3>Understanding hooks</h3>
      <h5>File: UnderstandingHooks.tsx</h5>
      <br />
      <button
        onClick={() => {
          setSomeValue(!someValue);
        }}
      >
        Some button
      </button>

      <button
        onClick={() => {
          setSomeValue1(!someValue1);
        }}
      >
        Some button value1
      </button>
    </React.Fragment>
  );
}
