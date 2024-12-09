import { combineReducers } from 'redux';
import authReducer from './authReducer';  // authReducer 임포트
import todoReducer from './todoReducer';  // todoReducer 임포트

const rootReducer = combineReducers({
  auth: authReducer,  // 인증 관련 리듀서
  todos: todoReducer,  // 투두 리스트 관련 리듀서
});

export default rootReducer;
