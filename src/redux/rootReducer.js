import { combineReducers } from 'redux';
import redirectReducer from './redirects/redirectReducer';
import authReducer from './auth/authReducer';
import errorsReducer from './errors/errorsReducer';
import dashboardReducer from './dashboard/dashboardReducer';

const rootReducer = combineReducers({
  redirects: redirectReducer,
  auth: authReducer,
  errors: errorsReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
