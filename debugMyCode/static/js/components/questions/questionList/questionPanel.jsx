var React = require('react');
var QuestionListComponent = require('./questionList.jsx');
var Pagination = require('react-bootstrap').Pagination;

var QuestionPanelComponent = React.createClass({

    getInitialState :function(){
      return {
          activePage: 1,
      };
    },

    handleSelect(event, selectedEvent) {
        //Reload questions with diffrent page number
        this.props.loadQuestionsFromServer(selectedEvent.eventKey);
        //Set state to refresh dom and set active page
        this.setState({
            activePage :selectedEvent.eventKey
        });


    },

    componentDidMount(){
        this.props.loadQuestionsFromServer(1);
    },
    render: function()
    {
        return(
          <div>
              <QuestionListComponent data={this.props.results} />
              <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    items={this.props.numPages}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}
              />
          </div>
        );
    }
});

module.exports = QuestionPanelComponent;