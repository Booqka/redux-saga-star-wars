import { createStore, applyMiddleware }  from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import { watchFetchStarship, watchFetchStarships } from '../sagas'

const sagaMiddleware = createSagaMiddleware()

/* Create a function called configureStore */
export default function configureStore() {
  const Store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(watchFetchStarships)
  sagaMiddleware.run(watchFetchStarship)
  return Store
}

