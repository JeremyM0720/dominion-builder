import React, { Component } from 'react';

class Actions extends Component {

	handleSelectPreset = () => {
		this.props.selectPreset(this.props.id);
  }

  handleRemovePreset = () => {
  	this.props.removePreset(this.props.id);
  }

	render() {
		const cardCount = this.props.cardCount < 10 ? `Cards: ${this.props.cardCount}/10` : 'Complete';
		const cardCountColor = this.props.cardCount < 10 ? '' : 'card-count-complete';

		return (
			<div className="actions">
				<span className={`card-count ${cardCountColor}`}>{cardCount}</span>
				<button className="button-action add" onClick={ this.handleSelectPreset }> ✓ </button>
				<button className="button-action delete" onClick={ this.handleRemovePreset }> ✖ </button>
			</div>
		);
	}
}

export default Actions;