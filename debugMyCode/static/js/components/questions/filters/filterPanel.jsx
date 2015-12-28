var React = require('react');
var Well = require('react-bootstrap').Well;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var FilterPanelComponent= React.createClass({

    /*getInitialState : function(){
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
    },*/

    render: function()
    {
        return(
          <div>
              <Well>
                    <h3>Filters</h3>
                    <form>
                        <Input bsSize='small' type="text" label="Keyword" placeholder="Enter Keywords" />
                        <Input bsSize='small' type="text" label="Program" placeholder="Enter Program" />
                        <Input bsSize='small' type="text" label="Framework" placeholder="Enter Framework" />
                        <Input bsSize='small' type="text" label="Language" placeholder="Enter Language" />
                        <ButtonInput type="submit" value="Search" />
                    </form>
              </Well>
          </div>
        );
    }
});

module.exports = FilterPanelComponent;