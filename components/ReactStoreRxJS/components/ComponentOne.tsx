import * as React from 'react';
import appStore from '../../ReactStoreRxJS/AppStore';

export default function ComponentOne() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleStateClick = () => {
    const value = inputRef.current?.value;

    appStore.sendMessage(value!);
  };

  return (
    <React.Fragment>
      <input ref={inputRef} type="text" placeholder="Enter your text here" />
      <button onClick={handleStateClick}>Push to state</button>
    </React.Fragment>
  );
}
