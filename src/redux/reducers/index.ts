import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import userReducer, { UserState } from './user';

// 合并reducers，模块化
export interface CombinedState {
  userReducer: UserState,
}
const reducers: ReducersMapObject<CombinedState, AnyAction> = {
  userReducer
};
const reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers);

export default reducer;
