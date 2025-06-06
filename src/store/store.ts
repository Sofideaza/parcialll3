export interface AppState {
  user: {
    name: string;
    color: string;
    letter: string;
  } | null;
}

const initialState: AppState = {
  user: null,
};

class Store {
  private state: AppState;
  private listeners: Array<() => void> = [];

  constructor(initial: AppState) {
    this.state = initial;
  }

  getState() {
    return this.state;
  }

  setState(newState: AppState) {
    this.state = newState;
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: () => void) {
  this.listeners.push(listener);
}
}

export const store = new Store(initialState);