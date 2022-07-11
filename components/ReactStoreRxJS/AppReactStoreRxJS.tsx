import * as React from 'react';
import ComponentOne from '../ReactStoreRxJS/components/ComponentOne';
import ComponentTwo from '../ReactStoreRxJS/components/ComponentTwo';
import DisplayState from '../ReactStoreRxJS/components/DisplayState';

export default function AppReactStoreRxJS() {
  return (
    <React.Fragment>
      <h3>React store !</h3>
      <h5>Look into folder ReactStoreRxJS for more info!</h5>
      <br />
      <DisplayState />
      <hr />
      <ComponentOne />
      <hr />
      <ComponentTwo />
    </React.Fragment>
  );
}
