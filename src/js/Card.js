import React, { Component } from 'react';

class Card extends Component { 

	handleDeleteCard = () => {
		this.props.deleteCard(this.props.presetId, this.props.cardId);
	}

	render() {
		return (
			<div className="card">
				<div className="card-title">{ this.props.cardTitle }</div>
				<div className="card-description">{ this.props.cardDescription }</div>
				<div className="card-img"></div>
				<button className="card-delete" onClick={ this.handleDeleteCard }> ✖ </button>
			</div>
		);
	}
}

export default Card;