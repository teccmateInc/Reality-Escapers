import {configureStore} from '@reduxjs/toolkit';

import filterSlice from './reducers/reducer';
import modal from './reducers/modalReducer';

const store = configureStore({
    reducer: {filterSlice,modal},
})
export default store;