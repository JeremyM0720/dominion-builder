import React, { Component } from 'react';
import database from './data';
import Header from './Header';
import Preset from './Preset';
import AddPreset from './AddPreset';
import PresetList from './PresetList';

class App extends Component {
  state = { database };

  prevPresetId = this.state.database.presets.length;

  addPreset = name => {
    this.setState( prevState => {
      return {
        database: {
          presets: [
            ...prevState.database.presets,
            {
              id: this.prevPresetId += 1,  
              name: name,
              cards: []
            }
          ],
          cards: prevState.database.cards //I wonder if there's a way not to include this
        }
      };
    });
  }

  removePreset = id => {
    this.setState( prevState => {
      return {
        database: {
          presets: prevState.database.presets.filter( preset => preset.id !== id ),
          cards: prevState.database.cards //I wonder if there's a way not to include this
        }
      };
    });
  }

  deleteCard = (presetId, cardId) => {
    this.setState( prevState => {
      return {
        database: {
          presets: prevState.database.presets.filter( preset => {
            if (preset.id === presetId) {
              preset.cards = preset.cards.filter( card => card !== cardId);
            }
            
            return true;
          }),
          cards: prevState.database.cards //I wonder if there's a way not to include this
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

            <PresetList 
              database={this.state.database}
              removePreset={this.removePreset}
              deleteCard={this.deleteCard}
            />

            <AddPreset 
              addPreset={this.addPreset}
            /> 
      </div> 
    );
  }
}

export default App;