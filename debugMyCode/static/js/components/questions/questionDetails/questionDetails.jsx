var React = require('react');

var QuestionDetailsComponent = React.createClass({

    getInitialState : function(){
        return {question : []};
    },

    componentDidMount(){
         $.ajax({
              url: "/api/QA/getQuestion/" + this.props.params.id,
              dataType: 'json',
              cache: false,
              success: function(data) {
                 this.setState({question: data});
              }.bind(this),
              error: function(xhr, status, err) {
                 console.error('/api/QA/getQuestion/' + this.props.params.id, status, err.toString());
              }.bind(this)
        });
    },

    render: function()
    {
        return(
          <div className="container">
              <p>{this.state.question.title}</p>
              <p>{this.state.question.detail_text}</p>
          </div>
        );
    }
});

module.exports = QuestionDetailsComponent;