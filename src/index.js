import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Setting = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: `2014`
};

ReactDOM.render(
    <App
      title={Setting.TITLE}
      genre={Setting.GENRE}
      release={Setting.RELEASE}
    />,
    document.querySelector(`#root`)
);
