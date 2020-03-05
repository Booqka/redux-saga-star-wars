import { combineReducers } from 'redux'
import swReducer from './swReducer'

const rootReducer = combineReducers({
  sw: swReducer
})

export default rootReducer
