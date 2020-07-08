import { combineReducers } from 'redux';

import loginReducer from '../views/login/redux/login_reducer';

const rootReducer = combineReducers({
    login:loginReducer
})

export default rootReducer;