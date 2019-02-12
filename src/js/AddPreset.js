import React, { Component } from 'react';

class AddPreset extends Component {

	state = {
		newPresetName: '',
	}

	handleNewPresetValue = (e) => { //tmp
  	this.setState({
  		newPresetName: e.target.value
  	});
  }

  handleSubmit = (e) => {
  	e.preventDefault();
  	this.props.addPreset(this.state.newPresetName);
  	this.setState({
  		newPresetName: ''
  	});
  }

	render() {
		return (
			<form className="preset preset-add" onSubmit={this.handleSubmit}>
      	<input type="text" id="newPresetName" value={this.state.newPresetName} onChange={this.handleNewPresetValue}/>
      	<button className="button-action add"> + </button>
      </form>
		);
	}
}

export default AddPreset;