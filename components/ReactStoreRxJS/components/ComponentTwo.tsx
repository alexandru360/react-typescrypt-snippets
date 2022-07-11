import * as React from 'react';
import appStore from '../../ReactStoreRxJS/AppStore';

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
            <input
              ref={inputRef}
              type="text"
              value={selected?.value}
              onChange={onInputChange}
            />
            <button onClick={handleClickSelectedValue}>
              Modify selected value in state!
            </button>
          </div>
          <hr />
        </React.Fragment>
      )}
      <br />

      <ol>
        {store.map((item: string, index: number) => (
          <li key={index}>
            <button
              onClick={(e: any) => handleStateClick(e, index, item)}
            >{`Value ${item}`}</button>
          </li>
        ))}
      </ol>
    </React.Fragment>
  );
}
