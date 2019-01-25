import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
	<header>
		<h1>{props.title}</h1>
		<p className="stats">Presets: {props.numberOfPresets}</p>
	</header>
);

class Action extends React.Component {
	render() {
		return(
			<div className="actions">
				<span className="card-count">Cards: {this.props.cards.length}</span>
				<button className="button-action delete" onClick={ () => this.props.removePreset(this.props.id) }> ✖ </button>
			</div>
		);
	}
}

class Cards extends React.Component {
	render() {

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

		return(
			<div className={`preset ${show}`}>
			    <span className="preset-name" onClick={this.toggleAccordion}>
			    	{this.props.name}
			    </span> 

			    <Action 
			    	id={this.props.id}
            removePreset={this.props.removePreset}
            cards={this.props.cards}
			    />

			    <div className="preset-details">
			    	
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
	      "cards": [1, 2]
	    },
	    {
	      "id": 2,
	      "name": "Deconstrution",
	      "cards": [2, 3]
	    },
	    {
	      "id": 3,
	      "name": "Give and Take",
	      "cards": [1, 2, 3]
	    }
	  ],
	  "cards": [
	    {
	      "id": 1,
	      "name": "Festival",
	      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	    },
	    {
	      "id": 2,
	      "name": "Witch",
	      "description": "Nunc dignissim risus id metus."
	    },
	    {
	      "id": 3,
	      "name": "Militia",
	      "description": "Integer vitae libero ac risus egestas placerat."
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
		            <Preset 
		              id={preset.id}
		              key={preset.id.toString()}
		              name={preset.name} 
		              cards={preset.cards}
		              removePreset={this.handleRemovePreset}
		            />
		          )
		        }  
			</div> 
		);
	}
}

export default App;