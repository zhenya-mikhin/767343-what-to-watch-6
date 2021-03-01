import React from 'react';
import {useHistory} from 'react-router-dom';

import FilmList from '../../blocks/film-list';
import Genres from '../../blocks/genres';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';

import PropTypes from 'prop-types';
import FilmProp from '../../props/film-prop';
import ReviewProp from '../../props/review-prop';
import {FILMS_AMOUNT} from '../../../const';

const MainPage = (props) => {
  const {films} = props;
  const {id, name, posterImage, backgroundImage, genre, released} = films[0];
  const history = useHistory();

  const handlePlayBtnClick = () => {
    history.push(`/player/${id}`);
  };

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header modificator="movie-card__head" />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={handlePlayBtnClick}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Genres />
        <FilmList films={films} filmsAmount={FILMS_AMOUNT} />
      </section>

      <Footer />
    </div>
  </React.Fragment>;
};

MainPage.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  reviewx: PropTypes.arrayOf(ReviewProp)
};

export default MainPage;
