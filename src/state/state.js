import {countCorrectCharacters} from './../Utils/countCorrectCharacters'

export const initialState = {
  text: ' ',
  input: '',
  characters: 0,
  seconds: 0,
  timerId: undefined,
};

export const ActionTypes = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  SET_TIMER: 'SET_TIMER',
  TICK: 'TICK',
  GET_TEXT: 'GET_TEXT',
}

// export interface Action<T> {
//   type: ActionTypes;
//   payload?: T;
// }
// type Transducer = (state: State, action: Action<any>) => State;
// type Reducer<T = any> = (state: State, payload?: T) => State;
export const changeText = (state, ntext) => ({
  ...state,
  text: ntext
})

export const changeInput = (state, input = '') => ({
  ...state,
  input,
  characters: countCorrectCharacters(state.text, input),
})

export const setTimer = (state, timerId) => ({
  ...state,
  timerId,
})

export const tick = (state) => ({
  ...state,
  seconds: state.seconds + 1,
})

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.GET_TEXT:
      return changeText(state, action.payload)
    case ActionTypes.CHANGE_INPUT:
      return changeInput(state, action.payload);
    case ActionTypes.SET_TIMER:
      return setTimer(state, action.payload);
    case ActionTypes.TICK:
      return tick(state);
    default:
      return state;
  }
}