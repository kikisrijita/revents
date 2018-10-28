import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalsReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducers from '../../features/async/asyncReducers';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducers,
  toastr: toastrReducer
})

export default rootReducer