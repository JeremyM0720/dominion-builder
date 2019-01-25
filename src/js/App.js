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
				<span className="card-count">Cards: 10</span>
				<button className="button-action delete" onClick={ () => this.props.removePreset(this.props.id) }> ✖ </button>
			</div>
		);
	}
}

class Preset extends React.Component {
	render() {
		return(
			<div className="player">
			    <span className="player-name">
			    	{this.props.presetName}
			    </span> 

			    <Action 
			    	id={this.props.id}
            removePreset={this.props.removePreset}
			    />
			</div> 
		);
	}
}

class App extends React.Component {
	state = {
		initialPresets: [
			{
				presetName: 'Grand Scheme',
				id: 1
			},
			{
				presetName: 'Deconstruction',
				id: 2
			},
			{
				presetName: 'Give and Take',
				id: 3
			},
		]
	}

	handleRemovePreset = (id) => {
    this.setState( prevState => {
      return {
        initialPresets: prevState.initialPresets.filter( preset => preset.id !== id ),
      };
    });
  }

	render() {
		return (
			<div className="preset-builder">
       			<Header 
       				title="Domininion Preset Builder" 
       				numberOfPresets={this.state.initialPresets.length}
       			/>
       			{
		          this.state.initialPresets.map( preset =>
		            <Preset 
		              id={preset.id}
		              key={preset.id.toString()}
		              presetName={preset.presetName} 
		              removePreset={this.handleRemovePreset}
		            />
		          )
		        }  
			</div> 
		);
	}
}

export default App;