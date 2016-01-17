import React from 'react';
import ReactDOM  from 'react-dom';
import NavBase from './components/pageBase.jsx';
import QuestionPageComponent from './components/questions/questionsPage.jsx';
import QuestionDetailsComponent from './components/questions/questionDetails/questionDetails.jsx';

//Router components
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={NavBase}>
        <IndexRoute component={QuestionPageComponent}/>
        <Route path='/question/:id' component={QuestionDetailsComponent}/>
    </Route>
  </Router>
), document.getElementById('content'));