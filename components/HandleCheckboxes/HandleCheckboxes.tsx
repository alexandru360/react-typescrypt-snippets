import * as React from 'react';
import CheckBox, { ICheckbox } from '../HandleCheckboxes/CheckBox';
import { DivFilterButtonsContainer } from '../HandleCheckboxes/HandleCheckboxes.styled';

export interface ICheckboxGroup {
  CheckboxArray: Array<ICheckbox>;
  handleClearClick: Function;
  handleSelectAllClick: Function;
  handleApplyClickClick: Function;
}

export default function HandleCheckbox(props: ICheckboxGroup) {
  console.log('HandleCheckbox(props: ICheckboxGroup)', props);
  const [filterVisibility, setFilterVisibility] = React.useState(false);

  const handleShowFilterClicked = () => setFilterVisibility(!filterVisibility);

  const handleHideClicked = () => setFilterVisibility(false);

  const handleClearClicked = () => props.handleClearClick();

  const handleSelectAllClicked = () => props.handleSelectAllClick();

  const handleApplyClicked = () => props.handleApplyClickClick();

  return (
    <React.Fragment>
      <div>
        <div>
          <button onClick={handleShowFilterClicked}>Filter</button>
        </div>

        <div style={{ display: filterVisibility! ? '' : 'none' }}>
          <DivFilterButtonsContainer>
            <p onClick={handleHideClicked}>
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Hide
              </span>
              &nbsp;
            </p>
            <p onClick={handleClearClicked}>
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Clear
              </span>
            </p>{' '}
            &nbsp;
            <p onClick={handleSelectAllClicked}>
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Select all
              </span>
            </p>{' '}
          </DivFilterButtonsContainer>

          {props.CheckboxArray.map((objChk: ICheckbox, i: number) => {
            return (
              <CheckBox
                key={i}
                Key={objChk.Key}
                Val={objChk.Val}
                CheckFlag={objChk.CheckFlag}
                Evt={objChk.Evt}
              />
            );
          })}
          <div className="right">
            <p className="link_text__filter" onClick={handleApplyClicked}>
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Apply
              </span>
            </p>
            &nbsp;
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
