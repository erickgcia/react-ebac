import { combineReducers } from 'redux'
import { productsReducer } from './products'

const rootReducer = combineReducers({
  data: productsReducer,
})

export default rootReducer
