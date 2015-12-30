 var React = require('react');
var QuestionPanelComponent = require('./questionList/questionPanel.jsx');
var FilterPanelComponent = require('./filters/filterPanel.jsx');
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var QuestionPageComponent = React.createClass({
    getInitialState :function(){
      return {
          results: [],
          numPages : 0,
          activePage: 1,
      };
    },

    loadQuestionsFromServer: function(pageNum){
        var pageUrl = "/api/QA/getAllQuestions/" + '?page=' + pageNum;
        $.ajax({
              url: pageUrl,
              dataType: 'json',
              cache: false,
              success: function(data) {
                 this.setState({
                     results: data.results,
                     numPages: Math.ceil(data.count / 15),
                 });
              }.bind(this),
              error: function(xhr, status, err) {
                 console.error(this.props.url, status, err.toString());
              }.bind(this)
        });

    },

    handleFilterSubmit : function(filter){
        $.ajax({
          url: "/api/QA/getAllQuestions/",
          dataType: 'json',
          type: 'POST',
          data: filter,
          success: function(data) {
            this.setState({
                results: data.results,
                numPages: Math.ceil(data.count / 15),
            });
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },

    render: function(){
        return (

            <div className = "container">
                <Grid>
                    <Row>
                        <Col s={3} sm={3} md={3} lg={3}>
                            <FilterPanelComponent handleFilterSubmit={this.handleFilterSubmit} />
                        </Col>
                        <Col s={9} sm={9} md={9} lg={9}>
                            <QuestionPanelComponent
                                results={this.state.results}
                                numPages={this.state.numPages}
                                loadQuestionsFromServer={this.loadQuestionsFromServer}
                            />
                        </Col>
                    </Row>
                </Grid>
             </div>
         )
    }
});

module.exports = QuestionPageComponent;