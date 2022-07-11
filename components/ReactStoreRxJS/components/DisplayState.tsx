import * as React from 'react';
import JsonPrettyfier from '../../common/JsonPrettyfier/JsonPrettyfier';
import appStore from '../../ReactStoreRxJS/AppStore';

export default function DisplayState() {
  const [store, setStore] = React.useState<Array<Record<number, string>>>([]);

  React.useEffect(() => {
    const store = appStore.subscribe((state: any) => {
      setStore(state.data);
      console.log('State changed', state);
    });

    return () => store.unsubscribe();
  }, []);

  const handleStateClick = () => {
    appStore.clearState();
  };

  return (
    <React.Fragment>
      <button onClick={handleStateClick}>Clear state</button>
      <p>Store:</p>
      <JsonPrettyfier {...store} />
    </React.Fragment>
  );
}
