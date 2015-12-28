var React = require('react');
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var QuestionComponent = require('./question.jsx');

var QuestionListComponent = React.createClass({

    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    render: function(){
        var questionNodes = this.props.data.map(function(question) {
            return (
                //<QuestionComponent title={question.title} />
                <ListGroupItem key={question.id}> <QuestionComponent data={question} /> </ListGroupItem>
            );
        });
        return (
            <div>
                <ListGroup componentClass="ul">
                    {questionNodes}
                </ListGroup>
            </div>
         );
    }
});

module.exports = QuestionListComponent;