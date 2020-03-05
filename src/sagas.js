import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import {
  requestData,
  requestDataError,
  requestDataSuccess,
  setNextPage,
  setPreviousPage, setStarshipData
} from './actions'

export function* watchFetchStarships() {
  yield takeEvery('FETCHED_STARSHIPS', fetchStarshipsDataAsync);
}

export function* watchFetchStarship() {
  yield takeEvery('FETCHED_STARSHIP', fetchStarshipAsync);
}

export function* fetchStarshipsDataAsync(action) {
  try {
    const { url = 'https://swapi.co/api/starships/' } = action;
    yield put(requestData())
    const data = yield call(() => axios.get(url))
    yield put(setNextPage(data.data.next))
    yield put(setPreviousPage(data.data.previous))
    yield put(requestDataSuccess(data.data.results))
  } catch (error) {
    yield put(requestDataError())
  }
}


export function* fetchStarshipAsync(action) {
  try {
    const { id } = action
    yield put(requestData())
    const data = yield call(() => axios.get(`https://swapi.co/api/starships/${id}`))
    yield put(setStarshipData(data.data))
  } catch (error) {
    yield put(requestDataError())
  }
}

