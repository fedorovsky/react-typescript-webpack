export enum ActionType {
  Increment = '@@componentWithContext/increment',
  Decrement = '@@componentWithContext/decrement',
}

interface Increment {
  type: ActionType.Increment;
}

interface Decrement {
  type: ActionType.Decrement;
}

export type Actions = Increment | Decrement;

export const increment = (): Increment => ({
  type: ActionType.Increment,
});

export const decrement = (): Decrement => ({
  type: ActionType.Decrement,
});
