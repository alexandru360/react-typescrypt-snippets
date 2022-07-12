import * as React from 'react';
import appStore from '../../ReactStoreRxJS/AppStore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ComponentOne() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleStateClick = () => {
    const value = inputRef.current?.value;

    appStore.sendMessage(value!);
  };

  return (
    <React.Fragment>
      <InputGroup className="mb-3">
        <Form.Control
          ref={inputRef}
          placeholder="Enter your text here"
          aria-label="Enter your text here"
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2" onClick={handleStateClick}>
          Push to state
        </Button>
      </InputGroup>
    </React.Fragment>
  );
}
