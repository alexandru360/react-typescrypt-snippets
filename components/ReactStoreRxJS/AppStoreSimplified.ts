import { BehaviorSubject } from 'rxjs';

export class Store {
  data: Array<string> = [];
}

let store = new Store();
store.data = ['Initial data in the app store !'];

const subject = new BehaviorSubject<Store | null>(store);

const AppStore = {
  getStore: (data: any) => subject.subscribe(data),
  updateStore: (message: string) => {
    store = {
      // ...state,
      data: [...store.data, message],
    };
    subject.next(store);
  },
};

export default AppStore;
