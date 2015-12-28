var React = require('react');
var Label = require('react-bootstrap').Label;
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Link = require('react-router').Link;
var QuestionValues = require('./questionValues.jsx');

var titleStyle = {
    color: "#DC3522"
}

var QuestionComponent = React.createClass({

    render : function() {
       return(
           <div>
               <Grid>
                   <Row>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Row>
                                <QuestionValues label="Answers" value={this.props.data.answers} />
                                <QuestionValues label="Views" value={this.props.data.views} />
                                <QuestionValues label="Bounty" value={this.props.data.bounty} />
                            </Row>
                        </Col>

                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Row>
                                <Col> <h3 style={titleStyle}><Link to={`/question/${this.props.data.id}`} className="text-info"><a>{this.props.data.title}</a></Link></h3> </Col>
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