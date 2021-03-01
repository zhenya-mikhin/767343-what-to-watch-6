import React, {useState} from 'react';

import FilmCard from './film-card';
import ShowMore from './show-more';

import PropTypes from 'prop-types';
import FilmProp from '../props/film-prop';

const FilmList = (props) => {
  const {films, filmsAmount} = props;
  const [activeFilmCardId, setActiveFilmCardId] = useState(null);

  const handleFilmCardHover = (id) => {
    setActiveFilmCardId(id);
    return activeFilmCardId;
  };

  return (
    <>
      <div className="catalog__movies-list">
        {
          films.slice(0, filmsAmount).map((film) =>
            (
              <FilmCard key={film.id} film={film} onHover={handleFilmCardHover} />
            )
          )
        }
      </div>
      {(films.length > filmsAmount) && <ShowMore />}
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  filmsAmount: PropTypes.number.isRequired
};

export default FilmList;
