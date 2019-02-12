import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
		const {
			database,
			removePreset,
			deleteCard
		} = this.props;

		return (
			<div className="preset-list">
   			{
          database.presets.map( preset => 
          	{
          		let presetCardsList = [];
        			preset.cards.map( cardNumber => {
        				presetCardsList.push(database.cards.find(card => card.id === cardNumber));
        			});

          		return (
	            	<Preset 
	             		id={preset.id}
	             		key={preset.id.toString()}
	             		name={preset.name} 
	             		selectedPreset={(this.state.selectedPreset === preset.id) ? true : false}
	             		selectPreset={this.selectPreset}
	             		removePreset={removePreset}
	             		deleteCard={deleteCard}
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

PresetList.proptypes = {
	database: PropTypes.array,
	removePreset: PropTypes.func,
	deleteCard: PropTypes.func
}

export default PresetList;