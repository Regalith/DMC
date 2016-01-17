import UserAction from "../actions/UserAction";

class AuthService {

    login(username, password)
    {
        $.ajax({
            url: "/api-token-auth/",
            dataType: 'json',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                var jwt = response.token;
                UserAction.loginUser(username,jwt);
                return true;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
                return false;
            }.bind(this)
        });
    }

}

export default new AuthService();