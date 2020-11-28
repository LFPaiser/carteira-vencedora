import { all, takeLatest } from 'redux-saga/effects';

import { ExampleTypes } from '../ducks';

import * as ExampleSaga from './example';

export default function* rootSaga() {
  return yield all([
    yield takeLatest(
      ExampleTypes.EXAMPLE_TYPE,
      ExampleSaga.exampleFunc
    )
  ])
}