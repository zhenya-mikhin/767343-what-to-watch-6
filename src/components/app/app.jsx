import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../pages/main/main';
import AddReview from '../pages/add-review/add-review';
import Film from '../pages/film/film';
import MyList from '../pages/mylist/mylist';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';

import PropTypes from 'prop-types';
import FilmProp from '../props/film-prop';
import ReviewProp from '../props/review-prop';

import {getFilmById} from '../../utils';

const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage films={films} reviews={reviews} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact path="/films/:id"
          render={({match}) => {
            const film = getFilmById(match.params.id);
            return film ?
              <Film film={film} films={films} /> :
              <NotFoundPage />;
          }}
        />
        <Route exact path="/films/:id/review"
          render={({match}) => {
            const film = getFilmById(match.params.id);
            return film ?
              <AddReview film={film} /> :
              <NotFoundPage />;
          }}
        />
        <Route exact path="/player/:id"
          render={({match}) => {
            const film = getFilmById(match.params.id);
            return film ?
              <Player
                name={film.name}
                videoLink={film.videoLink}
                runTime={film.runTime}
              /> :
              <NotFoundPage />;
          }}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  reviews: PropTypes.arrayOf(ReviewProp),
};

export default App;
