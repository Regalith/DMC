var React = require('react');
var QuestionPanelComponent = require('./questionList/questionPanel.jsx');
var FilterPanelComponent = require('./filters/filterPanel.jsx');
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var QuestionPageComponent = React.createClass({
    render: function(){
        return (

            <div className = "container">
                <Grid>
                    <Row>
                        <Col s={3} sm={3} md={3} lg={3}>
                            <FilterPanelComponent />
                        </Col>
                        <Col s={9} sm={9} md={9} lg={9}>
                            <QuestionPanelComponent url="/api/QA/getAllQuestions/"/>
                        </Col>
                    </Row>
                </Grid>
             </div>
         )
    }
});

module.exports = QuestionPageComponent;