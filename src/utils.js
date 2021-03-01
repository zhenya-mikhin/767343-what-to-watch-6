import React from 'react';
import films from './mocks/films';

export const formatMinToHours = (mins) => {
  return `${Math.trunc(mins / 60)}h ${mins % 60}m`;
};

export const joinComponents = (array, dividerString, dividerJsx) => {
  return array.reduce((acc, item) => (
    <React.Fragment>{acc}{dividerString}{dividerJsx}{item}</React.Fragment>
  ));
};

export const getFilmById = (filmId) => {
  return films.find((film) => film.id === parseInt(filmId, 10));
};
