import  {combineReducers} from 'redux';
import authReducer from './authReducer';
import profile from './profile';
import userProfile from './userProfile';
import user_form_updatesReducer from './userUpdates';

export default combineReducers({
    auth:authReducer,
    user_form_updates: user_form_updatesReducer,
    profile,
    userProfile
});