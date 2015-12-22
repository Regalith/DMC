var React = require('react');
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
//var QuestionComponent = require('./question.jsx');

module.exports = QuestionListComponent = React.createClass({

    getInitialState :function(){
      return {data: []};
    },
    componentDidMount(){
         $.ajax({
              url: this.props.url,
              dataType: 'json',
              cache: false,
              success: function(data) {
                 this.setState({data: data});
              }.bind(this),
              error: function(xhr, status, err) {
                 console.error(this.props.url, status, err.toString());
              }.bind(this)
        });
    },
    render: function(){
        /*var questionNodes = this.props.data.map(function(question) {
            return (
                <QuestionComponent />
            );
        });*/
        return (
            <div>
                <ListGroup componentClass="ul">
                    <ListGroupItem>Item 5</ListGroupItem>
                    <ListGroupItem>Item 4</ListGroupItem>
                    <ListGroupItem>Item 3</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                </ListGroup>
            </div>
         );
    }
});