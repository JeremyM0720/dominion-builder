import React, { Component } from 'react';
import Card from './Card';
import Actions from './Actions';

class Preset extends Component {
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
		const show = this.state.isShown ? 'show' : '';
		const selected = this.props.selectedPreset === this.props.id ? 'selected' : '';
		const addCardBtn = this.props.presetCardsList.length < 10 ? <div className="card-add-container"><button className="card-add"> + </button></div> : '';

		return(
			<div className={`preset ${show} ${selected}`}>
			    <span className="preset-name" onClick={this.toggleAccordion}>
			    	{this.props.name}
			    </span> 

			    <Actions cardCount={this.props.presetCardsList.length} selectPreset={this.props.selectPreset} removePreset={this.props.removePreset} id={this.props.id} />

			    <div className="preset-details card-container">
			    	{
			    		this.props.presetCardsList.map( card => (
			    			<Card cardTitle={card.name} cardDescription={card.description} key={card.id.toString()} presetId={this.props.id} cardId={card.id} deleteCard={this.props.deleteCard}/>
			    		))
			    	}

			    	{addCardBtn}
			    </div>
			</div> 
		);
	}
}

export default Preset;