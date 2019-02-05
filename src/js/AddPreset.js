import React, { Component } from 'react';

class AddPreset extends Component {

	state = {
		newPresetName: null,
	}

	handleNewPresetValue = newPresetName => { //tmp
  	this.setState({
  		newPresetName
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
			<form className="preset preset-add" onSubmit={ this.handleSubmit }>
      	<input type="text" id="newPresetName" onChange={ e => this.handleNewPresetValue(e.target.value) }/>
      	<button className="button-action add"> + </button>
      </form>
		);
	}
}

export default AddPreset;