import {countCorrectCharacters, countErrorCharacters} from './../Utils/countCorrectCharacters'

export const initialState = {
  text: ' ',
  input: '',
  characters: 0,
  seconds: 0,
  timerId: undefined,
  errors: 0,
  accuracy: 0,
  textLength: 0,
  allErrors: 0
};

export const ActionTypes = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  SET_TIMER: 'SET_TIMER',
  TICK: 'TICK',
  GET_TEXT: 'GET_TEXT',
}

export const changeText = (state, newtext) => ({
  ...state,
  text: newtext,
  textLength: newtext.length
})

export const changeInput = (state, input = '') => ({
  ...state,
  input,
  characters: countCorrectCharacters(state.text, input),
  errors: countErrorCharacters(state.text, input),
  accuracy: (((state.textLength - state.errors) / state.textLength) * 100).toFixed(2),
  allErrors: state.allErrors > countErrorCharacters(state.text, input) ? state.allErrors : countErrorCharacters(state.text, input)
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