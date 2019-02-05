import React, { Component } from 'react';
import Preset from './Preset';

class PresetList extends Component {

	state = {
		selectedPreset: '',
	}

	selectPreset = id => {
		if(this.props.database.presets.find( preset => preset.id === id && preset.cards.length < 10)) {
  		return false;
  	}

  	this.setState({ selectedPreset: id });
	}

	render() {
		return (
			<div className="preset-list">
   			{
          this.props.database.presets.map( preset => 
          	{
          		const presetCardsList = [];
        			preset.cards.map( cardNumber => {
        				presetCardsList.push(this.props.database.cards.find(card => card.id === cardNumber));
        			});

          		return (
	            	<Preset 
	             		id={preset.id}
	             		key={preset.id.toString()}
	             		name={preset.name} 
	             		selectedPreset={this.state.selectedPreset}
	             		selectPreset={this.selectPreset}
	             		removePreset={this.props.removePreset}
	             		deleteCard={this.props.deleteCard}
	              	presetCardsList={presetCardsList}
	           		/>
	            );
          	}
          )
        }
      </div>
		);
	}
}

export default PresetList;