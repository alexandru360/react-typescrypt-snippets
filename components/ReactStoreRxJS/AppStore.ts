import { Subject } from 'rxjs';

const subject = new Subject();

export class State {
  data: Array<string> = [];
  newDataCount: number = 0;
}

let state = new State();

const appStore = {
  init: () => {
    state = { ...state, newDataCount: 0 };
    subject.next(state);
  },
  subscribe: (setState: any) => subject.subscribe(setState),
  sendMessage: (message: string) => {
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1,
    };
    subject.next(state);
  },
  modifyState: (data: Array<Record<number, string>>) => {
    const newState = { ...state, data };
    subject.next(newState);
  },
  clearState: () => {
    state = new State();
    subject.next(state);
  },
  InitialState: State,
};

export default appStore;
