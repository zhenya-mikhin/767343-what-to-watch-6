import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../main/main.jsx';
import AddReview from '../add-review/add-review.jsx';
import Film from '../film/film.jsx';
import MyList from '../mylist/mylist.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import Player from '../player/player.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import PropTypes from 'prop-types';

const App = (props) => {
  const {title, genre, release} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage title={title} genre={genre} release={release} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired
};

export default App;
