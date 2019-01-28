import React from 'react';

const Card = (props) => { 
	const deleteButton = (props.isList === true) ? <button className="card-delete" onClick={ () => props.deleteCard(props.presetId, props.cardId) }> ✖ </button>: '';

	return (
		<div className="card">
			<div className="card-title">{props.cardTitle}</div>
			<div className="card-description">{props.cardDescription}</div>
			<div className="card-img"></div>
			{deleteButton}
		</div>
	);
}

export default Card;