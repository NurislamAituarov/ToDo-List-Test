import { createStore, combineReducers } from 'redux';
import { reducer } from './Reducers/Reducer';

export const rootReducer = combineReducers({
  reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
