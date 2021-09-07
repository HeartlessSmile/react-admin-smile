import * as types from '../action_types';
import { AnyAction } from 'redux';

// 定义参数接口
export interface UserState {
  name: string
}

// 初始化state
let initState: UserState = {
  name: 'penggang'
};

// 返回一个reducer
const fn = (state: UserState = initState, action: AnyAction) => {
  switch (action.type) {
    case types.ADD_USER:
      // data为传入的参数
      return { name: action.data };
    default:
      return state;
  }
};

export default fn
