import  React from 'react';

//Bootstrap components
var Well = require('react-bootstrap').Well;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;


class FilterPanelComponent extends React.Component{

   constructor(props){
        super(props);
        this.state = {
            program : '',
            framework :'',
            language : '',
            minBounty : 0,
            isAnswered : false,

        };
    }

    handleSubmit(e){
        e.defaultPrevented();
        console.log("Boop");
        var program = this.state.program;
        var framework = this.state.framework;
        var language = this.state.language;
        var minBounty = this.state.minBounty;
        var isAnswered = this.state.isAnswered;

        this.props.handleFilterSubmit({program: program, framework: framework, language: language, min_bounty: minBounty, is_answered: isAnswered});
        this.setState({
            program : '',
            framework :'',
            language : '',
            minBounty : 0,
            isAnswered : false,
        });
    }

    render()
    {
        return(
          <div>
              <Well>
                    <h3>Filters</h3>
                    <form onSubmit={this.handleSubmit} >
                        <Input bsSize='small' value={this.state.program} type="text" label="Program" placeholder="Enter Program" />
                        <Input bsSize='small' value={this.state.framework} type="text" label="Framework" placeholder="Enter Framework" />
                        <Input bsSize='small' value={this.state.language} type="text" label="Language" placeholder="Enter Language" />
                        <Input bsSize='small' value={this.state.minBounty} type="text" addonBefore="$" addonAfter=".00" label="Minimum Bounty"/>
                        <Input type="checkbox" value={this.state.isAnswered} label="Is Answered" />
                        <ButtonInput type="submit" value="Search" />
                    </form>
              </Well>
          </div>
        );
    }
};

export default FilterPanelComponent;