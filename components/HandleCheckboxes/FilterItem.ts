import { ICheckbox } from '../HandleCheckboxes/CheckBox';

export default class FilterItem implements ICheckbox {
  Key: string;
  Val: string;
  CheckFlag: boolean;
  Evt: any;

  constructor() {
    this.Key = '';
    this.Val = '';
    this.CheckFlag = false;
    this.Evt = undefined;
  }
}
