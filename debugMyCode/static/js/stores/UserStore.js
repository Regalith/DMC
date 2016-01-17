import {LOGIN_USER, LOGOUT_USER} from '../constants/AppConstants';
import BaseStore from './BaseStore';

class UserStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))
        this._username = null;
        this._jwt = null;
        this._logStatus = false;
    }

    _registerToActions(action) {
        switch(action.actionType) {
          case LOGIN_USER:
              console.log("USerStore Login");
              this._jwt = action.jwt;
              this._username = action.username;
              this._logStatus = true;
              this.emitChange();
              break;
          case LOGOUT_USER:
              console.log("UserStore Loggout");
              this._username = null;
              this._jwt = null;
              this._logStatus = false;
              this.emitChange();
              break;
          default:
              break;
        };
    }
    get user() {
        return this._username;
    }

    get jwt() {
        return this._jwt;
    }

    isLoggedIn() {
        return this._logStatus;
    }
}

export default new UserStore();