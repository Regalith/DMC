var React = require('react');

module.export = QuestionComponent = React.createClass({
   render : function() {

       return(
            <li
            className="list-group-item"
            onClick={() => {}}>
            {this.props.children}
      </li>
       )

   }

});