import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Actions from './Actions';

class Preset extends PureComponent {
	state = {
		isShown: false,
	}

	toggleAccordion = () => {
		this.setState( prevState => {
			return {
				isShown: !prevState.isShown
			};
		});
	}

	render() {
		const {
			deleteCard,
			id,
			name,
			presetCardsList,
			removePreset,
			selectedPreset,
			selectPreset
		} = this.props;

		return(
			<div className={"preset " + (selectedPreset ? 'selected' : '') + (this.state.isShown ? 'show' : '')}>
			    <span className="preset-name" onClick={this.toggleAccordion}>
			    	{name}
			    </span> 

			    <Actions cardCount={presetCardsList.length} selectPreset={selectPreset} removePreset={removePreset} id={id} />

			    <div className="preset-details card-container">
			    	{
			    		presetCardsList.map( card => (
			    			<Card cardTitle={card.name} cardDescription={card.description} key={card.id.toString()} presetId={id} cardId={card.id} deleteCard={deleteCard}/>
			    		))
			    	}

			    	{
			    		(presetCardsList.length < 10) ? <div className="card-add-container"><button className="card-add"> + </button></div> : ''
			    	}
			    </div>
			</div> 
		);
	}
}

Preset.proptypes = {
	deleteCard: PropTypes.func,
	id: PropTypes.number,
	name: PropTypes.string,
	presetCardsList: PropTypes.array,
	removePreset: PropTypes.func,
	selectedPreset: PropTypes.number,
	selectPreset: PropTypes.func,
};

export default Preset;