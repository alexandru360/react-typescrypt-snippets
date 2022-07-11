import * as React from 'react';
import { ICheckbox } from '../HandleCheckboxes/CheckBox';
import HandleCheckbox from '../HandleCheckboxes/HandleCheckboxes';

export default function HandleCheckboxOtherWrapper() {
  const [arrChecks, setArrChecks] = React.useState<ICheckbox[]>([]);

  React.useEffect(() => {
    const arr: Array<ICheckbox> = [
      {
        Key: 'Element 1',
        Val: 'Element 1',
        CheckFlag: false,
        Evt: () => console.log('Element 1'),
      },
      {
        Key: 'Element 2',
        Val: 'Element 2',
        CheckFlag: false,
        Evt: () => console.log('Element 2'),
      },
      {
        Key: 'Element 3',
        Val: 'Element 3',
        CheckFlag: false,
        Evt: () => console.log('Element 3'),
      },
      {
        Key: 'Element 4',
        Val: 'Element 4',
        CheckFlag: false,
        Evt: () => console.log('Element 4'),
      },
      {
        Key: 'Element 5',
        Val: 'Element 5',
        CheckFlag: false,
        Evt: () => console.log('Element 5'),
      },
      {
        Key: 'Element 6',
        Val: 'Element 6',
        CheckFlag: false,
        Evt: () => console.log('Element 6'),
      },
      {
        Key: 'Element 7',
        Val: 'Element 7',
        CheckFlag: false,
        Evt: () => console.log('Element 7'),
      },
      {
        Key: 'Element 8',
        Val: 'Element 8',
        CheckFlag: false,
        Evt: () => console.log('Element 8'),
      },
      {
        Key: 'Element 9',
        Val: 'Element 9',
        CheckFlag: false,
        Evt: () => console.log('Element 9'),
      },
      {
        Key: 'Element 10',
        Val: 'Element 10',
        CheckFlag: false,
        Evt: () => console.log('Element 10'),
      },
    ];

    setArrChecks(arr);
  }, []);

  return (
    <React.Fragment>
      <h3>HandleCheckbox</h3>
      <br />
      <HandleCheckbox
        handleApplyClickClick={() => null}
        handleClearClick={() => null}
        handleSelectAllClick={() => null}
        CheckboxArray={arrChecks}
      />
    </React.Fragment>
  );
}
