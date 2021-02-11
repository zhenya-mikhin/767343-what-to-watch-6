import React from 'react';
import MainPage from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {title, genre, release} = props;

  return (
    <MainPage
      title={title}
      genre={genre}
      release={release}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired
};

export default App;
