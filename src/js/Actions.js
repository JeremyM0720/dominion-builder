import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Actions extends PureComponent {

	handleSelectPreset = () => {
		this.props.selectPreset(this.props.id);
  }

  handleRemovePreset = () => {
  	this.props.removePreset(this.props.id);
  }

	render() {
		const { cardCount, id } = this.props;

		let cardCounter;
		let cardCountColor;

		if ( cardCount < 10 ) {
			cardCounter = `Cards: ${cardCount}/10`;
		} else {
			cardCounter = 'Complete';
			cardCountColor = 'card-count-complete';
		}

		return (
			<div className="actions">
				<span className={`card-count ${cardCountColor}`}>{cardCounter}</span>
				<button className="button-action add" onClick={ this.handleSelectPreset }> ✓ </button>
				<button className="button-action delete" onClick={ this.handleRemovePreset }> ✖ </button>
			</div>
		);
	}
}

Actions.proptypes = {
	cardCount: PropTypes.number,
	id: PropTypes.number
}

export default Actions;