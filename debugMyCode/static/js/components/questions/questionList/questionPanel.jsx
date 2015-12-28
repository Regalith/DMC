var React = require('react');
var QuestionListComponent = require('./questionList.jsx');

var QuestionPanelComponent = React.createClass({

    getInitialState :function(){
      return {results: []};
    },
    componentDidMount(){
         $.ajax({
              url: this.props.url,
              dataType: 'json',
              cache: false,
              success: function(data) {
                 this.setState({results: data.results});
              }.bind(this),
              error: function(xhr, status, err) {
                 console.error(this.props.url, status, err.toString());
              }.bind(this)
        });
    },
    render: function()
    {
        return(
          <div>
                <QuestionListComponent data={this.state.results} />
          </div>
        );
    }
});

module.exports = QuestionPanelComponent;