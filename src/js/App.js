import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
	<header>
		<h1>{props.title}</h1>
		<p className="stats">Presets: {props.numberOfPresets}</p>
	</header>
);

const Card = (props) => (
	<div className="card">
		<div className="card-title">{props.cardTitle}</div>
		<div className="card-description">{props.cardDescription}</div>
		<div className="card-img"></div>
	</div>
);

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
			    			<Card cardTitle={card.name} cardDescription={card.description} />
			    		))
			    	}
			    </div>
			</div> 
		);
	}
}

class App extends React.Component {
	state = {
			"presets": [
	    {
	      "id": 1,
	      "name": "Grand Scheme",
	      "cards": [1, 2, 3]
	    },
	    {
	      "id": 2,
	      "name": "Deconstrution",
	      "cards": [2, 3]
	    },
	    {
	      "id": 3,
	      "name": "Give and Take",
	      "cards": [1, 3, 4]
	    },
	    {
	      "id": 4,
	      "name": "Reach For Tomorrow",
	      "cards": [4]
	    }
	  ],
	  "cards": [
	    {
	      "id": 1,
	      "name": "Festival",
	      "description": "+2 Actions, +1 Buy, +2 Gold"
	    },
	    {
	      "id": 2,
	      "name": "Witch",
	      "description": "+2 Cards; Each other player gains a Curse."
	    },
	    {
	      "id": 3,
	      "name": "Militia",
	      "description": "+2 Gold; Each other player discard down to 3 card in hand."
	    },
	    {
	    	"id": 4,
	      "name": "Laboratory",
	      "description": "+2 Cards, +1 Action"
	    }
	  ]
	}

	handleRemovePreset = (id) => {
    this.setState( prevState => {
      return {
        presets: prevState.presets.filter( preset => preset.id !== id ),
      };
    });
  }

	render() {
		return (
			<div className="preset-builder">
       			<Header 
       				title="Domininion Preset Builder" 
       				numberOfPresets={this.state.presets.length}
       			/>

       			{
		          this.state.presets.map( preset => 
		          	{
		          		let presetCardsList = [];
	          			preset.cards.map( cardNumber => {
	          				presetCardsList.push(this.state.cards.find(card => card.id === cardNumber));
	          			});

		          		return (
			            	<Preset 
			             		id={preset.id}
			             		key={preset.id.toString()}
			             		name={preset.name} 
			             		removePreset={this.handleRemovePreset}
			              	presetCardsList={presetCardsList}
			           		/>
			            );
		          	}
		          )
		        }  
			</div> 
		);
	}
}

export default App;