import React from 'react';
import { connect } from 'react-redux';

import { getCharacters } from '../actions';

const Characters = props => {
  const fetchCharacters = e => {
    e.preventDefault();
    props.getCharacters();
  };

  return (
    <>
      <h2>Rick & Morty Characters</h2>
      {props.isFetching && <p>Fetching Characters</p>}
      <div className = "characters">
        {props.characters.map(characters => (
          <h4 key={characters.id}>{characters.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchCharacters}>Fetch Characters!</button>
    </>
  );
};

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  {getCharacters}
)(Characters);