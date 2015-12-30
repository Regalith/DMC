var React = require('react');
var Label = require('react-bootstrap').Label;
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Link = require('react-router').Link;
var QuestionValues = require('./questionValues.jsx');

var titleStyle = {
    color: "#DC3522",
    verticalAlign : top
}

var QuestionComponent = React.createClass({

    render : function() {
       return(
           <div>
               <Grid>
                   <Row>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <Row>
                                <QuestionValues label="Answers" value={this.props.data.answers} color= "#D9CB9E"/>
                                <QuestionValues label="Views" value={this.props.data.views} color="#D9CB9E" />
                                <QuestionValues label="Bounty" value={this.props.data.bounty} color="#D9CB9E" />
                            </Row>
                        </Col>

                        <Col xs={9} sm={9} md={9} lg={9}>
                            <Row>
                                <Col> <h3 style={titleStyle}><Link to={`/question/${this.props.data.id}`} >{this.props.data.title}</Link></h3> </Col>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                   </Row>
               </Grid>
           </div>

       );
   }
});

module.exports = QuestionComponent;