import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/user.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  // scoreData: scoresReducer
})

const configStorage = {
  key: 'root',
  storage,
  // whitelist: ['scoresData']
}

export default persistReducer(configStorage, rootReducer)