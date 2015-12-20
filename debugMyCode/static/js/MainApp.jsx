var React = require('react');
var ReactDOM = require('react-dom');
var TestComponent = require('./components/test1.jsx');

var BaseComponent = React.createClass({
    render: function(){
        return (
            <div>
                <TestComponent />
                Does it?
            </div>
         )
    }
});

ReactDOM.render(<BaseComponent />, document.getElementById('content'));