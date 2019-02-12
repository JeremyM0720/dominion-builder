import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent { 

	handleDeleteCard = () => {
		this.props.deleteCard(this.props.presetId, this.props.cardId);
	}

	render() {
		const {
			cardTitle,
			cardDescription,
		} = this.props;

		return (
			<div className="card">
				<div className="card-title">{ cardTitle }</div>
				<div className="card-description">{ cardDescription }</div>
				<div className="card-img"></div>
				<button className="card-delete" onClick={ this.handleDeleteCard }> ✖ </button>
			</div>
		);
	}
}

Card.proptypes = {
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string
}

export default Card;