import React from 'react';
import QuestionComponent from './question.jsx';

//Bootstrap components
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

class QuestionListComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
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
}

export default QuestionListComponent;