import { configureStore } from '@reduxjs/toolkit';
import createSagaMid from 'redux-saga';

import Reducers from './ducks';
import Sagas from './saga';

const sagaMid = createSagaMid();
const rootStore = configureStore({
  reducer: Reducers,
  middleware: [sagaMid]
})

sagaMid.run(Sagas)

export default rootStore;