var React = require('react');
var ReactDOM = require('react-dom');
var NavBarComponent = require('./components/navBar/navBarBase.jsx');
var QuestionPageComponent = require('./components/questions/questionsPage.jsx');
var QuestionDetailsComponent = require('./components/questions/questionDetails/questionDetails.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={NavBarComponent}>
        <IndexRoute component={QuestionPageComponent}/>
        <Route path='/question/:id' component={QuestionDetailsComponent}/>
    </Route>
  </Router>
), document.getElementById('content'));