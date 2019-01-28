import React from 'react';
import database from './data';
import Header from './Header';
import Preset from './Preset';

class App extends React.Component {
	state = {
						database,
						newPresetName: null,
						selectedPreset: null
					};

	//Methods for Preset
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
  	this.setState({
  		newPresetName: name
  	});
  }

  handleSelectPreset = id => {
  	if(this.state.database.presets.find( preset => preset.id === id && preset.cards.length < 10)) {
  		return false;
  	}

  	this.setState({
  		selectedPreset: id
  	});
  }

  handleAddPreset = name => {
  	const newPreset = {
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

  //Methods for Cards
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
			          		const presetCardsList = [];
		          			preset.cards.map( cardNumber => {
		          				presetCardsList.push(this.state.database.cards.find(card => card.id === cardNumber));
		          			});

			          		return (
				            	<Preset 
				             		id={preset.id}
				             		key={preset.id.toString()}
				             		name={preset.name} 
				             		selectedPreset={this.state.selectedPreset}
				             		selectPreset={this.handleSelectPreset}
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