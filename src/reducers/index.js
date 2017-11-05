import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import UserActive from './UserActiveReducer';

const rootReducer = combineReducers({
    users: UsersReducer,
    userActive: UserActive
});

export default rootReducer;