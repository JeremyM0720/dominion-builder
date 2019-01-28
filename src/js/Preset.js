import React from 'react';

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

		return(
			<div className={`preset ${show}`}>
			    <span className="preset-name" onClick={this.toggleAccordion}>
			    	{this.props.name}
			    </span> 

			    <div className="actions">
						<span className="card-count">Cards: {this.props.presetCardsList.length}</span>
						<button className="button-action delete" onClick={ () => this.props.removePreset(this.props.id) }> ✖ </button>
					</div>

			    <div className="preset-details card-container">
			    	{
			    		this.props.presetCardsList.map( card => (
			    			<Card cardTitle={card.name} cardDescription={card.description} key={card.id.toString()} isList={true} presetId={this.props.id} cardId={card.id} deleteCard={this.props.deleteCard}/>
			    		))
			    	}
			    	<div className="card-add-container"><button className="card-add"> + </button></div>
			    </div>
			</div> 
		);
	}
}

export default Preset;