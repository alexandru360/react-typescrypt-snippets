import * as React from 'react';
import appStore from '../../ReactStoreRxJS/AppStore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonGroup } from 'react-bootstrap/cjs';
import { xyz, XyzTransitionGroup } from '@animxyz/react';

export default function ComponentTwo() {
  const [store, setStore] = React.useState<Array<string>>([]);
  const [inputShow, setInputShow] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<{
    id: number;
    value: string;
  }>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const store = appStore.subscribe((state: any) => {
      setStore(state.data);
      console.log('State changed', state);
    });

    return () => store.unsubscribe();
  }, []);

  function handleStateClick(e: any, i: number, item: string) {
    setInputShow(true);
    const el = {
      id: i,
      value: item,
    };
    setSelected(el);

    console.log('Selected:', el);
    console.log('Event:', e);
  }

  function handleClickSelectedValue() {
    debugger;
    store[Number(selected?.id)] = selected?.value!;

    appStore.modifyState([...store]);

    console.log('selected', JSON.stringify(selected));
    setInputShow(false);
  }

  function onInputChange(e: any) {
    setSelected({
      id: selected?.id!,
      value: e.target.value,
    });
  }

  return (
    <React.Fragment>
      <br />
      {inputShow && (
        <React.Fragment>
          <hr />
          <h4>{`Selected value: ${selected?.value}`}</h4>
          <div>
            <InputGroup className="mb-3">
              <Form.Control
                ref={inputRef}
                placeholder="Enter your text here"
                aria-label="Enter your text here"
                aria-describedby="basic-addon2"
                value={selected?.value}
                onChange={onInputChange}
              />
              <Button
                variant="success"
                id="button-addon2"
                onClick={handleClickSelectedValue}
              >
                Modify selected value in state!
              </Button>
            </InputGroup>
          </div>
          <hr />
        </React.Fragment>
      )}
      <br />

      <ButtonGroup aria-label="Basic example">
        {store.map((item: string, index: number) => (
          <XyzTransitionGroup className="xyz-in" xyz="fade in big">
            <Button
              key={index}
              variant="warning"
              onClick={(e: any) => handleStateClick(e, index, item)}
            >{`Value ${item}`}</Button>
          </XyzTransitionGroup>
        ))}
      </ButtonGroup>
    </React.Fragment>
  );
}
