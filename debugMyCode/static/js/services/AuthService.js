var AppActions = require("../actions/AppActions.jsx");

class AuthService {
    login(username, password)
    {
        $.ajax({
          url: "api-token-auth/",
          dataType: 'json',
          type: 'POST',
          data: {username,password},
          success: function(response) {
                var jwt = response.token;
                AppActions.loginUser(username,jwt);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    }

};

module.exports = AuthService;