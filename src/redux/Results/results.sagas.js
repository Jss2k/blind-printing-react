import { takeLatest, put, all, call } from 'redux-saga/effects'
import { handleAddResult, handleFetchResults } from './results.helpers'
import resultsTypes from './results.types'
import { setResults } from './results.action'

export function* addResult({ payload: {
    netWPM,
    grossWPM,
    accuracy,
    resultUserUID
}}) {

  try {
    const timestamp = new Date()

    yield handleAddResult({
      netWPM,
      grossWPM,
      accuracy,
      resultUserUID,
      createDate: timestamp
    })
  } catch (err) {
    // console.log(err)
  }

}

export function* onAddResultStart() {
  yield takeLatest(resultsTypes.ADD_NEW_RESULT_START, addResult)
}

export function* fetchResults() {
  try {
    const results = yield handleFetchResults();
    yield put(
      setResults(results)
    )

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchResultsStart() {
  yield takeLatest(resultsTypes.FETCH_RESULTS_START, fetchResults)
}

export default function* resultsSagas() {
  yield all([
    call(onAddResultStart),
    call(onFetchResultsStart),
  ])
}