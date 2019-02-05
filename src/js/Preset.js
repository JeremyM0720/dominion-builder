import React, { Component } from 'react';
import Card from './Card';

class Actions extends Component {
	render() {
		const cardCount = this.props.cardCount < 10 ? `Cards: ${this.props.cardCount}/10` : 'Complete';
		const cardCountColor = this.props.cardCount < 10 ? '' : 'card-count-complete';

		return (
			<div className="actions">
				<span className={`card-count ${cardCountColor}`}>{cardCount}</span>
				<button className="button-action add" onClick={ () => this.props.selectPreset(this.props.id)}> ✓ </button>
				<button className="button-action delete" onClick={() => this.props.removePreset(this.props.id)}> ✖ </button>
			</div>
		);
	}
}

class Preset extends React.Component {
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
			    			<Card cardTitle={card.name} cardDescription={card.description} key={card.id.toString()} isList={true} presetId={this.props.id} cardId={card.id} deleteCard={this.props.deleteCard}/>
			    		))
			    	}

			    	{addCardBtn}
			    </div>
			</div> 
		);
	}
}

export default Preset;