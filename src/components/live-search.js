import React, { Component } from 'react';
import CharacterList from './character-list'
import SearchForm from './search-form'
import CharacterCount from './character-count'


class LiveSearch extends Component {
  constructor(props) {
  super(props)
    this.state = {
      characters:this.props.characters,
      searchTerm:''
    }
  }
  setSearchTerm(e) {
    const searchTerm = e.target.value.toLowerCase();
    this.setState({
      searchTerm
    })
    this.filterCharacterList(searchTerm)
  }

  filterCharacterList(searchTerm) {
    let filteredCharacters 
  if (searchTerm) {
      const characterArray =[...this.props.characters]
      filteredCharacters  = characterArray.filter( (character) => {
      return character.name.toLowerCase().includes(searchTerm);
    })
  } else {
     filteredCharacters = this.props.characters
  }
    this.setState({
      characters: filteredCharacters
    })
  }

  render() {
    return (
      <div className="LiveSearch">
        <SearchForm handleChange={(e) => {
           this.setSearchTerm(e)
          }} />
        <CharacterCount characterLength={this.state.characters.length}/>
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default LiveSearch;
