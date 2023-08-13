import { BehaviorSubject } from 'rxjs';

export class Store {
  data: Array<string> = [];
}

const subject = new BehaviorSubject<Store | null>(null);

let store = new Store();

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
