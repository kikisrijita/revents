import {combineReducers} from 'redux';
import { reducer as FormReducer } from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import modalsReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducers from '../../features/async/asyncReducers';
import eventReducer from '../../features/event/eventReducer';



const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer,
    async: asyncReducers
})
export default rootReducer;