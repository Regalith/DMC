var React = require('react');
var ReactDOM = require('react-dom');
var NavBarComponent = require('./components/navBar/navBarBase.jsx');
var QuestionListComponent = require('./components/questionList/questionListBase.jsx');

var BaseComponent = React.createClass({
    render: function(){
        return (
            <div>
                <NavBarComponent />
                <QuestionListComponent url="/QA/api/getAllQuestions"/>
            </div>
         )
    }
});

ReactDOM.render(<BaseComponent />, document.getElementById('content'));