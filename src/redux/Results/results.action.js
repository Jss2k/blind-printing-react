import resultsTypes from './results.types'

export const addResultStart = resultData => ({
  type: resultsTypes.ADD_NEW_RESULT_START,
  payload: resultData
})

export const fetchResultsStart = () => ({
  type: resultsTypes.FETCH_RESULTS_START
})

export const setResults = results => ({
  type: resultsTypes.SET_RESULTS,
  payload: results
})