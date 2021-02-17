import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/user.reducer'
import resultsReducer from './Results/results.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  resultsData: resultsReducer
})

const configStorage = {
  key: 'root',
  storage,

}

export default persistReducer(configStorage, rootReducer)