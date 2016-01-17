import React from 'react';
import QuestionValues from './questionValues.jsx';

//Bootstrap components
var Label = require('react-bootstrap').Label;
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Link = require('react-router').Link;


var titleStyle = {
    color: "#DC3522",
    verticalAlign : top,
    marginTop : 5
}

var questionStyle = {

    maxWidth :800
}

class QuestionComponent extends React.Component{

    render() {
       return(
           <Row>
               <Col xs={4} sm={4} md={4} lg={4} style={questionStyle}>
                   <Row>
                       <QuestionValues label="Answers" value={this.props.data.answers} color= "#D9CB9E"/>
                       <QuestionValues label="Views" value={this.props.data.views} color="#D9CB9E" />
                       <QuestionValues label="Bounty" value={this.props.data.bounty} color="#D9CB9E" />
                   </Row>
               </Col>

               <Col xs={8} sm={8} md={8} lg={8}>
                   <Row>
                       <Col bsStyle={titleStyle}> <h3><Link to={`/question/${this.props.data.id}`} >{this.props.data.title}</Link></h3> </Col>
                   </Row>
                   <Row>

                   </Row>
               </Col>
           </Row>

       );
   }
}

export default QuestionComponent;