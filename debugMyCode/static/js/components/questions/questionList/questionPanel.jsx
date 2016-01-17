import React from 'react';
import QuestionListComponent from './questionList.jsx';

//Bootstrap components
var Pagination = require('react-bootstrap').Pagination;

class QuestionPanelComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
        };
    }


    handleSelect(event, selectedEvent) {
        //Reload questions with diffrent page number
        this.props.loadQuestionsFromServer(selectedEvent.eventKey);
        //Set state to refresh dom and set active page
        this.setState({
            activePage :selectedEvent.eventKey
        });


    }

    componentDidMount(){
        this.props.loadQuestionsFromServer(1);
    }
    render()
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
                    onSelect={this.handleSelect.bind(this)}
              />
          </div>
        );
    }
}

export default QuestionPanelComponent;