import * as React from 'react';

export default function JsonPrettyfier(pars: any) {
  return (
    <React.Fragment>
      <pre>{JSON.stringify(pars, null, 4)}</pre>
    </React.Fragment>
  );
}
