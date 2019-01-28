import React from 'react';
import database from './data';

const Header = (props) => (
	<header>
		<h1>{props.title}</h1>
		<p className="stats">Presets: {props.numberOfPresets}</p>
	</header>
);

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

class App extends React.Component {
	state = {
						database,
						newPresetName: null
					};

	handleRemovePreset = id => {
    this.setState( prevState => {
      return {
      	database: {
      		presets: prevState.database.presets.filter( preset => preset.id !== id ),
      		cards: prevState.database.cards //tmp; can't figure out atm
      	}
      };
    });
  }

  handleNewPresetValue = name => { //tmp
  	this.setState( prevstate => {
  		return {
  			newPresetName: name
  		}
  	});
  }

  handleAddPreset = name => {
  	let newPreset = {
							  			id: Math.floor((Math.random() * 10000) + 1),  
								  		name: name,
								  		cards: []
							  		};
  	this.setState( prevState => {
      return {
      	database: {
      		presets: prevState.database.presets.concat(newPreset),
      		cards: prevState.database.cards //tmp; can't figure out atm
      	}
      };
    });

    this.setState({
    	newPresetName: null
    });
  }

  handleDeleteCard = (presetId, cardId) => {
  	this.setState( prevState => {
  		return {
  			database: {
  				presets: prevState.database.presets.filter( preset => {
  					if (preset.id === presetId) {
  						preset.cards = preset.cards.filter( card => card !== cardId);
  					}
  					
  					return true;
  				}),
  				cards: prevState.database.cards
  			}
  		};
  	});
  }

	render() {
		return (
			<div className="preset-builder">
       			<Header 
       				title="Dominion Preset Builder" 
       				numberOfPresets={this.state.database.presets.length}
       			/>

       			<div className="preset-list">
	       			{
			          this.state.database.presets.map( preset => 
			          	{
			          		let presetCardsList = [];
		          			preset.cards.map( cardNumber => {
		          				presetCardsList.push(this.state.database.cards.find(card => card.id === cardNumber));
		          			});

			          		return (
				            	<Preset 
				             		id={preset.id}
				             		key={preset.id.toString()}
				             		name={preset.name} 
				             		removePreset={this.handleRemovePreset}
				             		deleteCard={this.handleDeleteCard}
				              	presetCardsList={presetCardsList}
				           		/>
				            );
			          	}
			          )
			        }

			        <div className="preset preset-add">
			        	<input type="text" id="newPresetName" onChange={e => this.handleNewPresetValue(e.target.value)}/><button className="button-action add" onClick={ () => this.handleAddPreset(this.state.newPresetName) }> + </button>
			        </div>
		        </div>
			</div> 
		);
	}
}

export default App;