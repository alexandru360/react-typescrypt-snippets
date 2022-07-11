import * as React from 'react';

export interface ICheckbox {
  Key: string;
  Val: string;
  CheckFlag: boolean;
  Evt: any;
}

export default function HandleCheckboxAll(props: ICheckbox) {
  const chkRef = React.useRef(null);

  return (
    <React.Fragment>
      <div className="dds__form-check">
        <label className="dds__form-check-label" htmlFor="checkboxName">
          <input
            type="checkbox"
            id={props.Key}
            ref={chkRef}
            className="dds__form-check-input"
            checked={props.CheckFlag}
            onChange={props.Evt}
          />
          <span>{props.Val}</span>
        </label>
      </div>
    </React.Fragment>
  );
}
