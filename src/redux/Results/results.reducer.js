import resultsTypes from './results.types'

const INITIAL_STATE = {
  results: []
}

const resultsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case resultsTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload
      }
      default:
        return state
  }
}

export default resultsReducer