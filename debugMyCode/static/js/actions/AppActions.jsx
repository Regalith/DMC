var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var AppConstants = require('../constants/AppConstants.jsx');

var AppActions = {

    loginUser: function(username,  jwt){
        localStorage.setItem('jwt',jwt);
        AppDispatcher.handleAction({
            actionType: AppConstants.LOGIN_USER,
            data: {username, jwt}
        });
    },
    logoutUser: function(){
        AppDispatcher.handleAction({
            actionType: AppConstants._LOGOUT,
        });
    }
};

module.exports = AppActions;