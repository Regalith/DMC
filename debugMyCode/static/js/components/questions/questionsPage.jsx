import React from 'react';
import QuestionPanelComponent from './questionList/questionPanel.jsx';
import FilterPanelComponent from './filters/filterPanel.jsx';

//Bootstrap components
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
class QuestionPageComponent extends React.Component{

     constructor(props) {
         super(props);
         this.state = {
             results: [],
             numPages : 0,
             activePage: 1,
        };
    }


    loadQuestionsFromServer(pageNum)
    {
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

    }

    handleFilterSubmit (filter){
        $.ajax({
          url: "/api/QA/getAllQuestions/",
          dataType: 'json',
          type: 'POST',
          data: filter,
          success: function(data) {
            this.state = {
                results: data.results,
                numPages: Math.ceil(data.count / 15),
            };
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    }

    render(){
        return (

            <div>
                <Row>
                    <Col s={2} sm={2} md={2} lg={2}>
                        <FilterPanelComponent handleFilterSubmit={this.handleFilterSubmit.bind(this)} />
                    </Col>
                    <Col s={6} sm={6} md={6} lg={6}>
                        <QuestionPanelComponent
                            results={this.state.results}
                            numPages={this.state.numPages}
                            loadQuestionsFromServer={this.loadQuestionsFromServer.bind(this)}
                        />
                    </Col>
                </Row>
             </div>
         )
    }
}

export default QuestionPageComponent;