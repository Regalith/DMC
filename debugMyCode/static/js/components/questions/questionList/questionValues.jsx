var React = require('react');
var Well = require('react-bootstrap').Well;
var Col = require('react-bootstrap').Col;

var wellStyle = {
    backgroundColor: "#D9CB9E",
    color: "#1E1E20"
}

var QuestionValues = React.createClass({

    render : function() {
       return(
           <Col xs={4} sm={4} md={4} lg={4}>
               <Well style={wellStyle}>
                    <h4 className= "text-center"> {this.props.value}</h4>
                    <h5 className= "text-center">{this.props.label}</h5>
                </Well>
           </Col>
       );
   }
});

module.exports = QuestionValues;