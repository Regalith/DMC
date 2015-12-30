var React = require('react');
var Well = require('react-bootstrap').Well;
var Col = require('react-bootstrap').Col;



var QuestionValues = React.createClass({

    render : function() {
        var bgColor = "#D9CB9E";


        if(this.props.value > 0)
        {
            bgColor = this.props.color;
        }

        var wellStyle = {
            backgroundColor: bgColor,
            color: "#1E1E20"
        };
        var colStyle = {
             paddingRight: 7,
             paddingLeft: 7
        };
       return(
           <Col xs={4} sm={4} md={4} lg={4} style={colStyle}>
               <Well style={wellStyle} bsSize="small">
                    <h4 className= "text-center"> {this.props.value}</h4>
                    <h5 className= "text-center">{this.props.label}</h5>
                </Well>
           </Col>
       );
   }
});

module.exports = QuestionValues;