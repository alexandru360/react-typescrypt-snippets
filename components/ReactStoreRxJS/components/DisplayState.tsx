import * as React from 'react';
import Button from 'react-bootstrap/cjs/Button';
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
      <Button variant="danger" onClick={handleStateClick}>
        Clear state
      </Button>
      <p>Store:</p>
      <JsonPrettyfier {...store} />
    </React.Fragment>
  );
}
