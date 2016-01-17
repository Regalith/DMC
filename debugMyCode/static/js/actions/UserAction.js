import {LOGIN_USER, LOGOUT_USER} from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class UserAction {

    loginUser(username, jwt)
    {
        //localStorage.setItem('jwt', jwt);
        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            username : username,
            jwt : jwt,
        });
    }

    logoutUser()
    {
        console.log("Action Logout");
        AppDispatcher.dispatch({
            actionType: LOGOUT_USER
        });
    }
}

export default new UserAction();